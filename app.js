const userscore = 0;
const computerscore = 0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector("score-board");
const result_div = document.querySelector("result");
const bua_div = document.getElementById("b");
const keo_div = document.getElementById("k");
const bao_div = document.getElementById("g");

bua_div.addEventListener('click', function() {
  game(b);
  console.log("hey you clicked on Bua");
})

keo_div.addEventListener('click', function() {
  game(k);
  console.log("hey you clicked on Keo");
})

bao_div.addEventListener('click', function() {
  bao(g);
  console.log("hey you clicked on Bao");
})
