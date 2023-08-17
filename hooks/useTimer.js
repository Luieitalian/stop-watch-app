import {useState, useRef} from 'react';

const useTimer = (initialState = 0) => {
  const [elapsedTime, setElapsedTime] = useState(initialState);
  const [isRunning, setIsRunning] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    const startTime = Date.now() - elapsedTime;
    countRef.current = setInterval(() => {
      setElapsedTime(Date.now() - startTime);
    }, 50);
    setIsRunning(true);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsRunning(false);
  };

  const handleDone = () => {
    clearInterval(countRef.current);
    setIsRunning(false);
    setElapsedTime(0);
  };

  return {elapsedTime, isRunning, handleStart, handlePause, handleDone};
};

export default useTimer;
//
