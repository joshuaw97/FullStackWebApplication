import React from 'react';
import { Link } from 'react-router-dom';

import { HiOutlineClipboardList } from "react-icons/hi";
import { HiHomeModern } from "react-icons/hi2";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaBasketShopping } from "react-icons/fa6";
import { MdMonochromePhotos } from "react-icons/md";

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/"><i><HiHomeModern /></i>Home</Link>
        <Link to="../topics"><i><HiOutlineClipboardList /></i>Topics</Link>
        <Link to="../finance"><i><FaMoneyCheckDollar /></i>Expense Records</Link>
        <Link to="../order"><i><FaBasketShopping/></i>Order</Link>
        <Link to="../gallery"><i><MdMonochromePhotos/></i>Gallery</Link>
    </nav>
  );
}

export default Navigation;
