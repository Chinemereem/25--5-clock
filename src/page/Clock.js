import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import { beepSound } from "./audio";
import { ArrowDown, ArrowUp, PausePlay, Reset } from "../component/Svg";

const Clock = () => {
  const [breakCount, setBreakCount] = useState(5);
  const [decrementedMinutes, setDecrementedMinutes] = useState(25); // State to store the decremented minutes
  const audioRef = useRef(null);
  const [isColored, setIsColored] = useState(false);
  const [minutes, setMinutes] = useState(25); // Initial minutes
  const [seconds, setSeconds] = useState(0); // Initial seconds
  const [isBreak, setIsBreak] = useState(false); // Flag to indicate break or session
  const [isActive, setIsActive] = useState(false); // Flag to control the countdown

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          setIsBreak((prevIsBreak) => !prevIsBreak); // Toggle break/session
          setMinutes(isBreak ? decrementedMinutes : breakCount); // Set minutes for break or session (5 minutes or 25 minutes)
          setSeconds(0); // Reset seconds
        } else if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, minutes, seconds, isBreak, decrementedMinutes, breakCount]);

  useEffect(() => {
    if (!isBreak && decrementedMinutes > 0) {
      setMinutes(decrementedMinutes);
    } else if (isBreak && breakCount > 0) {
      setMinutes(breakCount);
    }
  }, [breakCount, decrementedMinutes, isBreak]);

  const formatTime = (time) => {
    return `${time.minutes.toString().padStart(2, "0")}:${time.seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // plays audio when minutes is less than 1 and  seconds is less than 60, handles text color
  useEffect(() => {
    if (minutes < 1 && seconds < 60) {
      setIsColored(true);
      audioRef.current.play();

      return;
    } else {
      setIsColored(false);
      audioRef.current.pause();
    }
  }, [minutes, seconds]);

  const handleStartAndStop = () => {
    if (!isActive) {
      setIsActive(true);
    } else setIsActive(false);
  };

  // break Increment
  const breakIncrement = () => {
    if (isBreak && minutes < 60) {
      setMinutes((prevMinutes) => prevMinutes + 1);
      setBreakCount((prevMinutes) => prevMinutes + 1);
      setSeconds(0);
    } else if (!isBreak && breakCount < 60) {
      setBreakCount((prevMinutes) => prevMinutes + 1);
    }
  };

  // break incrememnt
  const breakDecrement = () => {
    if (isBreak && minutes > 1) {
      setMinutes((prevMinutes) => prevMinutes - 1);
      setBreakCount((prevMinutes) => prevMinutes - 1);
      setSeconds(0);
    } else if (!isBreak && breakCount > 1) {
      setBreakCount(breakCount - 1);
    }
  };

  // handle session Decrement
  const handleDecrementMinutes = () => {
    if (!isBreak && minutes > 1) {
      setMinutes((prevMinutes) => prevMinutes - 1);
      setDecrementedMinutes((prevMinutes) => prevMinutes - 1);
      setSeconds(0);
    } else if (isBreak && decrementedMinutes > 1) {
      setDecrementedMinutes((prevMinutes) => prevMinutes - 1);
    }
  };
  // handle session increment
  const handleIncrementedMinutes = () => {
    if (minutes < 60 && !isBreak) {
      setMinutes((prevMinutes) => prevMinutes + 1);
      setDecrementedMinutes((prevMinutes) => prevMinutes + 1);
      setSeconds(0);
    }
    if (isBreak && decrementedMinutes < 60) {
      setDecrementedMinutes((prevMinutes) => prevMinutes - 1);
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setMinutes(25); // Reset to initial session time
    setSeconds(0); // Reset seconds
    setIsBreak(false); // Reset to session
    setDecrementedMinutes(25);
    setBreakCount(5);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Rewind to the beginning
    }
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
        <div id="break-decrement" onClick={breakDecrement}>
          <ArrowDown />
        </div>

        <div className="break-num">
          <p id="break-length">{breakCount}</p>
        </div>
        <div id="break-increment" onClick={breakIncrement}>
          <ArrowUp />
        </div>
        <div className="break-div">
          <div id="session-decrement" onClick={handleDecrementMinutes}>
            <ArrowDown />
          </div>
          <div>
            <p id="session-length">{decrementedMinutes}</p>
          </div>
          <div id="session-increment" onClick={handleIncrementedMinutes}>
            <ArrowUp />
          </div>
        </div>
      </div>
      <div id="border-div">
        <p
          id="timer-label"
          style={{ color: isColored ? "#A50E0D" : "#02284f" }}
        >
          {isBreak ? "Break" : "Session"}
        </p>
        <h1 id="time-left" style={{ color: isColored ? "#A50E0D" : "#02284f" }}>
          {formatTime({ minutes, seconds })}
        </h1>
      </div>
      <div className="group-div">
        <div onClick={handleStartAndStop} id="start_stop">
          <PausePlay />
        </div>
        <div onClick={handleReset} id="reset">
          <Reset />
        </div>
      </div>
      <div>
        <audio ref={audioRef} id="beep">
          <source src={beepSound} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className="credits" style={{ color: "#02284f" }}>
        <p style={{ color: "#A50E0D" }}>Designed by Peter Weinberg</p>
        Coded by Stephanie Okolie
      </div>
    </div>
  );
};

export default Clock;
