const Star = ({ star, rating, hover, ratingClick, setHover }) => {
  return (
    <span
      className={`star ${star <= (hover || rating) ? 'active' : ''}`}
      onClick={ratingClick}
      onMouseEnter={() => setHover(star)}
      onMouseLeave={() => setHover(0)}
    >
      {'\u2605'}
    </span>
  );
};

export default Star;
