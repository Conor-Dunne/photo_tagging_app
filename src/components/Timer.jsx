import React, { useState, useEffect } from "react";
import TimeDisplay from "./TimeDisplay";

const Timer = ({ gameStarted, getFinishTime, restarted}) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (gameStarted) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }

    if(!gameStarted) getFinishTime(time);

    if(restarted) setTime(0);

    return () => clearInterval(intervalId);
  }, [gameStarted, time, restarted]);

  return (
    <div>
      <TimeDisplay time={time} />
    </div>
  );
};

export default Timer;
