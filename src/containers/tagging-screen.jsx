import TagMenuBox from "../components/TagMenuBox";
import { useState } from 'react';

function TaggingScreen() {
        const [x, setX] = useState("20px")
        const [y, setY] = useState("100px")
        const [test, setTest] = useState("test");

    function handleClick(e) {
        setX(`${e.nativeEvent.layerX}`)
        setY(`${e.nativeEvent.layerY}`)
        setTest(`${x}, ${y}`)
    }

    return ( <div
        onClick={handleClick}
        style={{
        position: "relative",
        border: "1px solid blue",
        height: "200px",
        width: "200px"
    }}>
        {test}
        <TagMenuBox posX={x} posY={y}/>
    </div> );
}

export default TaggingScreen;