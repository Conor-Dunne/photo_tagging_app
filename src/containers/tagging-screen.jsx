import TagMenuBox from "../components/TagMenuBox";
import { useState } from "react";
import image from "../imageData";
import GreenCircle from "../components/GreenCircle";

function TaggingScreen({x,y,hideMenuBox}) {
  const startTags = [...image.targets];
  const [tagsToFind, setTagsToFind] = useState(startTags);
  const [foundTargets, setFoundTargets] = useState([]);

  function handleCorrectAnswer(targetFound) {
    const updatedTags = tagsToFind.slice();
    updatedTags[tagsToFind.indexOf(targetFound)].isFound = true;
    setTagsToFind(updatedTags);
    setFoundTargets([...foundTargets, targetFound]);
  }

  return (
    <div
      id="container"
      className="flex flex-col bg-black min-h-screen max-w-7xl"
    >
      <div className="cursor-pointer relative m-0">
        <img
          id="image"
          src={image.src}
          alt="test"
          style={{
            width: "-webkit-fill-available",
          }}
        />
        <TagMenuBox
          posX={x}
          posY={y}
          tagsToFind={tagsToFind}
          correctClick={handleCorrectAnswer}
          isHidden={hideMenuBox}
        />
        {foundTargets.map((target) => (
          <GreenCircle
            key={target.name}
            posX={target.coordsX - 3}
            posY={target.coordsY - 3}
          />
        ))}
      </div>
      <div className="text-white">{`${x}, ${y}`}</div>
    </div>
  );
}

export default TaggingScreen;
