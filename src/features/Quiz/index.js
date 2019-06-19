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
  const [progressIndex, setProgressIndex] = useState(0);

  const rightAnswer = quiz.questions[questionIndex].correctAnswer;

  /** Moje */
  function checker(playerAnswer) {
    if (playerAnswer === rightAnswer) raiseIndex();
    else resetIndex();
  }

  /** Moje */
  function raiseIndex() {

    const rand = randomNumber()

    let currentProgressIndex = 0;
    currentProgressIndex = progressIndex + 1;

    Changer(currentProgressIndex);
    setProgressIndex(currentProgressIndex);

    setQuestionIndex(rand);
    setQuestionSelected(false);
    setClassName("");
  }

  function randomNumber() {
    const rand = Math.floor((Math.random() * 9) + 1)
    return rand
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
      <Popup open={true} position="right center" offsetX="800px" offsetY="1000px">

        {close => (
          <div className="modal">
            <div>Da li je to vaš konačan odgovor?</div>

            <div className="yesno">
              <a className="close" onClick={close}>

                <button className="odgovor"
                  onClick={() => secondChoice("DA")}>DA</button>
              </a>

              <a className="close" onClick={close}>
                <button className="odgovor"
                  onClick={() => secondChoice("NE")}>NE</button>
              </a>
            </div>


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
