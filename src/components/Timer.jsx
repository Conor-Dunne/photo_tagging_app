import React, { useState, useEffect } from "react";

const Timer = ({ gameStarted, getFinishTime }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (gameStarted) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }

    if(!gameStarted) console.log(time);

    return () => clearInterval(intervalId);
  }, [gameStarted, time]);

  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  return (
    <div>
      {minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}:
      {milliseconds.toString().padStart(2, "0")}
    </div>
  );
};

export default Timer;
