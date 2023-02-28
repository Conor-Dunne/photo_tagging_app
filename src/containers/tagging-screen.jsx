import TagMenuBox from "../components/TagMenuBox";
import { useState } from "react";
import testImage from "../testData";
import GreenCircle from "../components/GreenCircle";


function TaggingScreen() {
  const [x, setX] = useState("0");
  const [y, setY] = useState("0");
  const [hideMenuBox, setHideMenuBox] = useState(true);
  const startTags = [...testImage.targets];
  const [tagsToFind, setTagsToFind] = useState(startTags);
  const [foundTargets, setFoundTargets] = useState([]);

  function handleCorrectAnswer(targetFound) {
    const updatedTags = tagsToFind.slice();
    updatedTags[tagsToFind.indexOf(targetFound)].isFound = true;
    setTagsToFind(updatedTags);
    setFoundTargets([...foundTargets, targetFound]);
    console.log("found", foundTargets);
  }




  function handleClick(e) {
    if (e.target.id === "container") {
      setHideMenuBox(false);
      return;
    }
    if (e.target.id != "image") return;

    setX(Math.round(`${(e.nativeEvent.layerX / e.target.clientWidth) * 100}`));
    setY(Math.round(`${(e.nativeEvent.layerY / e.target.clientHeight) * 100}`));
  }
  return (
    <div
      id="container"
      onClick={handleClick}
      className="flex flex-col justify-center items-center bg-black min-h-screen"
    >
      <div className="cursor-pointer relative m-0">
        <img
          id="image"
          src={testImage.src}
          alt="test"
          style={{
            width: "-webkit-fill-available",
          }}
        />
        <TagMenuBox posX={x} posY={y} tagsToFind={tagsToFind} correctClick={handleCorrectAnswer} isHidden={hideMenuBox} />
        {foundTargets.map((target) => (
          <GreenCircle key={target.name} posX={target.coordsX - 3} posY={target.coordsY -3 } />
        ))}
      </div>
      <div className="text-white">
      {`${x}, ${y}`}
      </div>
    </div>
  );
}

export default TaggingScreen;
