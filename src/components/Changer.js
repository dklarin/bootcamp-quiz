export function Changer(props) {

  const x = document.getElementsByClassName("progress");
  let broj = x.length
  broj = broj - props;

  for (let i = 0; i < x.length; i++) {
    i === broj ? x[broj].style.backgroundColor = "orange" : x[i].style.backgroundColor = "darkblue"
  }
  return broj
}
