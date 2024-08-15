import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NoteList from './NoteList';
import Search from './Search';
import { Link, useNavigate } from 'react-router-dom';
import './components.css';

const Notes = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: 'e hene',
      text: 'This is my first note!',
      date: '12/08/2024'
    },
    {
      id: nanoid(),
      title: 'shenim',
      text: 'Bej pazarin',
      date: '12/08/2024'
    },
    {
      id: nanoid(),
      title: 'rendesishme',
      text: 'Shko te dentisti diten e marte',
      date: '12/08/2024'
    }
  ]);

  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('react-notes-data', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: text,
      text: text,
      date: date.toLocaleDateString()
    };
    setNotes(prevNotes => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  const handleUpdateNote = (id, updatedTitle, updatedText) => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id
          ? { ...note, title: updatedTitle, text: updatedText }
          : note
      )
    );
  };

  const handleSearchNote = (searchTerm) => {
    setSearchText(searchTerm.toLowerCase());
  };

  const handleLogout = () => {
    try {
      // Clear specific items from localStorage
      localStorage.removeItem('email');
      localStorage.removeItem('password');
      
      // Optionally, clear all of localStorage
      // localStorage.clear();

      // Redirect to first page
      navigate('/firstpage');
    } catch (error) {
      console.error('Error clearing local storage:', error);
    }
  };

  return (
    <div className='container'>
      <Search handleSearchNote={handleSearchNote} />
      <NoteList
        notes={notes.filter(note =>
          note.title.toLowerCase().includes(searchText) // Filter by title
        )}
        handleAddNote={handleAddNote}
        handleDeleteNote={handleDeleteNote}
        handleUpdateNote={handleUpdateNote}
      />
      <div className='logout'>
        <button className="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Notes;
