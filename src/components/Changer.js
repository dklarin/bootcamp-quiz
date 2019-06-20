export function Changer(props) {

  const x = document.getElementsByClassName("progress");
  console.log("props: " + props)

  let broj = x.length

  broj = broj - props;
  console.log("Changer - broj: " + broj)





  for (let i = 0; i < x.length; i++) {
    i === broj ? x[broj].style.backgroundColor = "orange" : x[i].style.backgroundColor = "darkblue"
  }

  return broj
}
