import React from "react";

export function Changer(props) {
  const x = document.getElementsByClassName("Progress");
  let broj = x.length;
  var i;

  funksn();
  function funksn() {
    var i;
    /* const y = document.getElementsByTagName("button");
    alert(y);
    y.style.backgroundColor = "darkblue";
  }
  /* for (i = 0; i < y.length; i++) {
      y[i].style.backgroundColor = "darkblue";
    }
  }
  /*changeColor();
  function changeColor() {
    Array.from(document.querySelectorAll("button-answer-selected")).map(
      function(button) {
        button.style.clas = "darkblue";
      }
    );*/
  }
  broj = broj - props;

  for (i = 0; i < x.length; i++) {
    if (i === broj) x[broj].style.backgroundColor = "orange";
    else x[i].style.backgroundColor = "darkblue";
  }

  return <div></div>;
}
