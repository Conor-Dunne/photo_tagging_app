function GreenCircle({posY, posX}) {
  return (
    <div>
      <div 
      className="w-8 h-8 border-solid border-4 border-green-300 rounded-full"
      style={{
        position: "absolute",
        top: `${posY+2}%`,
        left: `${posX+1}%`,
      }}
      >
      </div>
    </div>
  );
}

export default GreenCircle;
