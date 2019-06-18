import React from "react";

export function Changer(props) {
  const x = document.getElementsByClassName("progress");
  let broj = x.length;
  var i;

  funksn();
  function funksn() {
    var i;


  }
  broj = broj - props;

  for (i = 0; i < x.length; i++) {
    if (i === broj) x[broj].style.backgroundColor = "orange";
    else x[i].style.backgroundColor = "darkblue";
  }

  return <div></div>;
}
