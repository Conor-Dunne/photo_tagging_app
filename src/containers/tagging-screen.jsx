import TagMenuBox from "../components/TagMenuBox";
import { useState } from "react";
import image from "../imageData";
import GreenCircle from "../components/GreenCircle";
import StartScreen from "../components/StartScreen";

function TaggingScreen({x,y,hideMenuBox, startGame, stopGame, gameStarted, setGameOver, gameOver, foundTargets, setFoundTargets, icons}) {
  const startTags = [...image.targets];
  const [tagsToFind, setTagsToFind] = useState(startTags);


  function handleCorrectAnswer(targetFound) {
    const updatedTags = tagsToFind.slice();
    updatedTags[tagsToFind.indexOf(targetFound)].isFound = true;
    setTagsToFind(updatedTags);
    setFoundTargets([...foundTargets, targetFound]);
    console.log(startTags);
  }


  return (
    <div
      id="container"
      className="flex flex-col bg-black"
    >
      <div className="cursor-pointer relative">
        <img
          className={!gameStarted? "blur-sm" : null}
          id="image"
          src={image.src}
          alt="main image"
        />
        {!gameStarted && !gameOver && <StartScreen startGame={startGame} icons={icons.targets} />}
        <TagMenuBox
          posX={x}
          posY={y}
          stopGame={stopGame}
          tagsToFind={tagsToFind}
          correctClick={handleCorrectAnswer}
          isHidden={hideMenuBox}
          setGameOver = {setGameOver}
        />
        {foundTargets.map((target) => (
          <GreenCircle
            key={target.name}
            posX={target.coordsX - 3}
            posY={target.coordsY - 3}
            gameOver = {gameOver}
          />
        ))}
      </div>
    </div>
  );
}

export default TaggingScreen;
