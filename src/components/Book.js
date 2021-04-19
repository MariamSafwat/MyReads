import React, {Component} from 'react';


class Book extends Component {
    onMoveBook = (e) =>{
        const shelf = e.target.value;
        //const book = this.props
        //const result = await BooksAPI.update(book,shelf)
        //console.log('res',result)
        this.props.moveBook(this.props,shelf);
    };
    render(){
        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.imageLinks? this.props.imageLinks.thumbnail: ""}")` }}></div>
                            <div className="book-shelf-changer">
                                <select onChange={this.onMoveBook} defaultValue={this.props.shelf} >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                                </select>
                            </div>
                    </div>
                    <div className="book-title">{this.props.title}</div>
                    <div className="book-authors">{this.props.authors? this.props.authors.map(author=>author): ""}</div>
                </div>
            </li>
        )

    }
}

export default Book