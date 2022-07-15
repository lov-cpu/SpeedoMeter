import React from "react";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import Fotter from "../Fotter/Fotter";
import {SAMPLE_PARAGRAPHS} from "./../../data/sampleParagraph";
import "./App.css";

const totalTime = 60;
const url = "https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text";
const defaultState={
  selectedParagraph: "MY name is Lovekesh",
  timerStarted: false,
  timerRemaining: totalTime,
  words: 0,
  character: 0,
  wpm: 0,
  testInfo: [],
};


class App extends React.Component {
  state = defaultState

  fetchNewParagraphFallback = () =>{
    const data= SAMPLE_PARAGRAPHS[
      Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
    ];

    const selectedParagraphArray = data.split("");
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted",
      };
    });

    this.setState({ ...defaultState,testInfo , selectedParagraph: data });//Name of key ==Name of value so can be reduced

  }

  fetchNewParagraph = () =>{
    fetch(url)
      .then((response) => response.text())
      .then((data) => {

        const selectedParagraphArray = data.split("");
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted",
      };
    });

    this.setState({ ...defaultState,testInfo , selectedParagraph: data });//Name of key ==Name of value so can be reduced
    
      });
  }

  componentDidMount() {
      this.fetchNewParagraphFallback();
  }

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timerRemaining > 0) {
        const timeSpent = totalTime - this.state.timerRemaining;
        const wpm =
          timeSpent > 0 ? (this.state.words / timeSpent) * totalTime : 0;

        this.setState({
          timerRemaining: this.state.timerRemaining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  startAgain = () => this.fetchNewParagraphFallback();  

  handleUserInput = (inputValue) => {
    if (!this.state.timerStarted) {
      this.startTimer();
    }
    const character = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = character - 1;

    if (index < 0) {
      //we are going to simply set our new states with the updated testinfo where the first letter of the paragraph is not attended
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: "notAttempted",
          },
          ...this.state.testInfo.slice(1),
        ],
        character,
        words,
      });

      return;
    }

    if (index >= this.state.selectedParagraph.length) {
      //overflow
      this.state({ character, words });
      return;
    }

    //make a copy of test info
    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1)) {
      testInfo[index + 1].status = "notAttempted";
    }

    //check for the correct type letter
    const isCorrect = inputValue[index] === testInfo[index].testLetter;

    // update the status
    testInfo[index].status = isCorrect ? "correct" : "incorrect";

    this.setState({
      testInfo,
      words,
      character,
    });
  };

  render() {
    console.log("testInfo--", this.state.testInfo);
    console.log("Render method was called");
    return (
      <div className="app">
        {/*nav section*/}
        <Nav />

        {/*Landing Page */}
        <Landing />

        {/*Challenge Section*/}
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          character={this.state.character}
          wpm={this.state.wpm}
          timerRemaining={this.state.timerRemaining}
          timerStarted={this.state.timerStarted}
          testInfo={this.state.testInfo}
          onInputChange={this.handleUserInput}
          startAgain={this.startAgain}
        />

        {/*Footer*/}
        <Fotter />
      </div>
    );
  }
}
export default App;

// https://github.com/TheLeanProgrammer/flashtype

//https://baconipsum.com/json-api/
