import TagMenuBox from "../components/TagMenuBox";
import { useState } from 'react';
import testImage from "../testData";

function TaggingScreen() {
        const [x, setX] = useState("20")
        const [y, setY] = useState("100")
        const [test, setTest] = useState("test");

    function handleClick(e) {
        console.log(e.target.id);
        console.log(e);
        // if (e.target.id === "menuBox" || e.target.id ===  "checkBtn") return;
        if (e.target.id === "container") {
            setX("-1000");
            setY("-1000");
            return
        }
        if (e.target.id != "image") return;

        setX(Math.round(`${e.nativeEvent.layerX / e.target.clientWidth * 100}`))
        setY(Math.round(`${e.nativeEvent.layerY / e.target.clientHeight * 100}`))
    }
    return ( 
        <div
        id="container"
        onClick={handleClick}
        className="w-f flex flex-col justify-center items-center"
        >
            <div
        
        className="cursor-pointer relative w-4/5 m-0 overflow-hidden max-h-screen max-w-md"
       >
        <img 
        id="image"
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