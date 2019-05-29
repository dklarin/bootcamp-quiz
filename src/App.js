import React, {
  useState
} from "react";
import {
  quiz
} from "./api/data";
import "./App.css";

let rightWrong = undefined

/**
 * This is our game state object with initial values
 */
const gameState = {
  /**Index of a question the player is currently answering */
  currentQuestionIndex: 0,

  /**The answer that the player gave to the current question */
  playerAnswer: undefined,

};

/**
 * @description
 * The "Application" component.. This is the root component of our Quiz app.
 */
export default function App() {
  /**
   * useState hook provides as with a current value of the state and a function that can update the state
   * @see https://reactjs.org/docs/hooks-state.html
   * */
  const [state, setState] = useState(gameState);

  /**
   * Take the current question from the quiz object using the question index from the state object */
  const question = quiz.questions[state.currentQuestionIndex];

  /**This is the answer click  handler function. We will attach this to the button that presents offered answer.
   * The parameter "playerAnswer" contains the selected answer ("A","B","C" or "D")
   */
  const handlePlayerAnswerSelected = playerAnswer => {

    funkcija(playerAnswer)

    const newState = {
      currentQuestionIndex: state.currentQuestionIndex,
      playerAnswer: playerAnswer,

    };
    setState(newState);



  }

  function funkcija(playerAnswer) {

    if (playerAnswer === question.correctAnswer)
      indeks()


    else
      rightWrong = "krivo"




    console.log(rightWrong)
  }

  function indeks() {
    rightWrong = "bravo"

    const vrime = setTimeout(function () { }, 10); alert(rightWrong);
    if (vrime > 20)
      myFunction();

  }

  function myFunction() {

    state.currentQuestionIndex = state.currentQuestionIndex + 1;


  }





  /**The presentation (View). For now only the current question text and buttons for possible answers*/
  return (
    <div className="App">
      <div>{question.text}</div>
      <div>
        <button onClick={() => handlePlayerAnswerSelected("A")}>
          {"A: " + question.answers.A}
        </button>
        <button onClick={() => handlePlayerAnswerSelected("B")}>
          {"B: " + question.answers.B}
        </button>
        <button onClick={() => handlePlayerAnswerSelected("C")}>
          {"C: " + question.answers.C}
        </button>
        <button onClick={() => handlePlayerAnswerSelected("D")}>
          {"D: " + question.answers.D}
        </button>
        <div>{question.answers[state.playerAnswer]}</div>
        <div>{rightWrong}</div>

      </div>
    </div>
  );
}