import React from 'react';
import data_products from '../../../src/assets/Assets/data';
import Cards from '../Cards/Cards';

const Popular = () => {

    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div>
                <h1 className='my-10 py-4 text-center font-bold text-4xl'>Popular in Women</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-6'>
                {data_products.map((item) => (
                    <Cards item={item} key={item.id}></Cards>
                ))}
            </div>
        </div>
    );
};

export default Popular;
