import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NoteList from './NoteList';
import Search from './Search';
import { useNavigate } from 'react-router-dom';
import './components.css';

const Notes = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-data'));
    return savedNotes || [
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
    ];
  });

  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('react-notes-data', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (newNote) => {
    const date = new Date();
    const noteWithDate = {
      id: nanoid(),
      ...newNote,
      date: date.toLocaleDateString()
    };
    setNotes(prevNotes => [...prevNotes, noteWithDate]);
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
    localStorage.removeItem('user');  
    localStorage.removeItem('email'); 
    localStorage.removeItem('password'); 
    localStorage.removeItem('react-notes-data');
    navigate('/firstpage'); 
  };

  return (
    <div className='container'>
      <Search className="search" handleSearchNote={handleSearchNote} />
      <NoteList
        notes={notes.filter(note =>
          typeof note.title === 'string' &&
          note.title.toLowerCase().includes(searchText)
        )}
        handleAddNote={handleAddNote}
        handleDeleteNote={handleDeleteNote}
        handleUpdateNote={handleUpdateNote}
        className="notes-list"
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