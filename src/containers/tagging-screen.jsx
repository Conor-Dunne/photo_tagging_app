import TagMenuBox from "../components/TagMenuBox";
import { useState } from 'react';
import testImage from "../testData";

function TaggingScreen() {
        const [x, setX] = useState("20")
        const [y, setY] = useState("100")
        const [test, setTest] = useState("test");

    function handleClick(e) {
        console.log(e.target.id);
        if (e.target.id === "menuBox" || e.target.id ===  "checkBtn") return;
        if (e.target.id === "container") {
            setX("-1000");
            setY("-1000");
            return
        }

        console.log(e)

        setX(Math.round(`${e.nativeEvent.layerX / e.target.clientWidth * 100}`))
        setY(Math.round(`${e.nativeEvent.layerY / e.target.clientHeight * 100}`))
    }
    console.log(test);
    return ( 
        <div
        id="container"
        onClick={handleClick}
        style={{
            border: "1px solid pink",
            width: "100vw",
        }}
        >
            <div
        id="image"
        style={{
        position: "relative",
        border: "1px solid blue",
        width: "80%",
        margin: "0 auto",
        overflow: "hidden",
    }}>
        <img 
        src={testImage.src} 
        alt="test" 
        style={{
            width: '-webkit-fill-available',
        }}
        />
        <TagMenuBox posX={x} posY={y}/>
    </div> 
    {`${x}, ${y}`}
        </div>
    );
}

export default TaggingScreen;