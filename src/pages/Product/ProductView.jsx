import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext/ShopContext';

const ProductView = ({product}) => {
    const {addToCart} = useContext(ShopContext)

    const productImage =  product.image
    const repeatedImages = Array(4).fill(productImage);
    return (
        <div className='flex justify-center gap-4 flex-col md:flex-row lg:flex-row mx-4 my-3'>
            <div className='flex flex-row gap-3'>
                <div className='flex flex-col gap-3'>
                        {repeatedImages.map((image, index) => (
                    <img key={index} src={image} className='w-20 h-24 ' alt={`Product ${index + 1}`} />
                    ))}
                </div>

                <div>
                    <img src={product.image} alt="" />
                </div>
            </div>

            <div className=''>
                <h1 className='font-bold text-2xl '>{product.name}</h1>

                <div className='mt-6 flex gap-8'>
                    <p className='text-gray-500 font-medium text-lg'> $<del>{product.old_price}</del> </p>
                    <p className='text-red-500 font-bold text-lg'> ${product.new_price} </p>
                </div>

                <div className='mt-8'>
                    <p className='text-gray-500 text-lg font-medium'>Select Size</p>

                    <div className='flex gap-4 mt-3'>
                        <p className='bg-slate-100 px-3 py-2 border'>S</p>
                        <p className='bg-slate-100 px-3 py-2 border'>M</p>
                        <p className='bg-slate-100 px-3 py-2 border'>L</p>
                        <p className='bg-slate-100 px-3 py-2 border'>XL</p>
                        <p className='bg-slate-100 px-3 py-2 border'>XXL</p>
                    </div>
                </div>

                <button onClick={() => {addToCart(product.id)}} className='bg-red-600 px-4 py-2 text-white mt-8'>Add To Cart</button>

                <p className='mt-6 '> <span className='font-bold'>Category:</span> <span className='uppercase'>{product.category}</span></p>
                <p><span className='font-bold mt-2'>Tags:</span> Modern, Latest </p>
            </div>
        </div>
    );
};

export default ProductView;