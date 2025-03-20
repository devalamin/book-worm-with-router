import React, { useEffect, useState } from 'react';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from 'react-router-dom';
import { getWishListItem } from '../../utilities/AddToDb';

const Dashboard = () => {
    const [wishBooks, setWishBooks] = useState([])
    const allBooks = useLoaderData()

    useEffect(() => {
        const wishList = getWishListItem().map(id => parseInt(id))
        console.log(wishList);

        const wishListedBooks = allBooks.filter(book => wishList.includes(book.bookId))
        setWishBooks(wishListedBooks);
    }, [allBooks])

    // const [newBooks, setNewBooks] = useState([])

    // useEffect(() => {
    //     fetch('/booksData.json')
    //         .then(res => res.json())
    //         .then(data => setNewBooks(data))
    // }, [])

    // // console.log(newBooks);
    // let wishedListedBooks = []

    // for (const id of getWishListId) {
    //     const numberId = parseInt(id)
    //     console.log(numberId);
    //     const filteredBooks = newBooks.find(book => book.bookId === numberId)
    //     console.log(filteredBooks);
    //     wishedListedBooks.push(filteredBooks)
    // }
    // // console.log(wishedListedBooks);

    const [sort, setSort] = useState('')


    const handleSorting = (sortBy) => {
        console.log('clicked', sortBy);
        setSort(sortBy)
        if (sortBy === 'No Of Pages') {
            const sortedBooks = [...wishBooks].sort((a, b) => b.totalPages - a.totalPages)
            setWishBooks(sortedBooks)
        }
        if (sortBy === 'Ratings') {
            const sortedBooks = [...wishBooks].sort((a, b) => a.rating - b.rating)
            setWishBooks(sortedBooks)
        }

    }




    return (
        <div>
            <h6 className='text-2xl font-bold'>Your WishList</h6>

            <details className="dropdown">
                <summary className="btn m-1">
                    {
                        sort ? `Sorted By ${sort}` : 'Sort By'
                    }
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => handleSorting('Ratings')}><a>Ratings</a></li>
                    <li onClick={() => handleSorting('No Of Pages')}><a>No Of Pages</a></li>
                </ul>
            </details>


            <Tabs>
                <TabList>
                    <Tab>My Wishlist</Tab>
                    <Tab>Books I Read</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid'>
                        {
                            wishBooks?.map(book => <div>
                                <p>{book.bookName}</p>
                                <span>Ratings:{book.rating}</span>
                                <br />
                                <span className='font-bold'>Page No.{book.totalPages}</span>
                                <img className='w-52 my-5' src={book.image} alt="" />

                            </div>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Dashboard;