import TagMenuBox from "../components/TagMenuBox";

function TaggingScreen() {



    return ( <div style={{
        position: "relative",
    }}>
        tag me
        <TagMenuBox posX={100} posY={100}/>
    </div> );
}

export default TaggingScreen;