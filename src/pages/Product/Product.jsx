import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext/ShopContext';
import { useParams } from 'react-router-dom';
import ProductView from './ProductView';
import ProductPromo from '../../components/ProductPromo/ProductPromo';
import RelatedProduct from '../../components/RelatedProduct/RelatedProduct';

const Product = () => {
    const {all_product} = useContext(ShopContext)
    const {productId} = useParams() 
    const product = all_product.find((item) => item.id === Number(productId))
    const related_products = all_product.filter((rel_product) => rel_product.category === product.category )
    
    return (
        <div className='max-w-7xl mx-auto mt-24'>
            {/* <img src={product.image} alt="" /> */}
            <ProductView product={product} />

            <div className='flex justify-center items-center'>
                <ProductPromo></ProductPromo>
            </div>

            <div>
                <RelatedProduct related_products={related_products}></RelatedProduct>
            </div>
        </div>
    );
};

export default Product;