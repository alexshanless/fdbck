const FilterInput = ({ filter, onFilterChange }) => {
  return (
    <div className='filter'>
      <label htmlFor='filter'>Filter: </label>
      <input
        type='text'
        id='filter'
        value={filter}
        onChange={e => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default FilterInput;
