import { useState } from 'react';
import { useRef } from 'react';

const App = () => {
  const timerRef = useRef(null);

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

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
    timerRef.current = null;
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h2 className='text-3xl font-semibold mt-4'>Timer: {time}</h2>
      <button
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

export default App;
