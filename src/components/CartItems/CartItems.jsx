import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext/ShopContext';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const CartItems = () => {
    const { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

    return (
        <div>
            <div className='grid grid-cols-6 gap-4 mx-4'>
                <div className='col-span-6 flex justify-between items-center border-b pb-2 mb-2 font-semibold text-gray-700'>
                    <p>Product</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Add</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>

                {all_product.map((product) => {
                    if (cartItems[product.id] > 0) {
                        return (
                            <div key={product.id} className='col-span-6 flex justify-between items-center border-b py-2 gap-4'>
                                <img src={product.image} alt={product.name} className='w-16 h-16 object-cover rounded' />
                                <p className='w-1/6 text-gray-600'>{product.name}</p>
                                <p className='w-1/6'>${product.new_price}</p>
                                <p className='w-1/6 '>{cartItems[product.id]}</p>
                                <button onClick={() => addToCart(product.id)} className='flex items-center justify-center bg-green-500 text-white px-2 py-1 rounded-md focus:outline-none'>
                                    <AiOutlinePlus className='mr-1' />
                                </button>
                                <p className='w-1/6'>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
                                <button onClick={() => removeFromCart(product.id)} className='flex items-center justify-center bg-red-500 text-white px-2 py-1 rounded-md focus:outline-none'>
                                    <AiOutlineMinus className='mr-1' />
                                </button>
                            </div>
                        );
                    }
                    return null;
                })}

            </div>

            <div className='mt-10 rounded p-4 grid grid-cols-2 gap-8'>
                <div className='flex flex-col'>
                    <h1 className='text-lg font-semibold mb-4'>Cart Totals</h1>
                    <div className='space-y-4'>
                        <div className='flex justify-between'>
                            <p className='text-gray-700 font-semibold'>Subtotal</p>
                            <p className='text-gray-900'>$ {getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='flex justify-between'>
                            <p className='text-gray-700 font-semibold'>Shipping Fee</p>
                            <p className='text-green-600 font-semibold'>Free</p>
                        </div>
                        <hr />
                        <div className='flex justify-between mb-4'>
                            <p className='text-gray-700 font-semibold'>Total</p>
                            <p className='text-gray-900 font-semibold'>$ {getTotalCartAmount()}</p>
                        </div>

                        <button className='bg-red-500 text-white px-4 py-2 mt-4'>Proceed to Checkout</button>
                    </div>
                </div>
                <div className='mx-auto'>
                    <div className='flex items-center'>
                        <input type='text' placeholder='Enter Promo Code' className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500' />
                        <button className='ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>Apply</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartItems;
