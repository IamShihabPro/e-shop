import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({item}) => {
    return (
        <Link to={`/product/${item.id}`} onClick={window.scrollTo(0,0)} className='border p-2 group block'>
            <img src={item.image} alt={item.name} className='object-cover w-full mx-auto group-hover:scale-105 transition mb-2' />
            <p className='text-lg font-bold'>{item.name}</p>
            <div className='flex justify-between items-center mt-2'>
                <p className='text-gray-600 font-bold line-through'>${item.old_price.toFixed(2)}</p>
                <p className='text-green-600 font-bold'>${item.new_price.toFixed(2)}</p>
            </div>
        </Link>
    );
};

export default Cards;
