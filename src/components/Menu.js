import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Menu() {
  const { gameState, setGameState, userName, setUserName } = useContext(
    GameStateContext
  );
  const submit=(e)=>{
    e.preventDefault();
    if(userName === ''){
      alert("Sorry!!! Fill your Name First...");
    }else{
      setGameState("playing");
    }
  }
  return (
    <div>
    <form onSubmit={submit}>
    <div className="Menu">
    
      <label>Enter Your Name:</label>
      <input
        type="text"
       
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button className="startQuiz">
        Start Quiz
      </button>
    </div>
    </form>
    </div>
  );
}

export default Menu;
