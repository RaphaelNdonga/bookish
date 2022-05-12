import React from "react"
import './Book.css'

export default function Book(props) {
    const title = props.title
    const authors = props.authors[0].name
    console.log("Authors: ", authors)
    return (
        <div className="book">
            <h2>{title}</h2>
            <p>{authors}</p>
        </div>
    )
}