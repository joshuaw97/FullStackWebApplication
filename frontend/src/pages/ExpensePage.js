import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import ExpenseTable from '../components/ExpenseTable';
import { Link } from 'react-router-dom';

import { IoIosCash } from "react-icons/io";


function ExpensePage({ setFinanceToEdit }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [finances, setFinances] = useState([]);

    // RETRIEVE the entire list of movies
    const loadFinances = async () => {
        const response = await fetch('/finances');
        const finances = await response.json();
        setFinances(finances);
    } 
    

    // UPDATE a single movie
    const onEditFinance = async finance => {
        setFinanceToEdit(finance);
        redirect("/update");
    }


    // DELETE a single movie  
    const onDeleteFinance = async _id => {
        const response = await fetch(`/finances/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/finances');
            const finances = await getResponse.json();
            setFinanceToEdit(finances);
            loadFinances()
            
        } else {
            console.error(`helpful deletion message = ${_id}, status code = ${response.status}`)
        }
        
    }

    // LOAD all the movies
    useEffect(() => {
        loadFinances();
    }, []);

    // DISPLAY the movies
    return (
        <>
            <h2><i><IoIosCash /></i>Expense Records</h2>
            <p>This page allows you to track your expense records using a MongoDB database. The edit
                icon in each row will allow you to edit an existing record. The delete icon will delete
                a record when it is clicked. The add button will allow you to add a new expense record
                to the database. 
            </p>
            
            <ExpenseTable 
                finances={finances} 
                onEdit={onEditFinance} 
                onDelete={onDeleteFinance} 
            />
        </>
    );
}

export default ExpensePage;