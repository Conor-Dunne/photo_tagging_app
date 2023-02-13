

function TagMenuBox({posX,posY}) {
    return ( <div style={{
        width: "100px",
        height: "50px",
        border: "1px solid red",
        position: "absolute",
        top: `${posY}px`,
        left: `${posX}px`,
    }}>
        me!
    </div> );
}

export default TagMenuBox;