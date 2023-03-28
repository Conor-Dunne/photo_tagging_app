import React, { useEffect, useState } from 'react'

function TimeDisplay({time}) {

    const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  const [dbIsReady, setDbIsReady] = useState(false);


  useEffect(() => {
    if (time > 0) {
      setDbIsReady(true);
    }
  }, [time]);

  if (dbIsReady) {
    return  <div>
    {minutes.toString().padStart(2, "0")}:
   {seconds.toString().padStart(2, "0")}:
   {milliseconds.toString().padStart(2, "0")}
 </div>
  }
}

export default TimeDisplay
