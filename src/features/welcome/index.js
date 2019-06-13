import React from "react";

/***
 * @abstract
 * The "Welcome screen" component
 * @description
 * The screen presented when the player starts the app. Contains the button that will start the game when clicked.
 * props:
 * @prop {function} handleGameStart
 * function that should be called when the user click the start button
 */
export function Welcome(props) {
  /***
   * object destructuring
   *
   * Take the value of the props object property named "handleGameStart"  and store in the new
   * const variable with the same name
   */

  const { handleGameStart } = props;

  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={handleGameStart}>Start</button>
    </div>
  );
}
