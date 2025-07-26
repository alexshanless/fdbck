import { useState } from 'react';
import NotesForm from './components/NoteForm';
import NotesList from './components/NotesList';

const App = () => {
  const [notes, setNotes] = useState([]);
  const handleDelete = id => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this note?'
    );
    if (confirmDelete) {
      setNotes(notes.filter(note => note.id !== id));
    }
  };
  return (
    <div className='max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Notes App</h2>
      <NotesForm notes={notes} setNotes={setNotes} />
      <NotesList notes={notes} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
