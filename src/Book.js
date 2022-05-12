import React from "react"
import './Book.css'

export default function Book(props) {
    const bookData = props.bookData
    return (
        <div className="book">
            {/* <img src={bookData.formats["image/jpeg"]} /> */}
            <h2>{bookData.title}</h2>
            <p>{bookData.authors}</p>
        </div>
    )
}