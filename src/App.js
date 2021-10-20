import './App.css';
import Header from './header';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import Search from './search';
import Noteslist from './noteslist';
const Noteapp = () => {

  // Array of notes
  const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'Breakfast',
			date: '19/10/2021',
		},
		{
			id: nanoid(),
			text: 'Dinner',
			date: '19/10/2021',
		},
		{
			id: nanoid(),
			text: 'college',
			date: '19/10/2021',
		},
		{
			id: nanoid(),
			text: 'password',
			date: '19/10/2021',
		},
	]);

  const [searchText, setSearchText] = useState('');

  // To add a note
  const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

  // To delete a note
  const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};



  
  return (
    <div>
    <div className='notesApp'>
    <Header />  
    <Search handleSearchNote={setSearchText} /> {/*search for a note*/}

{/*To list a notes*/}
    <Noteslist 
    notes={notes.filter((note) =>
      note.text.toLowerCase().includes(searchText) 
    )}

    handleAddNote={addNote} 
    handleDeleteNote={deleteNote}
    />
    </div>
    </div>
  );

}

export default Noteapp;