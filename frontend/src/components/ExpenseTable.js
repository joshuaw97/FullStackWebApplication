import React from "react";

import ExpenseRow from "./ExpenseRow";
import TableHead from "./TableHead";


function ExpenseTable({finances, onDelete, onEdit}) {

    return (
        <table id="expenseTable">
            <caption>Log of recent financial expense records.</caption>
            <TableHead/>
            <tbody>
                {finances.map((finance, i) =>
                    <ExpenseRow
                        finance={finance}
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    
                    
                    />)}





            </tbody>

            <tfoot></tfoot>






        </table>

    );

}

export default ExpenseTable;