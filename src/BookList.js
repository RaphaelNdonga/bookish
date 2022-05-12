import React, { useEffect, useState } from "react";
import Book from "./Book";
import './Book.css'

export default function BookList() {
    const [bookList, setBookList] = useState([])

    useEffect(() => {
        async function getBooks() {
            const books = await fetch("https://gutendex.com/books/")
            const res = await books.json()
            setBookList(res.results)
            console.log(bookList.results[0].formats["image/jpeg"])
        }
        getBooks()
    }, [])

    return (
        <div className="books-list">

        </div>
    )
}