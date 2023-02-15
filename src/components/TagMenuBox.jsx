

function TagMenuBox({posX,posY}) {

    function test () {
        console.log("check");
    }

    return ( <div 
        className="w-20 h-auto p-2 bg-slate-100 rounded-lg shadow-lg shadow-black-500/40"
        id="menuBox"
        style={{
        position: "absolute",
        top: `${posY}%`,
        left: `${posX}%`,
    }}>
        <button 
        id="checkBtn"
        onClick={test}
        className="text-white bg-slate-300 p-1 border-2 border-zinc-300 rounded-md shadow-md">Check</button>
    </div> );
}

export default TagMenuBox;