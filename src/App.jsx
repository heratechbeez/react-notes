import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import AddNote from './components/AddNote';
import Note from './components/Note';
import NoteList from './components/NoteList';
import Notes from './components/Notes';
import Search from './components/Search';


import Firstpage from './pages/firstpage';
import Login from './pages/login';
import Register from './pages/register';

function App() {
    return (

      <Router>
        <Routes>
                
                <Route path="*" exact element={<Firstpage/>}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />

                <Route path="/AddNote" element={<AddNote/>} />
                <Route path="/Note" element={<Note/>} />
                <Route path="/NoteList" element={<NoteList/>} />
                <Route path="/Notes" element={<Notes/>} />
                <Route path="/Search" element={<Search/>} />
   
        </Routes>
        </Router>
       
    );
}

export default App;
