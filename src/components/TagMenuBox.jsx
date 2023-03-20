import { useState } from "react";

function TagMenuBox({ posX, posY, tagsToFind, correctClick, isHidden, stopGame }) {
  const [btnColor, setBtnColor] = useState("bg-green-300");
  const [targetsFound, setTargetsFound] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  
  let correct = false;

  function checkIfOver(){
    console.log(targetsFound, tagsToFind.length)
    if(targetsFound == tagsToFind.length -1 ) {
      console.log("all found!")
      setGameOver(true);
      stopGame();
    }
  }

  function checkIfcorrect(target) {
    const xRange = posX - target.coordsX;
    const yRange = posY - target.coordsY;
    if (xRange <= 5 && xRange >= -5 && yRange <= 5 && yRange >= -5) {
      correctClick(target);
      correct = true;
      setTargetsFound(targetsFound + 1);
    } else correct = false;

    
  }

  return (
    <div
      className={
        isHidden
          ? "hidden"
          : "h-auto p-2 bg-slate-100 rounded-sm shadow-lg shadow-black-500/40 flex flex-col gap-1 z-10"
      }
      id="menuBox"
      style={{
        position: "absolute",
        top: `${posY}%`,
        left: `${posX}%`,
      }}
    >
      
      {tagsToFind.map((target) => (
        <button
          id={target.name}
          key={target.name}
          onClick={() => {
            console.log(target)
            checkIfcorrect(target);
            if (!correct) {
              setBtnColor("bg-red-300");
              setTimeout(() => {
                setBtnColor("bg-green-300");
              }, 100); // delay for 1 second
            }
            checkIfOver()
          }}
          className={
            target.isFound
              ? "pointer-events-none flex gap-2 items-center bg-slate-400  p-1 rounded-sm shadow-md line-through"
              :  ` flex gap-2 items-center  text-black text-lg ${btnColor} p-1 rounded-sm shadow-md text- `
          }
        >
          <div id="icon-wrapper" className="w-10">
            <img src={target.icon} className=" rounded-full"/>
          </div>
          <h1 className="drop-shadow-md shadow-black font-medium">
            {target.name}
          </h1>
        </button>
      ))}
      <button
      onClick={()=> stopGame()}
      >stop</button>
    </div>
  );
}

export default TagMenuBox;
