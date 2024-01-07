import React from 'react';
import Finance from './Finance';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function FinanceList({ finances, onDelete, onEdit }) {
    return (
        <table id="finances">
            <caption>Add and Edit Financial Expense Records</caption>
            <thead>
                <tr>
                    <th>Location</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {finances.map((finance, i) => 
                    <Finance 
                        finance={finance} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default FinanceList;
