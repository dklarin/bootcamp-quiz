import React from "react";

export function Jokers(props) {

const nesto = () => {
    console.log("Joker")
}

  return (
    <div className="jokers">
      <button className="odgovor" onClick={() => nesto()}>
        50 - 50
      </button>
    </div>
  );
}
