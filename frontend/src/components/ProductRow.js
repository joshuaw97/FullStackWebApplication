import React, { useState } from 'react';
import ProductQuantity from './ProductQuantity'; 




function ProductRow({ product }) {

    return (
        <tr>
            <td>{product.company}</td>
            <td>{product.product}</td>
            <td><ProductQuantity/></td>
            <td className='rightAlign'>${product.price}</td>
            




        </tr>







    );

}

export default ProductRow;