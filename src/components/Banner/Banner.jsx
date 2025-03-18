import React from 'react';

import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-slate-200 rounded-md">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={bannerImg}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="my-10 text-black text-5xl font-bold">Books to freshen up your bookshelf</h1>

                        <button className="bg-[#23BE0A] btn border-0">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;