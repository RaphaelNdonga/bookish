import React, { useEffect, useState } from "react";
import Book from "./Book";
import './Book.css'

export default function BookList() {
    const [bookList, setBookList] = useState([])

    const bookElements = bookList.map((bookData) =>
        <Book title={bookData.title} authors={bookData.authors} />
    )

    // bookList.map((bookData) => {
    //     console.log("The title is: ", bookData.title)
    // })

    useEffect(() => {
        async function getBooks() {
            const books = await fetch("https://gutendex.com/books/")
            const res = await books.json()
            setBookList(res.results)
        }
        getBooks()
    }, [])

    // console.log("Book elements: ", bookElements)

    return (
        <div className="books-list">
            {bookElements}
        </div>
    )
}