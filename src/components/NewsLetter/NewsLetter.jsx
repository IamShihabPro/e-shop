import React from 'react';

const NewsLetter = () => {
    return (
        <div className='max-w-7xl mx-auto mt-16 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-100 p-4'>
            <h1 className='text-red-500 text-3xl font-bold text-center mt-10'>Get Exclusive Offers On Your Email</h1>
            <p className='text-gray-500 text-center'>Subscribe to our new letter and stay updated</p>

            <div className="bg-white/20 rounded-3xl max-w-lg mx-auto py-2 px-1 flex items-center my-3">
              <input
                type="text"
                className="border-none p-2 bg-white/20 text-black w-full px-2 focus:outline-none rounded-s-3xl"
                placeholder="Your email"
              />

              {/* Subscribe Button */}
              <button className="text-white bg-red-600 px-4 py-2 rounded-3xl">
                Subscribe
              </button>
            </div>
        </div>
    );
};

export default NewsLetter;