import { useState } from 'react';

const NotesForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: '',
    priority: 'Medium',
    category: 'Work',
    description: '',
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleSumbit = e => {
    e.preventDefault();
    if (!formData.title) return;
    // Call the function to add a new note
    const newNote = { id: Date.now(), ...formData };
    setNotes([newNote, ...notes]);
    // Reset the form
    setFormData({
      title: '',
      priority: 'Medium',
      category: 'Work',
      description: '',
    });
  };

  return (
    <>
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className='w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-pruple-300 transition mb-4'
      >
        {isFormVisible ? 'Hide Form' : 'Add new Note'}
      </button>
      {isFormVisible && (
        <form onSubmit={handleSumbit} className='mb-6'>
          <div className='mb-4'>
            <label htmlFor='title' className='block font-semibold'>
              Title
            </label>
            <input
              type='text'
              className='w-full p-2 border rounded-lg'
              value={formData.title}
              onChange={e =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
            {formData.title}
          </div>
          <div className='mb-4'>
            <label htmlFor='priority' className='block font-semibold'>
              Priority
            </label>
            <select
              type='text'
              className='w-full p-2 border rounded-lg'
              value={formData.priority}
              onChange={e =>
                setFormData({ ...formData, priority: e.target.value })
              }
            >
              <option value='High'>High</option>
              <option value='Medium'>Medium</option>
              <option value='Low'>Low</option>
            </select>
            {formData.priority}
          </div>
          <div className='mb-4'>
            <label htmlFor='category' className='block font-semibold'>
              Category
            </label>
            <select
              type='text'
              className='w-full p-2 border rounded-lg'
              value={formData.category}
              onChange={e =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <option value='Work'>Work</option>
              <option value='Personal'>Personal</option>
              <option value='Ideas'>Ideas</option>
            </select>
            {formData.category}
          </div>
          <div className='mb-4'>
            <label htmlFor='description' className='block font-semibold'>
              Description
            </label>
            <textarea
              type='text'
              className='w-full p-2 border rounded-lg'
              value={formData.description}
              onChange={e =>
                setFormData({ ...formData, description: e.target.value })
              }
            ></textarea>
            {formData.description}
          </div>
          <button
            type='submit'
            className='w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-blue-600'
          >
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NotesForm;
