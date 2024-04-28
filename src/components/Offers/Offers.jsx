import React from 'react';
import exclusive_image from '../../../src/assets/Assets/exclusive_image.png'


const Offers = () => {
    return (
        <div className='max-w-7xl mx-auto mt-16 bg-gradient-to-r from-violet-100 via-violet-200 to-violet-100 p-4'>
            <div className='flex justify-between items-center flex-col lg:flex-row md:flex-row mt-16'>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-4xl'>Exclusive <span className='text-red-500'>Offers</span></h1>
                    <p className='text-gray-700 font-semibold text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deserunt saepe dolores beatae, tenetur maiores?</p>
                    <button className='bg-red-500 px-4 py-2 rounded-lg w-48 text-white'>Check Now</button>
                </div>
                <div className=''>
                    <img src={exclusive_image} className='w-3/4 mx-auto p-2' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Offers;