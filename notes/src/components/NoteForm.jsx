import { useState } from 'react';
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';

const NotesForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: '',
    priority: 'Medium',
    category: 'Work',
    description: '',
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
          <TextInput
            label='Title'
            name='title'
            value={formData.title}
            onChange={handleChange}
            required
          />
          <SelectInput
            label='Priority'
            name='priority'
            value={formData.priority}
            onChange={handleChange}
            options={['High', 'Medium', 'Low']}
          />
          <SelectInput
            label='Category'
            name='category'
            value={formData.category}
            onChange={handleChange}
            options={['Work', 'Personal', 'Ideas']}
          />
          <TextInput
            label='Description'
            name='description'
            value={formData.description}
            onChange={handleChange}
          />
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
