import React, { useState } from "react";
import { quiz } from "../../api/data";
import { QuestionPresenter } from "../QuestionPresenter";
import { StatusProgress } from "../StatusProgress";
import { Changer } from "../../components/Changer";
import { Welcome } from "../../features/welcome";
import Popup from 'reactjs-popup'


/***
 * @description
 * This is our root quiz component. Here we mange the game state (current question, selected answer...)
 * Quiz component should be visible when the game was started by the player.
 */
export function Quiz() {

  const [isQuestionSelected, setQuestionSelected] = useState(false);

  /**create a state variable for tracking the selected answer
   * and desturcture from the useState result array  */
  const [playerAnswer, setPlayerAnswer] = useState("");

  const [igracevOdgovor, setIgracevOdgovor] = useState("");

  /**create a state variable for tracking the current question index and
   * destructure from the useState result array
   */
  const [questionIndex, setQuestionIndex] = useState(0);

  /***
   * take the current question from the quiz object
   */
  const currentQuestion = quiz.questions[questionIndex];

  /**This is the function that should be called when the player select the answer */
  const onAnswerSelected = answer => {

    setClassName("button-answer-selected");
    setQuestionSelected(true);
    setPlayerAnswer(answer);

  };

  const [className, setClassName] = useState("");
  const [WelcomeScreen, setWelcomeScreen] = useState(false)

  const rightAnswer = quiz.questions[questionIndex].correctAnswer;

  const [openSesame, setOpenSesame] = useState(false);

  /** Moje */
  function checker(playerAnswer) {

    if (playerAnswer === rightAnswer) raiseIndex();
    else resetIndex();

  }

  /** Moje */
  function raiseIndex() {
    let currentQuestionIndex = 0;
    currentQuestionIndex = questionIndex + 1;
    Changer(currentQuestionIndex);
    setQuestionIndex(currentQuestionIndex);
    setQuestionSelected(false);
    setClassName("");
  }

  function resetIndex() {
    setQuestionSelected(false);
    setClassName("");
    let currentQuestionIndex = 0;
    setQuestionIndex(currentQuestionIndex);
    Changer(currentQuestionIndex);
    setWelcomeScreen(true)
  }


function sameQuestion(sameNumber) {
  setQuestionSelected(false)
  setClassName("")
   
  setQuestionIndex(sameNumber);
    
}


  const secondChoice = odgovor => {
    
    if (odgovor === "DA") checker(playerAnswer)

    else sameQuestion(questionIndex)

  };

  const PopupExample = () => (
    <div className="menu">
    <Popup open={true} position="right center" >
      
      {close => (
        <div className="nekidiv">
          <div>Da li je to vaš</div>
          <div>konačan odgovor?</div>


          <a className="close" onClick={close}>
            
            <button className="odgovor"
            onClick={() => secondChoice("DA")}>DA</button>
          </a>

          <a className="close" onClick={close}>
            <button className="odgovor"
              onClick={() => secondChoice("NE")}>NE</button>
          </a>
          
         
        
        </div>
      )}

    </Popup>
    </div>
  )


  return WelcomeScreen ? (

    <Welcome handleGameStart={() => setWelcomeScreen(false)} />

  ) : (

      <div className="row">

        <div className="prva">
          {isQuestionSelected ? (PopupExample()) : (null)}
          <QuestionPresenter

            className={className}
            question={currentQuestion}
            onAnswerSelected={onAnswerSelected}
            playerAnswer={playerAnswer}
          />
        </div>

        <div className="druga">
          <StatusProgress />
        </div>

      </div>
    );
}
