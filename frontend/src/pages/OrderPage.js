import React, { useState } from 'react';
import ProductRow from '../components/ProductRow.js';
import products from '../data/products.js';






function OrderPage() {
    return (
        <>


            <h2>Order</h2>
                <article>
                    <p></p>

                    <table>
                        <caption>Choose one product</caption>
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th className='rightAlign'>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                <ProductRow key={index} product={product} /> ))}
                            </tbody>

               


                    </table>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                </article>
        
        </>
    );

}
export default OrderPage;