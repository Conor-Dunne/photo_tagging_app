import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import db from "../firebase"
import TimeDisplay from './TimeDisplay';

function leaderboard() {

    const [leaderboard, setLeaderBoard] = useState([{ name: "Loading...", id: "initial"}]);

    useEffect(() => {
      const leaderboardCollection = collection(db, 'leaderboard');
      const leaderboardQuery = query(leaderboardCollection, orderBy('time', 'asc'));
  
      const unsubscribe = onSnapshot(leaderboardQuery, (snapshot) => {
        setLeaderBoard(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
  
      return () => unsubscribe();
    }, []);

    

  return (
    <div className='w-full'>
      <h1 className=' underline text-center mb-3'>Leaderboard</h1>
      <ul>
        {leaderboard.map((user, index) => (
            <li key={user.id} >{
              <div className='flex justify-between'>
                <div>
                  {`${index + 1}. ${user.name} `}
              
                
                </div>
                <TimeDisplay time={user.time} />
              </div>
            }</li>
        ) )}
      </ul>
    </div>
  )
}

export default leaderboard

