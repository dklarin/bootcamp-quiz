import React from "react";
import { statement } from "@babel/template";
import logo from "../../components/logo.png";
import { Changer } from "../../components/Changer";

/***
 * @description
 * Presents the question with a list of possible answers.
 * The props:
 * @prop {string} question
 * contains the question object to present
 * @prop {string} playerAnswer
 * contains the answer selected by the player
 * @prop {function} onAnswerSelected
 * contains function that should be called when the player selects the anaswer. Selected answer
 * should be passed as function argument
 */
export function StatusProgress(props) {
  return (
    <div className="App">
      <div id="status">
        <div className="Progress">1.000.000 Kn</div>
        <div className="Progress">500.000 Kn</div>
        <div className="Progress">250.000 Kn</div>
        <div className="Progress">125.000 Kn</div>
        <div className="Progress">64.000 Kn</div>
        <div className="Progress">32.000 Kn</div>
        <div className="Progress">16.000 Kn</div>
        <div className="Progress">8.000 Kn</div>
        <div className="Progress">4.000 Kn</div>
        <div className="Progress">2.000 Kn</div>
        <div className="Progress">1.000 Kn</div>
        <div className="Progress">500 Kn</div>
        <div className="Progress">300 Kn</div>
        <div className="Progress">200 Kn</div>
        <div className="Progress">100 Kn</div>
      </div>
    </div>
  );
}
