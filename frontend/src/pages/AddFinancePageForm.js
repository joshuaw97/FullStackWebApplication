import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddFinancePageForm = () => {

    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('')
    
    const redirect = useNavigate();

    const addFinance = async () => {
        const newFinance = { location, category, amount, date };
        const response = await fetch('/finances', {
            method: 'post',
            body: JSON.stringify(newFinance),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Your new expense record was successfully added to the Finance database.`);
            redirect("/finance");
        } else {
            alert(`There was an error in adding your expense record to the Finance database. Please check location, category, amount, and date and try again. = ${response.status}`);
            redirect("/finance");
        }
    };


    return (
        <>
        <article>
            <h2>Add an expense record</h2>
            <p>This form allows you to add a new expense record to the Finance database.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>What expense record would you like to add?</legend>
                    <label for="location">Location</label>
                    <input
                        type="text"
                        placeholder="Location of expense"
                        value={location}
                        onChange={e => setLocation(e.target.value)} 
                        id="location" />
                    
                    <label for="category">Category</label>
                    <input
                        type="text"
                        value={category}
                        placeholder="Category of expense (grocery, auto, etc.)"
                        onChange={e => setCategory(e.target.value)} 
                        id="category" />

                    <label for="amount">Amount</label>
                    <input
                        type="number"
                        placeholder="How much did you spend?"
                        value={amount}
                        onChange={e => setAmount(e.target.value)} 
                        id="amount" />

                    <label for="date">Date</label>
                    <input
                        type="date"
                        value={date.slice(0, 10)}
                        onChange={e => setDate(e.target.value)}
                        id ="date" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addFinance}
                        id="submit"
                    >Add</button> Click "Add" and expense record will be added to Finance database.</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddFinancePageForm;