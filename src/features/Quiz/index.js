import React, { useState, useEffect } from "react";
import { quiz } from "../../api/data";
import { QuestionPresenter } from "../QuestionPresenter";
import { StatusProgress } from "../StatusProgress";
import { Changer } from "../../components/Changer";
import { Welcome } from "../../features/welcome";
import Popup from 'reactjs-popup'
import { Random } from "../../components/Random"

/***
 * @description
 * This is our root quiz component. Here we mange the game state (current question, selected answer...)
 * Quiz component should be visible when the game was started by the player.
 */
export function Quiz() {



  const [isQuestionSelected, setQuestionSelected] = useState(false);
  const [isEnd, setEnd] = useState(false);


  /**create a state variable for tracking the selected answer
   * and desturcture from the useState result array  */
  const [playerAnswer, setPlayerAnswer] = useState("");

  console.log("Prije questionIndex")
  /**create a state variable for tracking the current question index and
   * destructure from the useState result array
   */
  const [questionIndex, setQuestionIndex] = useState(0);
  console.log("Poslije questionIndex")

  const [arr, setArr] = useState([]);

  var setArrb = []
  if (arr.length === 0) {
    generator()
  }



  function generator() {
    setArrb = Random()
    console.log("setArrb: " + setArrb)
    setArr(setArrb)
  }

  console.log("Provjera niza: " + arr)

  /***
   * take the current question from the quiz object
   */
  const currentQuestion = quiz.questions[questionIndex];


  /**This is the function that should be called when the player select the answer */
  const onAnswerSelected = answer => {
    setClassName("button-answer-selected");
    setQuestionSelected(true);
    setPlayerAnswer(answer);
  }

  const [className, setClassName] = useState("");
  const [WelcomeScreen, setWelcomeScreen] = useState(false)
  const [progressIndex, setProgressIndex] = useState(1);

  const rightAnswer = quiz.questions[questionIndex].correctAnswer;


  const checkAnswer = playerAnswer => {
    playerAnswer === rightAnswer ? raiseIndex() : resetIndex()
  }


  function raiseIndex() {

    setProgressIndex(progressIndex + 1)
    console.log("progressIndex: " + progressIndex)
    setQuestionIndex(arr[progressIndex - 1]);

    setQuestionSelected(false);
    setClassName("");

    if (Changer(progressIndex) === 0)
      winner()
  }


  function winner() {
    setEnd(true)
    PopupWinner()
  }


  function resetIndex() {
    setQuestionSelected(false);
    setClassName("");
    setEnd(false)
    setWelcomeScreen(true)

    generator()

    setQuestionIndex(0);
    Changer(0);
    setProgressIndex(1)

  }


  const sameQuestion = sameNumber => {
    setQuestionSelected(false)
    setClassName("")
    setQuestionIndex(sameNumber);
  }


  const secondChoice = answer => {
    answer === "DA" ? checkAnswer(playerAnswer) : sameQuestion(questionIndex)
  }


  const PopupYesno = () => (
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


  const PopupWinner = () => (
    <div className="menu">
      <Popup open={true} position="right center" offsetX="800px" offsetY="1000px">

        {close => (
          <div className="modal">
            <div>Bravo, osvojili ste milijun virtualnih kuna!</div>

            <div className="yesno">
              <a className="close" onClick={close}>

                <button className="odgovor"
                  onClick={() => resetIndex()}>U redu!</button>
              </a>
            </div>
          </div>
        )
        }
      </Popup>
    </div>
  )




  return WelcomeScreen ? (
    <div>


      <Welcome handleGameStart={() => setWelcomeScreen(false)} />

    </div>
  ) : (

      <div className="row">

        <div className="prva">

          {isQuestionSelected ? PopupYesno() : null}
          {isEnd ? PopupWinner() : null}
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