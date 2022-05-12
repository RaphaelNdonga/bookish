import React from "react"
import './Book.css'

export default function Book(props) {
    const title = props.title
    const authors = props.authors[0].name
    const img = props.img
    console.log(img)
    return (
        <div className="book">
            <img src={img} />
            <h2>{title}</h2>
            <p>{authors}</p>
        </div>
    )
}