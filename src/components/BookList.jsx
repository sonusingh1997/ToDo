import React from 'react'
import '../components/card.css'
const BookList = ({book,DeleteItem}) => {
    // const books = props.book;
    // const DeleteItem=props.DeleteItem
    return (
        <>
            <div className="card" >
                        <div className="card-header">Title : {book.title}</div>
                        <div className="card-header">AuthorName : {book.AuthorName}</div>
                        <div className="card-body"> Price : {book.Price}</div>
                        <div className="card-footer">
                            <button className="btn" onClick={() => DeleteItem(book)} >Delete</button>
                    </div>
            </div>
        </>
    )
}
export default BookList
