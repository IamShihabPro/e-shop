import React, { useContext } from 'react';
import kids_banner from '../../../src/assets/Assets/banner_kids.png'
import { ShopContext } from '../../Context/ShopContext/ShopContext';
import Cards from '../../components/Cards/Cards';
import ProductPromo from '../../components/ProductPromo/ProductPromo';

const Kids = () => {
    const {all_product} = useContext(ShopContext)
    const kidsProducts = all_product.filter(product => product.category === 'kid')

    return (
        <div className='max-w-7xl mx-auto mt-[66px]'>
            <img src={kids_banner} alt="" />

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-6 my-10'>
                {
                    kidsProducts.map((item) =>(
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

export default Kids;