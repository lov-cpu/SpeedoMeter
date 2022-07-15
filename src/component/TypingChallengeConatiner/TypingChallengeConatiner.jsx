import React from "react";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TypingChallengeConatiner.css";

const TypingChallengeConatiner = ({
    selectedParagraph,
    words,
    character,
    wpm,
    timerRemaining,
    timerStarted,
    testInfo,
    onInputChange,
  }) =>{
    return (
        <div className="typing-challenge-container">

        <div className="details-container">
            <ChallengeDetailsCard cardName="words" cardValue={words} />
            
            <ChallengeDetailsCard cardName="character" cardValue={character} />

            <ChallengeDetailsCard cardName="speed" cardValue={wpm} />

        </div>

        <div className="challenge-container">
        <TypingChallenge selectedParagraph={selectedParagraph}
        timerRemaining= {timerRemaining}
        timerStarted= {timerStarted}
        testInfo={testInfo}
        onInputChange={onInputChange}
        />
        </div>

        </div>
    );
}

export default TypingChallengeConatiner;