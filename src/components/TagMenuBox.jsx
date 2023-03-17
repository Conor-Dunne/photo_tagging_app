import { useState } from "react";

function TagMenuBox({ posX, posY, tagsToFind, correctClick, isHidden }) {
  const [btnColor, setBtnColor] = useState("bg-green-300");
  let correct = false;

  function checkIfcorrect(target) {
    const xRange = posX - target.coordsX;
    const yRange = posY - target.coordsY;
    if (xRange <= 5 && xRange >= -5 && yRange <= 5 && yRange >= -5) {
      correctClick(target);
      correct = true;
    } else correct = false;
  }

  return (
    <div
      className={
        isHidden
          ? "hidden"
          : "w-20 h-auto p-2 bg-slate-100 rounded-sm shadow-lg shadow-black-500/40 flex flex-col gap-1 z-10"
      }
      id="menuBox"
      style={{
        position: "absolute",
        top: `${posY}%`,
        left: `${posX}%`,
      }}
    >
      <div id="closeBox" className=" text-black">x</div>
      {tagsToFind.map((target) => (
        <button
          id={target.name}
          key={target.name}
          onClick={() => {
            checkIfcorrect(target);
            if (!correct) {
              setBtnColor("bg-red-300");
              setTimeout(() => {
                setBtnColor("bg-green-300");
              }, 100); // delay for 1 second
            }
          }}
          className={
            target.isFound
              ? "pointer-events-none  bg-slate-400  p-1 rounded-sm shadow-md line-through"
              : `text-black text-lg ${btnColor} p-1 rounded-sm shadow-md text- `
          }
        >
          <h1 className="drop-shadow-md shadow-black font-medium">
            {target.name}
          </h1>
        </button>
      ))}
    </div>
  );
}

export default TagMenuBox;
