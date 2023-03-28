import React, { useState } from "react";
import Leaderboard from "../components/Leaderboard";
import TimeDisplay from "./TimeDisplay";
import { onSnapshot, collection, addDoc } from "firebase/firestore";
import db from "../firebase"


function FinishScreen({ time }) {
  const [name, setName] = useState("");

  const handleNewEntry = async () => {
   
    event.preventDefault();
    const collectionRef = collection(db, "leaderboard");
    const payload = { name, time };
    await addDoc(collectionRef, payload);
    console.log("New entry")
  };

  return (
    <div className="flex justify-center pt-32 gap-3 min-w-full min-h-full absolute top-0 left-0">
      <div className="flex flex-col items-center p-6 rounded-sm shadow-black shadow-2xl h-fit gap-6 bg-metal-pattern bg-cover">
        <div className="text-center">
          <h1 className="text-2xl font-semibold drop-shadow-xl tracking-wide">
            Congratulations!
          </h1>
        </div>
        <div className="flex justify-center gap-3 w-full">
          <img
            className="rounded-full w-20 shadow-slate-500 shadow-md outline"
            src="public\assets\icons\johnny-bravo.PNG"
          />
          <img
            className="rounded-full w-20 shadow-slate-500 shadow-md outline"
            src="public\assets\icons\waldo.PNG"
          />
          <img
            className="rounded-full w-20 shadow-slate-500 shadow-md outline"
            src="public\assets\icons\r2d2.PNG"
          />
        </div>
        <h1 className="text-2xl font-semibold drop-shadow-lg">
          Your finish time is
        </h1>
        {<TimeDisplay time={time} />}
        <form 
        className="flex flex-col gap-3 justify-center"
        onSubmit={handleNewEntry}>
          <label className="flex flex-col items-center gap-3" htmlFor="name">
            Enter your name:
            <input
              className=" text-black p-1 border-black border-2 rounded-md"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <button 
          className=" bg-red-600 rounded-md p-3 cursor-pointer"
          type="submit">Submit</button>
        </form>
        <Leaderboard />
      </div>
    </div>
  );
}

export default FinishScreen;
