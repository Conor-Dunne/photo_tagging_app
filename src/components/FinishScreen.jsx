import React, { useState } from "react";
import Leaderboard from "../components/Leaderboard";
import TimeDisplay from "./TimeDisplay";
import { onSnapshot, collection, addDoc } from "firebase/firestore";
import db from "../firebase";

function FinishScreen({ time, icons, restart }) {
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleNewEntry = async () => {
    event.preventDefault();
    const collectionRef = collection(db, "leaderboard");
    const payload = { name, time };
    await addDoc(collectionRef, payload);
    setIsSubmitted(true);
  };

  return (
    <div className="flex justify-center pt-32 gap-3 min-w-full min-h-full absolute top-0 left-0">
      <div className="sticky top-24 flex flex-col items-center p-6 rounded-sm shadow-black shadow-2xl h-fit gap-6 bg-metal-pattern bg-cover">
        <div className="text-center">
          <h1 className="text-2xl font-semibold drop-shadow-xl tracking-wide">
            Congratulations!
          </h1>
        </div>
        <div className="flex gap-3">
          {icons.map((icon, index) => (
            <img 
            key={index + 1}
            className="rounded-full w-10 outline" src={icon.icon} />
          ))}
        </div>
        <h1 className="text-2xl font-semibold drop-shadow-lg">
          Your finish time is
        </h1>
        {<TimeDisplay time={time} />}
        <form
          className={
            isSubmitted ? "hidden" : "flex flex-col gap-3 justify-center"
          }
          onSubmit={handleNewEntry}
        >
          <label className="flex flex-col items-center gap-3" htmlFor="name">
            Enter your name:
            <input
              className=" text-black p-1 border-black border-2 rounded-md"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <button
            className=" bg-green-600 rounded-md p-3 cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </form>
        <button
          onClick={restart}
          className={
            !isSubmitted ? "hidden" : " bg-blue-600 shadow-lg font-bold rounded-md p-3 cursor-pointer"
          }
        >
          RESTART
        </button>
        <Leaderboard />
      </div>
    </div>
  );
}

export default FinishScreen;
