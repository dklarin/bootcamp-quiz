export function Changer(props) {

  const x = document.getElementsByClassName("progress");
  let num = x.length
  num = num - props;

  for (let i = 0; i < x.length; i++) {
    i === num ? x[num].style.backgroundColor = "orange" : x[i].style.backgroundColor = "darkblue"
  }

  return num
}
