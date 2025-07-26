const Note = ({ note, handleDelete }) => {
  return (
    <div
      key={note.id}
      style={{
        borderLeftColor:
          note.priority === 'High'
            ? 'red'
            : note.priority === 'Medium'
            ? 'orange'
            : 'green',
      }}
      className='p-4 bg-white rounded-lg shadow-md border-l-4'
    >
      <h3 className='font-bold text-lg'>{note.title}</h3>
      <p className='text-sm text-gray-600'>Priority: {note.priority}</p>
      <p className='text-sm text-gray-600'>Category: {note.category}</p>
      {note.description && <p className='mt-2'>{note.description}</p>}
      <button
        onClick={() => handleDelete(note.id)}
        className='mt-3 text-red-500 cursor-pointer transition hover:text-red-700'
      >
        Delete
      </button>
    </div>
  );
};

export default Note;
