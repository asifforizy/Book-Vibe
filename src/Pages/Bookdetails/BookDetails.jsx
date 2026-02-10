import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utilities/addToDB';

const BookDetails = () => {
    const { id } = useParams();
    const data = useLoaderData() || [];
    const bookID = parseInt(id);
    const singleBook = data.find(book => book.bookId === bookID);
const handleMarkAsRead = () => {

    addToStoredDB(id);
}

    return (
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 max-w-[1200px] mx-auto my-20 px-4">

            <div className="flex-shrink-0 w-full lg:w-1/3">
                <img
                    src={singleBook.image}
                    alt={singleBook.bookName}
                    className="  h-100 mx-auto  lg:h-full object-cover rounded-md"
                />
            </div>

            <div className="w-full lg:w-2/3">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">{singleBook.bookName}</h1>
                <p className="text-lg sm:text-xl mb-3">By: {singleBook.author}</p>
                <hr className="my-3" />

                <p className="text-lg sm:text-xl my-2"><span className="font-semibold">Category:</span> {singleBook.category}</p>
                <hr className="my-3" />

                <p className="my-2"><span className="font-semibold">Review:</span> {singleBook.review}</p>
                <hr className="my-3" />

                <p className="my-2"><span className="font-semibold">Number of Pages:</span> {singleBook.totalPages}</p>
                <p className="my-2"><span className="font-semibold">Publisher:</span> {singleBook.publisher}</p>
                <p className="my-2"><span className="font-semibold">Year of Publication:</span> {singleBook.yearOfPublication}</p>
                <p className="my-2"><span className="font-semibold">Rating:</span> {singleBook.rating} ⭐</p>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <button onClick={()=>handleMarkAsRead(id)} className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto">
                        Mark as Read
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded w-full sm:w-auto">
                        Add To WishList
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
