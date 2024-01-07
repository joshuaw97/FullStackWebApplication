import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdDeleteForever, MdEdit } from 'react-icons/md';


function Finance({ finance, onEdit, onDelete }) {
    return (
        <tr>
            <td>{finance.location}</td>
            <td>{finance.category}</td>
            <td>{finance.amount}</td>
            <td>{finance.date}</td>

            {/* Update these icons to something that matches your style. */}
            <td><MdDeleteForever onClick={() => onDelete(finance._id)} /></td>
            <td><MdEdit onClick={() => onEdit(finance)} /></td>
        </tr>
    );
}

export default Finance;