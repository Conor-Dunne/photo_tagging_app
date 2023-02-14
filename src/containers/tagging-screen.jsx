import TagMenuBox from "../components/TagMenuBox";
import { useState } from 'react';

function TaggingScreen() {
        const [x, setX] = useState("20")
        const [y, setY] = useState("100")
        const [test, setTest] = useState("test");

    function handleClick(e) {
        console.log(e.target.id);
        if (e.target.id === "menuBox") return;
        if (e.target.id === "container") {
            setX("-1000");
            setY("-1000");
            return
        }
        console.log(e);
        setX(`${e.nativeEvent.layerX}`)
        setY(`${e.nativeEvent.layerY}`)
        setTest(`${x}, ${y}`)
    }

    return ( 
        <div
        id="container"
        onClick={handleClick}
        style={{
            border: "1px solid pink",
            height: "100vh",
            width: "100vw",
        }}
        >
            <div
        id="image"
        style={{
        position: "relative",
        border: "1px solid blue",
        height: "200px",
        width: "200px"
    }}>
        {test}
        <TagMenuBox posX={x} posY={y}/>
    </div> 
        </div>
    );
}

export default TaggingScreen;