//import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import AddNote from './AddNote';
import './components.css'; 

const NoteList = ({ notes, handleAddNote, handleDeleteNote, handleUpdateNote }) => {
  return (
    <div className='notes-list'>
    {notes.map((note) => (
      <Note 
        key={note.id}
        id={note.id}
        title={note.title}
        text={note.text}
        date={note.date}
        handleDeleteNote={handleDeleteNote}
        handleUpdateNote={handleUpdateNote}
        className="note-item"
      />
    ))}
    <div className='add-note'>
      <AddNote handleAddNote={handleAddNote} />
    </div>
  </div>
  
    
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleAddNote: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
  handleUpdateNote: PropTypes.func.isRequired,
};

export default NoteList;