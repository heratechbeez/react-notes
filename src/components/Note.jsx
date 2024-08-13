import {MdDeleteForever} from 'react-icons/md';

const Note = ({id, title, text, date, handleDeleteNote}) => {
    return (
        <div className='note'>
            <h3>{title}</h3> {}

        <div className='note'>
         <span>{text}</span>
         <div className='note-footer'>
         <small>{date}</small>
         <MdDeleteForever
         onclick={() => handleDeleteNote(id)}
         className='delete-icon'
         size='1.3em' />
         </div>
          
         </div>
        </div>
    );
};

export default Note;
