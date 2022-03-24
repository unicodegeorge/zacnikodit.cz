import { Button, CircularProgress } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import SecondPart from './lesson/SecondPart'
import PlayGroundComponent from "./PlaygroundComponent";
import FirstPart from "./lesson/FirstPart";
function LessonComponent(props) {
  const [lesson, setLesson] = useState();
  const [currentPart, setCurrentPart] = useState(1);
  const isPreviousPossible = currentPart > 1;
  const isNextPossible = currentPart < 3;

  const [loading, toggleLoading] = useState(false);

  useEffect(() => {}, []);

  const lessonDoc = `// Welcome to class - ${lesson?.lessonTitle}`;

  const handleNextStep = () => {
      setCurrentPart(currentPart + 1)
  };
  const handlePreviousStep = () => {
    setCurrentPart(currentPart - 1)
  };
 

  return (
    <div className="LessonDiv">
      {/* <div id="ide">
           {loading && <CircularProgress sx={{position: "absolute", left: '50%', top: '50%'}} color="success" thickness="10"/>}
            {!loading && <PlayGroundComponent doc={lessonDoc}/>}
            </div> */}

            {currentPart === 1&&<FirstPart />}
            {currentPart === 2&&<SecondPart />}
            {currentPart === 3&& <PlayGroundComponent />}
      <Button
        variant="contained"
        disabled={!isPreviousPossible}
        color="success"
        onClick={handlePreviousStep}
      >
        Predchozi krok
      </Button>
      <Button
        variant="contained"
        disabled={!isNextPossible}
        color="success"g
        onClick={handleNextStep}
      >
        Dalsi krok
      </Button>
    </div>
  );
}

export default LessonComponent;
