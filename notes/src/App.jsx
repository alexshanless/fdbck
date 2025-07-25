import { useState } from 'react';
import NotesForm from './components/NoteForm';
import NotesList from './components/NotesList';

const App = () => {
  const [notes, setNotes] = useState([]);
  return (
    <div className='max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Notes App</h2>
      <NotesForm notes={notes} setNotes={setNotes} />
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
