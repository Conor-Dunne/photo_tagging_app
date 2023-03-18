import TagMenuBox from "../components/TagMenuBox";
import { useState } from "react";
import image from "../imageData";
import GreenCircle from "../components/GreenCircle";
import StartScreen from "./StartScreen";

function TaggingScreen({x,y,hideMenuBox}) {
  const startTags = [...image.targets];
  const [tagsToFind, setTagsToFind] = useState(startTags);
  const [foundTargets, setFoundTargets] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  function handleCorrectAnswer(targetFound) {
    const updatedTags = tagsToFind.slice();
    updatedTags[tagsToFind.indexOf(targetFound)].isFound = true;
    setTagsToFind(updatedTags);
    setFoundTargets([...foundTargets, targetFound]);
  }

  function startGame() {
    setGameStarted(true);
  }

  return (
    <div
      id="container"
      className="flex flex-col bg-black"
    >
      <div className="cursor-pointer relative">
        <img
          id="image"
          src={image.src}
          alt="main image"
        />
        {!gameStarted && <StartScreen startGame={startGame} />}
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
    </div>
  );
}

export default TaggingScreen;
