import { useState, useRef, useEffect } from 'react';

const Timer = () => {
  const timerRef = useRef(null);
  const startButtonRef = useRef(null);

  const [time, setTime] = useState(
    () => Number(localStorage.getItem('time')) || 0
  );
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    localStorage.setItem('time', time);
  }, [time]);

  useEffect(() => {
    if (startButtonRef.current) {
      startButtonRef.current.focus();
    }
  }, []);

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    } else {
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    localStorage.removeItem('time');
    timerRef.current = null;
  };

  return (
    <div>
      <h2 className='text-3xl font-semibold mt-4'>Timer: {time}</h2>
      <button
        ref={startButtonRef}
        onClick={toggleTimer}
        className='mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button
        onClick={resetTimer}
        className='mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-600'
      >
        {'Reset'}
      </button>
    </div>
  );
};

export default Timer;
