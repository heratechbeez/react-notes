import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NoteList';
import Search from './components/Search';
import reactLogo from './assets/react.svg'



const App = () => {
  const [notes, setNotes] = useState([ 
{
        id:nanoid(),
        title:'e hene',
        text:'This is my first note!',
        date:'12/08/2024'
},
{
         id:nanoid(),
         title:'shenim',
         text:'Bej pazarin',
         date:'12/08/2024'
},
{
        id:nanoid(),
        title:'rendesishme',
        text:'Shko te dentisti diten e marte',
        date:'12/08/2024'
},
  ]);

const [searchText, setSearchText] = useState('');
useEffect(() => {
    localStorage.setItem(
      'react-notes-data',
      JSON.stringify(notes)
    );
}, [notes]);

const AddNote = (text) => {
  const date = new Date();
  const newNote ={
    id:nanoid(),
    title: text,
    text: text,
    date:date.toLocaleDateString(),
  };
  const newNotes = [...notes, newNote];
  setNotes(newNote);
};

return (
  <div className='container'>
  <Search handleSearchNote={setSearchText} />
  <NotesList
    notes={notes.filter((note) =>
      note.text.toLowerCase().includes(searchText)
    )}
    handleAddNote={addNote}
    handleDeleteNote={deleteNote} />
    </div>
);
};
export default App;
