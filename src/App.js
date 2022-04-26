import React from 'react'
import {
        BrowserRouter as Router,
        Routes,
        Route,
    
  } from 'react-router-dom';
import { Dates } from './dates/Dates';
import { Home } from './components/Home';
import { Start } from './start/Start';

function App() {
  return (

    <Router> 
        <Routes >
          <Route path='/*' element={<Start/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/dates' element={<Dates/>}/>
        </Routes>

    </Router>
  );
}

export default App;
