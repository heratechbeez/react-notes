import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, title, text, date, handleDeleteNote, handleUpdateNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedText, setUpdatedText] = useState(text);

  const handleSave = () => {
    handleUpdateNote(id, updatedTitle, updatedText);
    setIsEditing(false);
  };

  return (
    <div className='note'>
      {isEditing ? (
        <div>
          <input
            type='text'
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
          <div className='note-footer'>
            <small>{date}</small>
            <MdDeleteForever
              onClick={() => handleDeleteNote(id)}
              className='delete-icon'
              size='1.3em'
            />
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;
