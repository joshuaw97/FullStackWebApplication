import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditFinancePageForm = ({ financeToEdit }) => {
 
    const [location, setLocation] = useState(financeToEdit.location);
    const [category, setCategory] = useState(financeToEdit.category);
    const [amount, setAmount] = useState(financeToEdit.amount);
    const [date, setDate] = useState(financeToEdit.date)
    
    const redirect = useNavigate();

    const editFinance = async () => {
        const response = await fetch(`/finances/${financeToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                location: location, 
                category: category, 
                amount: amount, 
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Financial expense record was successfully edited in Finance database.`);
        } else {
            const errMessage = await response.json();
            alert(`Error with editing financial expense record in Finance database. Please recheck location, category, amount, and date and try again. ${response.status}. ${errMessage.Error}`);
        }
        redirect("/finance");
    }

    return (
        <>
        <article>
            <h2>Edit an expense record</h2>
            <p>This form will allow you to edit an expense record from the Finance database.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>What expense record would you like to edit?</legend>
                    <label for="location">Location</label>
                    <input
                        type="text"
                        value={location}
                        onChange={e => setLocation(e.target.value)} 
                        id="location" />
                    
                    <label for="year">Year released</label>
                    <input
                        type="text"
                        value={category}
                        onChange={e => setCategory(e.target.value)} 
                        id="year" />

                    <label for="amount">Amount</label>
                    <input
                        type="number"
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
                        onClick={editFinance}
                        id="submit"
                    >Save</button> Clicking "Save" will update the expense record</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditFinancePageForm;