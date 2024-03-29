import React from "react";
import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";

const EndScreen = () => {
  const { score, setScore, setGameState, userName } = useContext(
    GameStateContext
  );

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="EndScreen">
      <h1>Quiz End</h1>
      <h3>Thanks, {userName}</h3>

      <h1>
        {score} / {Questions.length}
      </h1>
      <span>
      {
        (score>=4 ? <p className="pass">PASS</p>:<p className="fail">FAIL</p>)
      }
      </span>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
