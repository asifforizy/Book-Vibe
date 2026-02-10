import React from 'react';

const Read = ({ book }) => {
    return (
        <div className='border border-gray-300 rounded-lg p-4 m-4 flex justify-between items-center'>
            <div className='flex gap-10'>
                <div>
                    <img src={book.image} alt={book.bookName} className="w-18 h-auto " />
                </div>

                <div>
                    <h2 className='text-2xl font-semibold mb-2'>{book.bookName}</h2>
                    <p className='text-gray-500 mb-2'>Author: {book.author}</p>
                    <p className='text-gray-500 mb-2'>Category: {book.category}</p>
                </div>
            </div>

            <div>
                <h1 className='text-red-600 text-3xl mr-10'>x</h1>
            </div>
        </div>
    );
};

export default Read;