import React, { useState } from 'react';

import { TiPlusOutline } from "react-icons/ti";
import { TiMinusOutline } from "react-icons/ti";


function ProductQuantity () { 

    const [quantity, setQuantity] = useState(0)

    const increase = () => setQuantity(quantity + 1);
    const decrease = () => setQuantity(quantity - 1);

    return (
        <div>
            <span>{quantity}</span> 
            <i><TiPlusOutline onClick={increase}/></i> 
            <i><TiMinusOutline onClick={decrease} /></i>
        </div>
    );


    

    

        



    






}

export default ProductQuantity