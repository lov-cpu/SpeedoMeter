import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeConatiner from "../TypingChallengeConatiner/TypingChallengeConatiner";
import "./TestConatiner.css";

const TestContainer = ({
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
    <div className="test-container">
      {timerRemaining > 0 ? (
        <div data-aos="fade-up" className="typing-challenge-container">
          <TypingChallengeConatiner
            words={words}
            character={character}
            wpm={wpm}
            timerRemaining={timerRemaining}
            timerStarted={timerStarted}
            selectedParagraph={selectedParagraph}
            testInfo={testInfo}
            onInputChange={onInputChange}
          />
        </div>
      ) : (
        <div className="try-again-container">
          <TryAgain words={words} character={character} wpm={wpm} startAgain={startAgain} />
        </div>
      )}
    </div>
  );
};

export default TestContainer;
