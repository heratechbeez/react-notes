import { useState } from 'react';
import PropTypes from 'prop-types';

const AddNote = ({ handleAddNote }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleTitleChange = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteTitle.trim().length > 0 && noteText.trim().length > 0) {
      handleAddNote({
        title: noteTitle,
        text: noteText
      });
      setNoteTitle('');
      setNoteText('');
    }
  };

  return (
    <div className='add-note'>
      <input
        type='text'
        placeholder='Enter title...'
        value={noteTitle}
        onChange={handleTitleChange}
      />
      <textarea
        placeholder='Type to add a note...'
        value={noteText}
        onChange={handleTextChange}
      ></textarea>
      <div className='add-note-footer'>
        <button onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

AddNote.propTypes = {
  handleAddNote: PropTypes.func.isRequired,
};

export default AddNote;