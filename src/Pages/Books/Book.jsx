import React from 'react';
import { Link } from 'react-router';

const Book = ({ book }) => {
    return (
        <div>
            <Link to={`/bookDetails/${book.bookId}`}>
                <div className="card bg-base-100  shadow-sm p-5">

                    <div >
                        <img
                            src={book.image}
                            alt="Shoes"
                            className=" h-70 mx-auto object-cover rounded-md"
                        />
                    </div>


                    <div className="card-body">
                        <div className="card-actions justify-between mt-3">
                            <div className="badge badge-outline">{book.tags[0]}</div>
                            <div className="badge badge-outline">{book.tags[1]}</div>
                        </div>
                        <h2 className="card-title text-3xl"> {book.bookName}</h2>
                        <p className='text-lg'>By : {book.author}</p>
                        <hr />
                        <div className="card-actions justify-between mt-3">
                            <div className="badge">{book.category}</div>
                            <div className="badge ">{book.rating} ⭐</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;