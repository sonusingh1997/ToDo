import React,{useState} from 'react'
import AddBook from "./AddBook"
import BookList from "./BookList"
const Books = () => {
    
    const [books, setBooks] = useState([])
    
    const book = (title, AuthorName,Price) => {
        const mybook = { title, AuthorName,Price}
        setBooks([...books, mybook])
    }
    const DeleteItem = (book)=>{
        setBooks(books.filter((e)=>e!==book))
     }

    return <>
    <AddBook book={book} />
    <hr/>
    {
            books.map((e, i) => <BookList book={e} DeleteItem={DeleteItem} key={i}/>)
    }
    
    </>
}
export default Books