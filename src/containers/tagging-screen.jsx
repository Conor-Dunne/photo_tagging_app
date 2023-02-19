import TagMenuBox from "../components/TagMenuBox";
import { useState } from "react";
import testImage from "../testData";

function TaggingScreen() {
  const [x, setX] = useState("-1000");
  const [y, setY] = useState("100");
  const startTags = [...testImage.targets];
  const [tagsToFind, setTagsToFind] = useState(startTags);

  function handleCorrectAnswer(targetFound) {
    const updatedTags = tagsToFind.slice();
    updatedTags[tagsToFind.indexOf(targetFound)].isFound = true;
    setTagsToFind(updatedTags);
    console.log(updatedTags);
  }




  function handleClick(e) {
    if (e.target.id === "container") {
      setX("-1000");
      setY("-1000");
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
      className="w-f flex flex-col justify-center items-center"
    >
      <div className="cursor-pointer relative w-4/5 m-0 max-h-screen max-w-md">
        <img
          id="image"
          src={testImage.src}
          alt="test"
          style={{
            width: "-webkit-fill-available",
          }}
        />
        <TagMenuBox posX={x} posY={y} tagsToFind={tagsToFind} correctClick={handleCorrectAnswer} />
      </div>
      {`${x}, ${y}`}
    </div>
  );
}

export default TaggingScreen;
