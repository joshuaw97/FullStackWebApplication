// Models for the Finance Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Connection to Finances Mongoose database was unsuccessful. Please recheck request code and try again.' });
    } else  {
        console.log('Success: Connection to Finances Mongoose database was successful.');
    }
});

// SCHEMA: Define the collection's schema.
const financeSchema = mongoose.Schema({
	location:    { type: String, required: true, default: 'unknown' },
	category:     { type: String, required: true, default: 'general' },
	amount: { type: Number, required: true, default: 0 }, 
    date: { type: Date, required: true, min:'09-01-2023', default: '09-01-2023'}
});

// Compile the model from the schema 
// by defining the collection name "movies".
const finances = mongoose.model('Finances', financeSchema);


// CREATE model *****************************************
const createFinance = async (location, category, amount, date) => {
    const finance = new finances({ 
        location: location, 
        category: category, 
        amount: amount, 
        date: date
    });
    return finance.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveFinances = async () => {
    const query = finances.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveFinanceByID = async (_id) => {
    const query = finances.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteFinanceById = async (_id) => {
    const result = await finances.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateFinance = async (_id, location, category, amount, date) => {
    const result = await finances.replaceOne({_id: _id }, {
        location: location,
        category: category,
        amount: amount, 
        date: date
    });
    return { 
        _id: _id, 
        location: location, 
        category: category,
        amount: amount, 
        date: date
    }
}

// EXPORT the variables for use in the controller file.
export { createFinance, retrieveFinances, retrieveFinanceByID, updateFinance, deleteFinanceById }
