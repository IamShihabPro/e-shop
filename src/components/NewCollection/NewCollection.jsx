import React from 'react';
import new_collections from '../../../src/assets/Assets/new_collections';
import Cards from '../Cards/Cards';

const NewCollection = () => {
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div>
                <h1 className='my-10 py-4 text-center font-bold text-4xl'>New Collections</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-6'>
                {new_collections.map((item) => (
                    <Cards item={item} key={item.id}></Cards>
                ))}
            </div>
        </div>
    );
};

export default NewCollection;