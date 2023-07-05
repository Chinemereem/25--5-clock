import React, { useState, useEffect } from "react";
import "./styles.css";

const Clock = () => {
  const [breakCount, setBreakCount] = useState(5);
  const [sessionCount, setSessionCount] = useState(25);
  const [minutes, setMinutes] = useState(sessionCount)
  //   const [minutes, setMinutes] = useState(sessionCount);
  const [seconds, setSeconds] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId = null;

    if (isRunning) {
        if (seconds > 0) {
      intervalId = setInterval(() => {
        // if (seconds < 59) {
        //   setSeconds(seconds - 1);
        // } else {
        //   setMinutes(minutes + 1);
        //   setSeconds(0);
        // }
       
           
        setSeconds((prevSeconds) => prevSeconds - 1);
        // setMinutes((prevSeconds) => prevSeconds - 1);
            }, 1000);
          } else {
            setSeconds(1500); // Reset the timer to 25 minutes when it reaches 00:00
          }
        
    }
    // else if (sessionCount < 1) {
    //     setMinutes(0);
    //   }
    return () => {
      clearInterval(intervalId);
      
    };
  }, [isRunning, seconds]);

  const formatTime = (totalSeconds) => {
    // const minutes = Math.floor(totalSeconds / 60);
  
    const formatMinutes = minutes < 10 ? `0${minutes}` : minutes; 
    const seconds = totalSeconds % 60;

    // Pad single-digit seconds with a leading zero
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${formatMinutes}:${formattedSeconds}`;
  };
  console.log(!isRunning, "!isRunning");
  const handleStartAndStop = () => {
    if (!isRunning) {
      setIsRunning(true);
    } else setIsRunning(false);
  };

  //   const handlePause = () => {
  //     setIsRunning(false);
  //   };
  const decrementCount = () => {
    if (breakCount > 1) {
      setBreakCount(breakCount - 1);
    }
  };
  const sessionDecrement = () => {
    if (sessionCount > 1) {
      setSessionCount(sessionCount - 1);
    }
  };
  const handleReset = () => {
    // setMinutes(25);
    setSeconds(1500);
    setIsRunning(false);
    setBreakCount(5);
    setSessionCount(25);
  };

  return (
    <div className="container">
      <h1> 25 + 5 Clock </h1>
      <div className="group-div">
        <p id="break-label">Break Length</p>
        <div>
          <p id="session-label">Session Length</p>
        </div>
      </div>
      <div className="break-div">
        <div id="break-decrement" onClick={decrementCount}>
          <p>click 1</p>
        </div>

        <div>
          <p id="break-length">{breakCount}</p>
        </div>
        <div
          id="break-increment"
          onClick={() => {
            setBreakCount(breakCount + 1);
          }}
        >
          <p>click 2</p>
        </div>
        <div className="break-div">
          <div id="session-decrement" onClick={sessionDecrement}>
            <p>click s1</p>
          </div>
          <div>
            <p id="session-length">{sessionCount}</p>
          </div>
          <div
            id="session-increment"
            onClick={() => {
              setSessionCount(sessionCount + 1);
            }}
          >
            <p>click 2</p>
          </div>
        </div>
      </div>
      <div className="border-div">
        <p id="timer-label">Session</p>
        <div id="time-left">
          <h1>{formatTime(seconds)}</h1>
        </div>
      </div>
      <div className="group-div">
        <button onClick={handleStartAndStop} id="start_stop">
          Start
        </button>

        {/* {isRunning && <button onClick={handlePause}>Pause</button>} */}
        <button onClick={handleReset} id="reset">
          Reset
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Clock;
