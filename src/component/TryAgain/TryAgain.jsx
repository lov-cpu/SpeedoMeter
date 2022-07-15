import React from "react";
import "./TryAgain.css";

const TryAgain = ({ words, character, wpm ,startAgain}) => {
  return (
    <div className="try-again-conatiner">
      <h1>Test Results </h1>

      <div className="result-container">
        <p>
          <b>words:</b> {words}
        </p>
        <p>
          <b>character:</b> {character}
        </p>
        <p>
          <b>speed:</b> {wpm} wpm
        </p>
      </div>

      <div>
        <button onClick={ ()=> startAgain()} className="end-buttons start-again-button ">Re-Try</button>

        <button
          onClick={() => {
            window.open(
              "https://www.facebook.com/sharer/sharer.php?u= www.facebook.com/lovekeshkumar.arya",
              "facebook-share-dialog",
              "width=800 ,height=600"
            );
          }}
          className="end-buttons share-button "
        >
          share
        </button>

        <button
          onClick={() =>
            window.open(
              "https://twitter.com/intent/tweet?text=Check%20this%20out%20 twitter.com/Lovekesh_Arya ",
              "Twitter",
              "width=800,height=600"
            )
          }
          className="end-buttons tweet-button "
        >
          tweet
        </button>
      </div>
    </div>
  );
};
export default TryAgain;
