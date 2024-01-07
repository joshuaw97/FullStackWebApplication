import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";

function ExpenseRow({ finance, onDelete, onEdit }) {

    return (
        <tr>
            <td title="Delete expense record"><i><MdDeleteForever onClick={() => onDelete(finance._id)}/></i></td>
            <td title="Edit expense record"><i><FiEdit3 onClick={() => onEdit(finance)} /></i></td>
            <td title="Enter location of expense">{finance.location}</td>
            <td title="Enter category of expense">{finance.category}</td>
            <td className="rightAlign" title="How much did you spend? (in dollars)">${finance.amount}</td>
            <td title="When did you spend it?">{finance.date.slice(0, 10)}</td>




        </tr>







    );

}

export default ExpenseRow;