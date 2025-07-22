import { useState } from 'react';
import Star from './Star';
import Modal from './Modal';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  const closeModal = () => {
    setSubmitted(false);
    setRating(0);
    setHover(0);
  };

  const feedbackMessages = ['Very Bad', 'Bad', 'Okay', 'Good', 'Excellent'];
  return (
    <div className='rating-container'>
      <h2>Rate your experience</h2>
      <div className='stars'>
        {[1, 2, 3, 4, 5].map(star => (
          <Star
            key={star}
            star={star}
            rating={rating}
            hover={hover}
            ratingClick={() => setRating(star)}
            setHover={setHover}
          />
        ))}
      </div>
      {rating > 0 && (
        <p className='feedback'> {feedbackMessages[rating - 1]}</p>
      )}
      <button
        className='submit-btn'
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Submit
      </button>
      <Modal isOpen={submitted} onClose={closeModal} rating={rating} />
    </div>
  );
};

export default Rating;
