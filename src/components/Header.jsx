import React from 'react'
import Timer from './Timer'


function Header({gameStarted, getFinishTime}) {
  return (
    <div className='sticky top-0 z-10 px-3 py-5  bg-slate-900 w-full'>
      <header className='flex justify-between max-w-7xl mx-auto'>
        <div>
            <h1>Hello</h1>
            </div>
            <Timer gameStarted={gameStarted} getFinishTime={getFinishTime} />
            <div>
                <h1>Yay!</h1>
            </div>
        
      </header>
    </div>
  )
}

export default Header
