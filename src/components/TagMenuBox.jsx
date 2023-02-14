

function TagMenuBox({posX,posY}) {
    return ( <div 
        id="menuBox"
        style={{
        width: "100px",
        height: "50px",
        border: "1px solid red",
        position: "absolute",
        top: `${posY}%`,
        left: `${posX}%`,
    }}>
        me!
    </div> );
}

export default TagMenuBox;