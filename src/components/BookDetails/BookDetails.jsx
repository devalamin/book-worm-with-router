import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const { bookId } = useParams()
    console.log(typeof bookId);
    const books = useLoaderData();
    console.log(books);

    if (!books) {
        return <p>Loading...</p>
    }
    const bookWithId = books?.find(book => {

        return book.bookId === parseInt(bookId)
    })
    // console.log(bookWithId);

    const { image, review, author, bookName, category, publisher } = bookWithId
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-sm">
                <figure className='py-5 w-52 md:w-full mx-auto'>
                    <img
                        src={image}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p className='text-xl font-bold'>{author}</p>
                    <p>{review}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Read</button>
                        <button className="btn btn-outline">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;