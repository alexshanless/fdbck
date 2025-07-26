import Note from './Note';

const NotesList = ({ notes, handleDelete }) => {
  if (notes.length === 0) {
    return <p className='text-center text-gray-500'>No notes yet</p>;
  }
  return (
    <div className='space-y-4'>
      {notes.map(note => (
        <Note key={note.id} note={note} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default NotesList;
