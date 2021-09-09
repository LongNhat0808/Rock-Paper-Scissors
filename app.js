let userscore = 0;
let computerscore = 0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const bua_div = document.getElementById("b");
const keo_div = document.getElementById("k");
const bao_div = document.getElementById("g");
const reset_board_div = document.getElementById('Reset');
function getComputChoice() {
  const Choices = ['b', 'k', 'g'];
  const randomNumber = Math.floor(Math.random() * 3);
  return Choices[randomNumber];
}
function ConvertToWord(letter) {
  if (letter === "b") return "Búa";
  if (letter === "g") return "Bao";
  return "Kéo";
}
function Resetmain(x) {
  if (x === "0") {
    userscore = 0;
    computerscore =0;
    userscore_span.innerHTML =  userscore;
    computerscore_span.innerHTML = computerscore;
  }
    return "1";
}

function win(userChoice, computerchoice) {
  userscore++ ;
  userscore_span.innerHTML =  userscore;
  computerscore_span.innerHTML = computerscore;
  const smalluser = "của em".fontsize(3).sup();
  const smallcomp = "của ngiu e á".fontsize(3).sup();
  result_p.innerHTML = ConvertToWord(userChoice) + smalluser +  " thắng " + ConvertToWord(computerchoice) + smallcomp + ". Nên anh nhường em thắng á !! ";
  const userChoice_div = document.getElementById(userChoice);
  userChoice_div.classList.add('green-glow');
  setTimeout(function() { userChoice_div.classList.remove('green-glow')}, 500);
}
function lose(userChoice, computerchoice) {
  computerscore++ ;
  userscore_span.innerHTML =  userscore;
  computerscore_span.innerHTML = computerscore;
  const smalluser = "của Thảo xinh gái".fontsize(3).sup();
  const smallcomp = "của Nhậtdzaiprovip".fontsize(3).sup();
  result_p.innerHTML = ConvertToWord(userChoice) + smalluser +  " bị đánh bại bởi " + ConvertToWord(computerchoice) + smallcomp + ". Nên là em thắng :v ";
  const userChoice_div = document.getElementById(userChoice);
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}
function draw(userChoice, computerchoice) {
  const smalluser = "của Ninem".fontsize(3).sup();
  const smallcomp = "của Anh".fontsize(3).sup();
  result_p.innerHTML = ConvertToWord(userChoice) + smalluser +  " ngang nhau với " + ConvertToWord(computerchoice) + smallcomp + " á.Nên là ván này anh xin Hòa nha !! ";
  const userChoice_div = document.getElementById(userChoice);
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500);
}
function Talk(userChoice, computerchoice) {
  switch (userscore + computerscore){
    case 174:
    result_p.innerHTML = "Ngày sinh em nè";
    break;
    case 88:
    result_p.innerHTML = "Ngày sinh anh nè";
    break;
    case 11:
    result_p.innerHTML = "Ngày sinh em nè";
  }
}
function game(userChoice) {
  const computerchoice = getComputChoice();
  switch (userChoice + computerchoice) {
    case 'bb':
    case 'kk':
    case 'gg':
    draw(userChoice, computerchoice);
      break;
    case 'bg':
    case 'kb':
    case 'gk':
    lose(userChoice, computerchoice);
      break;
    case 'gb':
    case 'bk':
    case 'kg':
    win(userChoice, computerchoice);
      break;
  }
}

function main() {
  reset_board_div.addEventListener('click', () => Resetmain("0"));

  bua_div.addEventListener('click', () => game("b"));

  keo_div.addEventListener('click', () => game("k"));

  bao_div.addEventListener('click', () => game("g"));
}

main();
