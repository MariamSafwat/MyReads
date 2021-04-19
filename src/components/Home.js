import React, {Component} from 'react';
import Shelf from './Shelf';
import {Link} from 'react-router-dom';

class Home extends Component {
    render(){

        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Shelf title='Currently Reading' books ={this.props.currentlyReading} moveBook={this.props.moveBook}/>
              <Shelf title='Want To Read' books ={this.props.wantToRead} moveBook={this.props.moveBook}/>
              <Shelf title='Read' books ={this.props.read} moveBook={this.props.moveBook}/>
            </div>
            <div className="open-search">
                
                <Link to={"/search"}>Add a book</Link>
                
            </div>
          </div>
        )
    }
}

export default Home