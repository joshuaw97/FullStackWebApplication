// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation.js';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 


import HomePage from './pages/HomePage.js';
import TopicsPage from './pages/TopicsPage.js';
import ExpensePage from './pages/ExpensePage.js';
import OrderPage from './pages/OrderPage.js';
import GalleryPage from './pages/GalleryPage.js';






// If your schema requires SHORT data input, then use the TABLE design.

import { EditFinancePageForm } from './pages/EditFinancePageForm.js';
import { AddFinancePageForm } from './pages/AddFinancePageForm.js';


// Define the function that renders the content in Routes, using State.
function App() {

  const [finance, setFinanceToEdit] = useState([])

  return (
    <>
      <BrowserRouter>
        <body>

          <header>
              <h1>Joshua Weaver</h1>
              <img src="header-image.png"></img>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    
                    <Route path="/topics" element={<TopicsPage/>}/>
                    <Route path="/finance" element={<ExpensePage setFinanceToEdit={setFinanceToEdit}/>} />
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/order" element={<OrderPage/>}/>
                    <Route path="/gallery" element={<GalleryPage/>}/>
                    
                    
                 
                    {/* Use these if your schema requires LONG data input: */}
                    <Route path="/create" element={<AddFinancePageForm />} /> 
                    <Route path="/update" element={<EditFinancePageForm financeToEdit={finance} />} />

                    
                </Routes>
              </section>
              
          </main>

          <footer>
            <p>&copy; 2023 Joshua Weaver</p>
          </footer>

        </body>


      </BrowserRouter>
    </>
  );
}

export default App;