function TagMenuBox({ posX, posY }) {
  function test() {
    console.log("check");
  }

  return (
    <div
      className="w-20 h-auto p-2 bg-slate-100 rounded-sm shadow-lg shadow-black-500/40"
      id="menuBox"
      style={{
        position: "absolute",
        top: `${posY}%`,
        left: `${posX}%`,
      }}
    >
      <button
        id="checkBtn"
        onClick={test}
        className="text-white text-lg bg-slate-400 p-1 rounded-sm shadow-md"
      >
        <h1
        className=" text-xl"
        >Check</h1>
      </button>
    </div>
  );
}

export default TagMenuBox;
