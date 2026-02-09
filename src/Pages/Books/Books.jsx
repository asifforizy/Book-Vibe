import React from 'react';
import Book from './Book';

const Books = ({data}) => {

    



    return (
        <div className='my-20'>
            <h1 className='text-3xl font-bold text-center'>Books</h1>
            <div className='grid grid-cols-3 gap-20'>
                {
                    data.map(book => <Book book={book}></Book>)
                }
            </div>

        </div>
    );
};

export default Books;