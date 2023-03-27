import React, { useState, useEffect } from "react";
import TimeDisplay from "./TimeDisplay";

const Timer = ({ gameStarted, getFinishTime }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (gameStarted) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }

    if(!gameStarted) getFinishTime(time);

    return () => clearInterval(intervalId);
  }, [gameStarted, time]);

  // const minutes = Math.floor((time % 360000) / 6000);
  // const seconds = Math.floor((time % 6000) / 100);
  // const milliseconds = time % 100;

  return (
    <div>
      <TimeDisplay time={time} />
    </div>
  );
};

export default Timer;
