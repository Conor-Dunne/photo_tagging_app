import React from 'react'
import Timer from './Timer'


function Header({gameStarted, getFinishTime, targets, restarted}) {
  return (
    <div className='sticky top-0 z-10 px-3 pt-5 bg-black w-full'>
      <header className='flex flex-col justify-between items-center gap-2 max-w-7xl mx-auto'>
        <div className='flex gap-3'>
            {targets.map((target, index) => (
                        <img
                        key={index + 1}
                        className= {
                          target.isFound ? "rounded-full w-10 brightness-50 " : "rounded-full w-10 outline"
                        }
                        src={target.icon}
                      />
            
            ))}
            </div>
            <Timer gameStarted={gameStarted} getFinishTime={getFinishTime} restarted={restarted} />
            <div>
            </div>
        
      </header>
    </div>
  )
}

export default Header
