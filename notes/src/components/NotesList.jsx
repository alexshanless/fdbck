const NotesList = ({ notes }) => {
  if (notes.length === 0) {
    return <p className='text-center text-gray-500'>No notes yet</p>;
  }
  return (
    <div className='space-y-4'>
      {notes.map(note => (
        <div
          key={note.id}
          className='p-4 bg-white rounded-lg shadow-md border-l-4'
        >
          <h3 className='font-bold text-lg'>{note.title}</h3>
          <p className='text-sm text-gray-600'>Priority: {note.priority}</p>
          <p className='text-sm text-gray-600'>Category: {note.category}</p>
          {note.description && <p className='mt-2'>{note.description}</p>}
        </div>
      ))}
    </div>
  );
};

export default NotesList;
