import React, { useState } from "react";
import "./App.css";
import { Welcome } from "./features/welcome";
import { Quiz } from "./features/Quiz";
import { Random } from "../src/components/Random"

/**
 * @abstract
 * The application root component.
 * @description
 * This is top component where the render loop starts.
 */
export default function App() {
  /**
   * Array destructuring
   * Create the state variable that will track the "in progress" flag.
   * If the value of the state variable is true, the game has started. Initial value is false.
   *
   * First element of the useState result is the value of the state variable
   * Second element of the useState result is the function that will change the value if called.
   * */
  const [isGameInProgress, setGameInProgress] = useState(false);

  var setArrb = []

  function rand() {
    setArrb = Random()
    return setArrb
  }

  /**
   * conditional rendering example
   * if the isGameInProgress is true  we return the Quiz component.
   * if the isGameInProgress is false we return the Welcome component
   */

  return isGameInProgress ? (
    <Quiz danijel={rand()} />
  ) : (
      <Welcome handleGameStart={() => setGameInProgress(true)} />
    );
}
