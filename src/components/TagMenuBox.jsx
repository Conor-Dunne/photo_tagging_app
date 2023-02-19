function TagMenuBox({ posX, posY , tagsToFind, correctClick }) {
  
  function checkIfcorrect(target) {
    console.log(target);
    const xRange = posX - target.coordsX;
    const yRange = posY - target.coordsY;
    if(xRange <= 5 && xRange >= -5 && yRange <= 5 && yRange >= -5 ) {
      console.log(`You found the ${target.name}`)
      correctClick(target);
    } else console.log("Not here")
    
  }


  return (
    <div
      className="w-20 h-auto p-2 bg-slate-100 rounded-sm shadow-lg shadow-black-500/40 flex flex-col gap-1"
      id="menuBox"
      style={{
        position: "absolute",
        top: `${posY}%`,
        left: `${posX}%`,
      }}
    >

    {tagsToFind.map(target => (
      <button
      id={target.name}
      key={target.name}
      onClick={()=> checkIfcorrect(target)}
      className={target.isFound? "pointer-events-none  bg-slate-400  p-1 rounded-sm shadow-md line-through" : "text-white text-lg bg-green-300 p-1 rounded-sm shadow-md text- "}
    
    >
      <h1
        className="drop-shadow-md shadow-black font-medium"
      >{target.name}</h1>
    </button>
    ))}

      
    </div>
  );
}

export default TagMenuBox;
