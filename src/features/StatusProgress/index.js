import React from "react";
import logo from "../../components/logo.png";

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

  // Not using, for now
  const levels = [
    {
      text: "100 Kn",
      amount: 100,
      isMilestone: true
    },
    {
      text: "200 Kn",
      amount: 200,
      isMilestone: true
    }
  ];


  return (
    <div className="Progress">


      {/*NOT USED {levels.reverse().map(level => (
        <div key={level.amount} div className={getClassName(level.amount)}>
          {level.text}
        </div>
      ))}*/}




      <div className="progress">1.000.000 Kn</div>
      <div className="progress">500.000 Kn</div>
      <div className="progress">250.000 Kn</div>
      <div className="progress">125.000 Kn</div>
      <div className="progress">64.000 Kn</div>
      <div className="progress">32.000 Kn</div>
      <div className="progress">16.000 Kn</div>
      <div className="progress">8.000 Kn</div>
      <div className="progress">4.000 Kn</div>
      <div className="progress">2.000 Kn</div>
      <div className="progress">1.000 Kn</div>
      <div className="progress">500 Kn</div>
      <div className="progress">300 Kn</div>
      <div className="progress">200 Kn</div>
      <div className="progress">100 Kn</div>
    </div>
  );
}
