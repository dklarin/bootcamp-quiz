import React from "react";

export function Jokers(props) {
  const { joker } = props;

  return (
    <div className="jokers">
      <button className="odgovor" onClick={() => joker()}>
        50 - 50
      </button>
    </div>
  );
}
