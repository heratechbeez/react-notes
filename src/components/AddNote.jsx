import { useState } from 'react';

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
      console.log('Saving note:', { title: noteTitle, text: noteText });
      handleAddNote({
        title: noteTitle,
        text: noteText
      });
      setNoteTitle('');
      setNoteText('');
    } else {
      console.log("Title or text cannot be empty");
    }
  };

  return (
    <div className='note new'>
      <input
        type='text'
        placeholder='Enter title...'
        value={noteTitle}
        onChange={handleTitleChange}
        className='note-title'
      />
      <textarea
        rows='8'
        cols='10'
        placeholder='Type to add a note...'
        value={noteText}
        onChange={handleTextChange}
        className='note-text'
      ></textarea>
      <div className='note-footer'>
        <small>
          {characterLimit - noteText.length} 
        </small>
        <button className='save' onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
