import React from 'react';
import { Link } from 'react-router-dom';

import { MdOutlineLibraryAdd } from "react-icons/md";



function TableHead(){
    return (

        <thead>
            <tr>
                <th title= "The delete icon will remove an entry.">Delete</th>
                <th title= "The edit icon will allow you to edit an entry.">Edit</th>
                <th title= "Where did this expense occur?">Location</th>
                <th title= "What category was this expense?">Category</th>
                <th className= "rightAlign" title= "How much was the expense?">Amount</th>
                <th title= "Enter the date of the expense.">Date</th>
                <th><Link to="../create"><i><MdOutlineLibraryAdd title="Add a new expense record"/></i></Link></th>











            </tr>









        </thead>








    );










}

export default TableHead;