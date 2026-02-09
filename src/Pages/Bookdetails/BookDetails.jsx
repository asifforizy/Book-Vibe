import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { id } = useParams();

    const data = useLoaderData();
    const BookID = parseInt(id);

    const singleBook = data.find(book => book.bookId === BookID);

    console.log(singleBook);
    return (
        <div className='flex gap-20  w-2/3 mx-auto my-20 p-10'>
            <div>
                <img src={singleBook?.image} alt={singleBook?.bookName} className='h-170' />
            </div>
            <div className='w-1/2'>

                <h1 className='text-4xl font-semibold'>{singleBook?.bookName}</h1>
                <p className='text-xl mb-3'>By : {singleBook?.author}</p>
                <hr />
                <p className='text-xl my-3'>{singleBook.category}</p>
                <hr />
                <p className='my-3'><span className='font-semibold'>Review </span>: {singleBook.review}</p>
                <hr />
                <p className='my-3'><span className='font-semibold'>Number of Pages: </span>{singleBook.totalPages}</p>
                <p className='my-3'><span className='font-semibold'>Publisher: </span>{singleBook.publisher}</p>
                <p className='my-3'><span className='font-semibold'>Year of Publication:</span> {singleBook.yearOfPublication}</p>
                <p className='my-3'><span className='font-semibold'>Rating: </span>{singleBook.rating}</p>
                <button className='bg-blue-500 text-white px-4 py-2 rounded mr-2 mt-10'>Add to Reading List</button>
                <button className='bg-green-500 text-white px-4 py-2 rounded'>Mark as Read</button>

            </div>
        </div>
    );
};

export default BookDetails;