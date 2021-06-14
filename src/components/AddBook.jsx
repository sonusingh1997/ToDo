import React from 'react'
import  {useState}  from 'react'


const AddBook = (props) => {
    const [title, setTitle] = useState('')
    const [AuthorName, setAuthorName] = useState('')
    const [Price, setPrice] = useState('')
    const book = props.book;
    const FormHandle = (event) => {
        event.preventDefault();
        book(title, AuthorName, Price)

        console.log(title, AuthorName, Price)
        setTitle('')
        setAuthorName('')
        setPrice('')
        
    }
    const TitleHandle = (event) => {
       setTitle(event.target.value) 
    }
    const AuthorNameHandle = (event) => {
        setAuthorName(event.target.value) 
    }
    const PriceHandle = (event) => {
        setPrice(event.target.value) 
    }


    return (
        <div className="container">
            <form onSubmit={FormHandle}>
                <div className="row">
                    <label>Title</label>
                    <input type="text" onChange={TitleHandle} value={title}></input>
                </div>
                <div className="row">
                    <label>Author Name</label>
                    <input type="text" onChange={AuthorNameHandle} value={AuthorName}></input>
                </div>
                <div className="row">
                    <label>Price</label>
                    <input type="number" onChange={PriceHandle} value={Price}></input>
                </div>
                <div className="row">
                     <button type="submit">Add Book</button>
                </div>
            </form>
        </div>
    )
}
export default AddBook