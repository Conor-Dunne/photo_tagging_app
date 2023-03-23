import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import db from "../firebase"

function leaderboard() {

    const [leaderboard, setLeaderBoard] = useState([{ name: "Loading", id: "initial"}]);

    useEffect(() => {
        onSnapshot(collection(db, "leaderboard"), (snapshot) => {
            setLeaderBoard(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }),
        []
    })

  return (
    <div>
      <h1>Leaderboard</h1>
      <ul>
        {leaderboard.map((user) => (
            <li key={user.id} >{user.name}</li>
        ) )}
      </ul>
    </div>
  )
}

export default leaderboard

