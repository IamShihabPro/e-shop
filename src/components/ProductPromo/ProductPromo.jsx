import React from 'react';
import logo_big from '../../../src/assets/Assets/logo_big.png'
import instagram_icon from '../../../src/assets/Assets/instagram_icon.png'
import whatsapp_icon from '../../../src/assets/Assets/whatsapp_icon.png'
import pintester_icon from '../../../src/assets/Assets/pintester_icon.png'


const ProductPromo = () => {
    return (
        <div className='my-4'>
            <div className='flex justify-center items-center gap-3'>
                <img src={logo_big} className='w-20' alt="" />
                <h1 className='text-gray-600 font-bold text-3xl'>E-SHOP</h1>
            </div>

            <div className='flex gap-4 justify-center items-center mt-4'>
                <h1 className='text-gray-500 font-semibold'>Company</h1>
                <h1 className='text-gray-500 font-semibold'>Products</h1>
                <h1 className='text-gray-500 font-semibold'>Offices</h1>
                <h1 className='text-gray-500 font-semibold'>About</h1>
                <h1 className='text-gray-500 font-semibold'>Contact</h1>
            </div>

            <div className='flex justify-center items-center gap-6 mt-6'>
                <img src={instagram_icon} alt="" />
                <img src={whatsapp_icon} alt="" />
                <img src={pintester_icon} alt="" />
            </div>
        </div>
    );
};

export default ProductPromo;