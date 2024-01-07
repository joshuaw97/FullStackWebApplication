// Controllers for the Finance Collection

import 'dotenv/config';
import express from 'express';
import * as finances from './finance-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/finances', (req,res) => { 
    finances.createFinance(
        req.body.location, 
        req.body.category, 
        req.body.amount, 
        req.body.date
        )
        .then(finance => {
            console.log(`"$${finance.amount} spent at ${finance.location}" was added to your records in the Finances database.`);
            res.status(201).json(finance);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Error adding expense record to Finances database. Please recheck location, category, amount, and date and try again.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/finances', (req, res) => {
    finances.retrieveFinances()
        .then(finances => { 
            if (finances !== null) {
                console.log(`All of the expense records were successfully retrieved.`);
                res.json(finances);
            } else {
                res.status(404).json({ Error: 'Error in locating expense records in Finances database. Expense records not found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Retrieval of expense records from Finances database. Please recheck request and try again.' });
        });
});


// RETRIEVE by ID controller
app.get('/finances/:_id', (req, res) => {
    finances.retrieveFinanceByID(req.params._id)
    .then(finance => { 
        if (finance !== null) {
            console.log(`"${finance.location}" was retrieved from the Finances database, based on its ID.`);
            res.json(finance);
        } else {
            res.status(404).json({ Error: 'The financial expense record ID was not found in the Finances database.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Error in finding expense record by ID in Finances database. Please recheck ID and try again.' });
    });

});


// UPDATE controller ************************************
app.put('/finances/:_id', (req, res) => {
    finances.updateFinance(
        req.params._id, 
        req.body.location, 
        req.body.category, 
        req.body.amount, 
        req.body.date
    )
    .then(finance => {
        console.log(`"${finance.amount} spent at ${finance.location}" was updated.`);
        res.json(finance);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Error in updating expense record. Please recheck location, category, amount, and date fields and try again.' });
    });
});


// DELETE Controller ******************************
app.delete('/finances/:_id', (req, res) => {
    finances.deleteFinanceById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} expense record was deleted from the Finances database.`);
                res.status(200).send({ Success: 'The requested expense record was successfully deleted from Finances database.' });
            } else {
                res.status(404).json({ Error: 'Error with deleting expense record. The record with specified ID was not found in the Finances database.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Error in deleting expense record. The record with the specified ID was not deleted. Please recheck ID and try again.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});