import React from 'react';
import Cards from '../Cards/Cards';

const RelatedProduct = ({related_products}) => {
    return (
        <div>
            <h1 className='text-center font-bold text-3xl mt-8'>Related Product</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-6 my-10'>
                {
                    related_products.slice(0,4).map((item) =>(
                        <Cards item={item} key={item.id}></Cards>
                    ))
                }
            </div>
           
        </div>
    );
};

export default RelatedProduct;