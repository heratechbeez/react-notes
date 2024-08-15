import React from 'react';
import Note from './Note';
import AddNote from './AddNote';

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
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NoteList;
