import React, {Component} from 'react';
import Book from './Book';
import {Link} from 'react-router-dom';
import {search} from '../BooksAPI';

class Search extends Component {
    constructor(args){
        super(args);
        this.state = {
            result:[]
        }
    }
    searchBook = e => {
            
            const query = e.target.value;
            if(!query){
                this.setState({result:[]});
                return;
            }
            //this.setState({query})
            //if(query){
            //    const result = await search(query);
            //    if(result.error){
            //        this.setState({query:[]})
            //    }
            //}
            search(query).then(result =>{
                if(result.error){
                    result = [];
                }
                result = result.map((book)=>{
                    const bookInShelf = this.props.books.find(b=> b.id === book.id);
                    if(bookInShelf){
                        book.shelf = bookInShelf.shelf;
                    }
                    else{
                        book.shelf='none';
                    }

                    return book;

                });
                this.setState({result});
                
            });
            
    }
    render(){

        return(
            <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/" >Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.searchBook}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                  
                  {this.state.result && this.state.result.map(book => (
                        <Book key={book.id} {...book} moveBook={this.props.moveBook} />        
                    ))}
                
              </ol>
            </div>
          </div>
        )
    }
}

export default Search