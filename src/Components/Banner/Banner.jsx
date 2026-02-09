import React from 'react';
import img from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 rounded-lg mt-15 py-20">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                    <img
                        src={img}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className='lg:w-1/2'>
                        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                        <button className='btn btn-success mt-5'>View The List</button>
                
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;