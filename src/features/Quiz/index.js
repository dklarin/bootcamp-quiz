import React, { useState } from "react";
import { quiz } from "../../api/data";
import { QuestionPresenter } from "../QuestionPresenter";
import { StatusProgress } from "../StatusProgress";
import { Changer } from "../../components/Changer";
import { Welcome } from "../../features/welcome";
import Popup from "reactjs-popup";
import { Random } from "../../components/Random";
import { Jokers } from "../../features/Jokers";

/***
 * @description
 * This is our root quiz component. Here we mange the game state (current question, selected answer...)
 * Quiz component should be visible when the game was started by the player.
 */
export function Quiz(props) {
  var { danijel } = props;
  console.log("Početni niz: " + danijel);

  /**create a state variable for tracking the selected answer
   * and desturcture from the useState result array  */
  const [playerAnswer, setPlayerAnswer] = useState("");

  const [isGeneratorSelected, setGeneratorSelected] = useState(false);

  var [arr, setArr] = useState(danijel);
  console.log("arr: " + arr);

  /***
   * take the current question from the quiz object
   */
  const [questionIndex, setQuestionIndex] = useState(arr[0]);

  /**create a state variable for tracking the current question index and
   * destructure from the useState result array
   */

  const currentQuestion = quiz.questions[questionIndex];

  const [isQuestionSelected, setQuestionSelected] = useState(false);
  const [isEnd, setEnd] = useState(false);

  const [className, setClassName] = useState("");
  const [WelcomeScreen, setWelcomeScreen] = useState(false);
  const [progressIndex, setProgressIndex] = useState(1);

  var filtered = [];
  var setArrb = [];
  const newArray = () => {
    setArrb = Random();

    filtered = setArrb.filter(function(value, index, arr) {
      return value !== arr[0];
    });
    setArr(filtered);

    setGeneratorSelected(false);
  };

  /**This is the function that should be called when the player select the answer */
  const onAnswerSelected = answer => {
    setClassName("button-answer-selected");
    setQuestionSelected(true);
    setPlayerAnswer(answer);
  };

  const checkAnswer = playerAnswer => {
    playerAnswer === currentQuestion.correctAnswer
      ? raiseIndex()
      : resetIndex();
  };

  function raiseIndex() {
    setProgressIndex(progressIndex + 1);
    setQuestionIndex(arr[progressIndex]);

    setQuestionSelected(false);
    setClassName("");

    if (Changer(progressIndex) === 0) winner();

    setGeneratorSelected(false);
  }

  function winner() {
    setEnd(true);
    PopupWinner();
  }

  function resetIndex() {
    setQuestionSelected(false);
    setClassName("");
    setEnd(false);
    setGeneratorSelected(true);
    setQuestionIndex(arr[0]);
    Changer(0);
    setProgressIndex(1);
    setWelcomeScreen(true);
  }

  const sameQuestion = sameNumber => {
    setQuestionSelected(false);
    setClassName("");
    setQuestionIndex(sameNumber);
  };

  const secondChoice = answer => {
    answer === "DA" ? checkAnswer(playerAnswer) : sameQuestion(questionIndex);
  };

  function joker() {
    console.log("joker quiz")
  }

  const PopupYesno = () => (
    <div className="menu">
      <Popup
        open={true}
        position="right center"
        offsetX="800px"
        offsetY="1000px"
      >
        {close => (
          <div className="modal">
            <div>Da li je to vaš konačan odgovor?</div>

            <div className="yesno">
              <a className="close" onClick={close}>
                <button className="odgovor" onClick={() => secondChoice("DA")}>
                  DA
                </button>
              </a>

              <a className="close" onClick={close}>
                <button className="odgovor" onClick={() => secondChoice("NE")}>
                  NE
                </button>
              </a>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );

  const PopupWinner = () => (
    <div className="menu">
      <Popup
        open={true}
        position="right center"
        offsetX="800px"
        offsetY="1000px"
      >
        {close => (
          <div className="modal">
            <div>Bravo, osvojili ste milijun virtualnih kuna!</div>

            <div className="yesno">
              <a className="close" onClick={close}>
                <button className="odgovor" onClick={() => resetIndex()}>
                  U redu!
                </button>
              </a>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );

  return WelcomeScreen ? (
    <div>
      <Welcome handleGameStart={() => setWelcomeScreen(false)} />
    </div>
  ) : (
    <div className="row">
      <div className="prva">
        {isGeneratorSelected ? newArray() : null}
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
        <Jokers joker={joker}/>
      </div>

      <div className="treca">
        <StatusProgress />
      </div>
      <div className="cetvrta" />
    </div>
  );
}
