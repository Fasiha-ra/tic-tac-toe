const boxes = document.querySelectorAll(".box");
const winnerBox = document.querySelector(".winner-text");
const startBtn = document.querySelector(".btnn");
const resetBtn = document.querySelector(".reset");

let turnO = true;
const patterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("CLicked");
    if (turnO) {
      box.innerText = "O";
      box.style.backgroundColor = "rgb(197, 189, 179)";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.backgroundColor = "rgb(243, 127, 127)";
      turnO = true;
    }
    box.disabled = true;
    winner();

  })
});
const resetBox = () => {
  turnO = true;
  // location.reload();
  //winnerBox.classList.add("hide"); 
  boxes.forEach((box) => {
    box.innerText = "";
    box.style.backgroundColor = ""; 
    box.disabled = false; 
  });
}
const disableBox = () => {
  for (box of boxes) {
    // box.disabled = true;
  }
}
let winnerText = (win) => {
  winnerBox.innerHTML = ` <i class="crown fa-solid fa-crown"></i>
<p class="sub-heading">Congratulations!</p>
<span>Yahoo! Team ${win} won the match</span><br>
<img class="gif" src="./images/bear.gif" alt="">
<button class="btnn" onclick="location.reload()";>Restart Game</button>`;
  winnerBox.classList.remove("hide");
}
const winner = () => {
  for (let pattern of patterns) {
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;
    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        // winnerText.style.display = "block";
        winnerText(posVal1);
        hideBox();
        disableBox();
        break;
      }
    }
  }

}
let hideBox = () => {
  const boxesContainer = document.querySelector(".main");
  if (boxesContainer) {
    boxesContainer.style.display = "none";
  }

}
resetBtn.addEventListener('click', resetBox);

