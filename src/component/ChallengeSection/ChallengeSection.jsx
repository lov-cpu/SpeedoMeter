import React from "react";
import TestContainer from "../TestConatiner/TestConatiner";
import "./ChallengeSection.css";

const ChallengeSection = ({
  selectedParagraph,
  words,
  character,
  wpm,
  timerRemaining,
  timerStarted,
  testInfo,
  onInputChange,
  startAgain,
}) => {
  return (
    <div className="challenge-section-conatiner">
      <h1 data-aos="fade-down" className="challenge-section-header">
        Take a speed test now!
      </h1>
      <TestContainer
        selectedParagraph={selectedParagraph}
        words={words}
        character={character}
        wpm={wpm}
        timerRemaining={timerRemaining}
        timerStarted={timerStarted}
        testInfo={testInfo}
        onInputChange={onInputChange}
        startAgain={startAgain}
      />
    </div>
  );
};
export default ChallengeSection;
