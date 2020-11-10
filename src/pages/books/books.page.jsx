import React from 'react';
import './books.styles.scss';
import Navbar from '../../components/navbar/navbar.component';
import Footer from '../../components/footer/footer.component';
import BookList from '../../components/bookList/bookList.component';

const Books = () => {
    return (
    <div className='books-page'>
        <Navbar/>
        <BookList/>
        <Footer/>
    </div>
    );  
};

export default Books;
