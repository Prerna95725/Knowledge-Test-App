import "../App.css";
import { Questions } from "../helpers/Questions";
import { useState } from "react";

import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [questionNumber,setQuestionNumber] = useState(1);


  const { score, setScore, gameState, setGameState } = useContext(
    GameStateContext
  );


  const {  userName, setUserName } = useContext(
    GameStateContext
  );

  const chooseOption = (option) => {
    
    setOptionChosen(option);
    
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    
    setCurrentQuestion(currentQuestion + 1);

    setQuestionNumber(questionNumber+1);
  };
 

  const finishQuiz = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  return (
    <div className="Quiz">
     <p>Good Luck! <b>{userName}</b></p>
     <p>{questionNumber} of {Questions.length}</p>
      <h1 className="question">{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button id="optionButton"
          onClick={() => {
            chooseOption("optionA");

          }}


        >
          {Questions[currentQuestion].optionA}
        </button>
        <button id="optionButton"
          onClick={() => {
            chooseOption("optionB");
          }}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button id="optionButton"
          onClick={() => {
            chooseOption("optionC");
          }}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button id="optionButton"
          onClick={() => {
            chooseOption("optionD");
          }}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (

     
<>
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
        

</>
      )}
    </div>
  );
}

export default Quiz;
