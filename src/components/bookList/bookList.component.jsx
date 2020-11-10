import React from 'react';
import './bookList.styles.scss';

const BookList = () => {
    const books = [
        {title: "Becoming", author: "Michelle Obama"},
        {title: "Recursion", author: "Blake Crouch"},
        {title: "The Help", author: "Kathryn Stockett"},
        {title: "Bad Blood", author: "John Carreyrou"},
        {title: "Normal People", author: "Sally Rooney"},
        {title: "The Uninhabitale Earth", author: "David Wallace-Wells"},
        {title: "Where the Crawdads Sing", author: "Delia Owens"},
        {title: "Design Is How It Works", author: "Jay Greene"},
        {title: "Girl, Stop Apologizing", author: "Rachel Hollis"},
        {title: "Design Is How It Works", author: "Jay Greene"},
        {title: "The Subtle Art of Not Giving a F**k", author: "Mark Manson"},
        {title: "Digital Minimalism", author: "Cal Newport"},
    ]
    return (
    <div className='book-list-component'>
    <div className='book-list-title'> Recent Reads...</div>
        <ul>
        {books.map((value, index) => {
            return <li className = "book-item" key={index}>{value.title} - {value.author}</li>
        })}
        </ul>
    </div>
    );  
};

export default BookList;
