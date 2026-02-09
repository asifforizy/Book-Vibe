import React from 'react';

const Book = ({ book }) => {
    return (
        <div>
            <div className="card bg-base-100  shadow-sm p-5">

                <div >
                    <img
                        src={book.image}
                        alt="Shoes"
                        alt={book.bookName}
                        className="w-full h-150 object-cover rounded-md"
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
                        <div className="badge ">{book.rating}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;