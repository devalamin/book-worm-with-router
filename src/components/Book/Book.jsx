import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const { bookId, image, author, bookName } = book;
    return (
        <div>
            <Link to={`/books/${bookId}`}>
                <div className="card bg-base-100 shadow-sm p-4">
                    <figure className='bg-slate-400 py-6 rounded-2xl'>
                        <img
                            src={image}
                            className='h-[166px]'
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {bookName}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div></Link>

        </div>
    );
};

export default Book;