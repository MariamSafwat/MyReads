import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';


class BooksApp extends React.Component {
  constructor(){
    super();
    this.state = {
      books : [],
    };
  }
  async componentDidMount(){
    try{
      // get all books data from API then store it in books object
      await BooksAPI.getAll().then(books => {
        this.setState({books})
        console.log(books)
      })
    }catch(error){
      console.log(error);
    }
  }

  moveBook = (book,shelf) =>{
    // update shelf of book with the returned value from Book component
    BooksAPI.update(book,shelf).then(this.setState((state)=>({
      books: this.state.books.map(b =>{
        if (b.title === book.title){
          b.shelf = shelf;
          return b
        } else {
          return b
        }
      }),
    }))
    )
  };

  render() {
    const allBooks = this.state.books;
    const currentlyReading = this.state.books.filter((book) => book.shelf === "currentlyReading");
    const read = this.state.books.filter((book) => book.shelf === 'read');
    //console.log('cu', currentlyReading)
    const wantToRead = this.state.books.filter((book) => book.shelf === 'wantToRead');
    return (
      <div className="app">
        <Switch>
          <Route path='/' exact render={()=>(
            <Home 
              currentlyReading={currentlyReading}
              read={read}
              wantToRead={wantToRead}
              moveBook={this.moveBook}
            />
          )} />
          <Route path='/search' exact render={()=>(
            <Search
              books={allBooks}
              currentlyReading={currentlyReading}
              read={read}
              wantToRead={wantToRead}
              moveBook={this.moveBook}
            />
          )} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
