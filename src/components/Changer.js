import React from "react";

export function Changer(props) {
  const x = document.getElementsByClassName("progress");
  let broj = x.length;
  var i;

  broj = broj - props;

  // Tu sam stao, treba kad dođe do kraja zaustaviti igru i proglasiti pobjednika
  for (i = 0; i < x.length; i++) {
    if (i === broj) x[broj].style.backgroundColor = "orange";
    else x[i].style.backgroundColor = "darkblue";
    if (x[i] == 2) alert("Pobijedio si!")
  }



  return <div></div>;
}
