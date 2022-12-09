const image = document.querySelector("#myImage");
const text = document.querySelector("h2");

let buttonOne = document.querySelector("#one");
let buttonTwo = document.querySelector("#two");


buttonOne.addEventListener("click", johnny);
buttonTwo.addEventListener("click", aidan);

function johnny() {
  image.setAttribute("src", "https://cdn.glitch.com/e3a21960-b94a-48a5-9834-e646c426a488%2Fjohn.jpg?v=1629311550485");
  text.innerHTML = "ОНИ ПОЖЕНЯТСЯ?";
  buttonOne.innerHTML = "ДА, НО НЕ СРАЗУ";
  buttonTwo.innerHTML = "НИКОГДА"
  buttonOne.addEventListener("click", showVideoWedding);
  buttonTwo.addEventListener("click", neverMarried)
}

function showVideoWedding() {
  image.setAttribute("src", "https://cdn.glitch.com/e3a21960-b94a-48a5-9834-e646c426a488%2Fwedding.jpg?v=1629311585150");
  text.innerHTML = "ОНИ ПОЖЕНЯТСЯ И БУДУТ СЧАСТЛИВЫ. НО У НИХ НЕ БУДЕТ ДЕТЕЙ.";
  buttonOne.style= "display: none";
  buttonTwo.style= "display: none";
}

function neverMarried() {
  image.setAttribute("src", "https://cdn.glitch.com/e3a21960-b94a-48a5-9834-e646c426a488%2Falter-new.jpg?v=1629311619781");
  text.innerHTML = "ОН ЕЁ БРОСИТ У АЛТАРЯ.";
  buttonOne.style= "display: none";
  buttonTwo.style= "display: none";
}

function aidan() {
  image.setAttribute("src", "https://cdn.glitch.com/e3a21960-b94a-48a5-9834-e646c426a488%2Fwedding-aidan.jpg?v=1629311640088");
  text.innerHTML = "ОНИ БУДУТ СЧАСТЛИВЫ?";
  buttonOne.innerHTML = "ДА";
  buttonTwo.innerHTML = "НЕТ";
  buttonOne.addEventListener("click", happyAidan);
  buttonTwo.addEventListener("click", unhappyAidan);


}


function happyAidan() {
  image.setAttribute("src", "https://cdn.glitch.com/e3a21960-b94a-48a5-9834-e646c426a488%2Faidan-new-baby.png?v=1629311662748");
  text.innerHTML = "ДА, И У НИХ РОДИТСЯ РЕБЕНОК!";
  buttonOne.style= "display: none";
  buttonTwo.style= "display: none"
}

function unhappyAidan() {
  image.setAttribute("src", "https://cdn.glitch.com/e3a21960-b94a-48a5-9834-e646c426a488%2Floved-you.jpg?v=1629311687619");
  text.innerHTML = "НЕТ, ОНИ РАЗОЙДУТСЯ ИЗ-ЗА ИЗМЕНЫ КЕРРИ.";
  buttonOne.style= "display: none";
  buttonTwo.style= "display: none"
}