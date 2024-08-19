import { useState } from 'react'; 
import PropTypes from 'prop-types'; 
import { MdDeleteForever } from 'react-icons/md';
import './components.css'; 

const Note = ({ id, title, text, date, handleDeleteNote, handleUpdateNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedText, setUpdatedText] = useState(text);

  const handleSave = () => {
    handleUpdateNote(id, updatedTitle, updatedText);
    setIsEditing(false);
  };

  return (
    <div className='note-item'> {/* Changed class to match CSS */}
      {isEditing ? (
        <div className='note-edit'>
          <input
            type='text'
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            placeholder='Title'
          />
          <textarea
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
            placeholder='Note content'
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className='note-view'>
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

Note.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
  handleUpdateNote: PropTypes.func.isRequired,
};

export default Note;