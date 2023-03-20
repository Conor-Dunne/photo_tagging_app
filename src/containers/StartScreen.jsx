import React from 'react'


const StartScreen = ({startGame}) => {
  return (
    <div
    id="start-screen"
    className='flex justify-center pt-32 gap-10 min-w-full min-h-full absolute top-0 left-0'
    >
      <div className='flex flex-col items-center p-6 rounded-sm shadow-black shadow-2xl h-fit gap-10 bg-metal-pattern bg-cover'>
      <div className=' w-full text-center'>
      <h1 className='text-2xl font-semibold drop-shadow-lg shadow-black'>1. Find these characters</h1>
      </div>
      <div className='flex justify-center gap-3 w-full'>
        <img className='rounded-full w-20 shadow-slate-500 shadow-md outline' src='public\assets\icons\johnny-bravo.PNG' />
        <img className='rounded-full w-20 shadow-slate-500 shadow-md outline' src='public\assets\icons\waldo.PNG' />
        <img className='rounded-full w-20 shadow-slate-500 shadow-md outline' src='public\assets\icons\r2d2.PNG' />
      </div>
      <h1 className='text-2xl font-semibold drop-shadow-lg' >2. Beat the best time!</h1>
      <button
      className=' bg-red-500 px-5 py-2 rounded-3xl shadow-lg font-semibold text-2xl tracking-wide' 
      onClick={() => startGame()}
      >START</button>
      </div>
    </div>
  )
}

export default StartScreen
