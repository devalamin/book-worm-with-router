import React, { useEffect, useState } from 'react';
import { displayFromLs } from '../../utilities/AddToDb';

const Dashboard = () => {

    const getWishListId = displayFromLs();

    const [newBooks, setNewBooks] = useState([])

    useEffect(() => {
        fetch('/booksData.json')
            .then(res => res.json())
            .then(data => setNewBooks(data))
    }, [])

    console.log(newBooks);
    let wishedListedBooks = []

    for (const id of getWishListId) {
        const numberId = parseInt(id)
        console.log(numberId);
        const filteredBooks = newBooks.find(book => book.bookId === numberId)
        console.log(filteredBooks);
        wishedListedBooks.push(filteredBooks)
    }
    console.log(wishedListedBooks);

    return (
        <div>
            <h6 className='text-2xl font-bold'>Your WishList</h6>
            {
                wishedListedBooks?.length ? wishedListedBooks?.map(wishBook => <p>{wishBook?.bookName}</p>) : <p>No Books In the wishlist</p>
            }
        </div>
    );
};

export default Dashboard;