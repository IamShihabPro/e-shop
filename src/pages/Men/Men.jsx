import React, { useContext } from 'react';
import men_banner from '../../../src/assets/Assets/banner_mens.png'
import { ShopContext } from '../../Context/ShopContext/ShopContext';
import Cards from '../../components/Cards/Cards';
import ProductPromo from '../../components/ProductPromo/ProductPromo';

const Men = () => {
    const {all_product} = useContext(ShopContext)

    // Filter products with category 'men'
    const menProducts = all_product.filter(product => product.category === 'men')

    return (
        <div className='max-w-7xl mx-auto mt-[66px]'>
            <img src={men_banner} alt="" />

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-6 my-10'>
                {
                    menProducts.map((item) =>(
                        <Cards item={item} key={item.id}></Cards>
                    ))
                }
            </div>

            <div className='flex justify-center items-center'>
                <ProductPromo></ProductPromo>
            </div>
        </div>
    );
};

export default Men;