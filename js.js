let move;
let wone = 0;
let lost = 0;
let tie = 0;
function compMove() {
  const computerMove = Math.random()
    if ( computerMove > 0 && computerMove < 1 / 3){
      move = "rock";
    } 
    else if ( computerMove > 1 / 3 && computerMove < 2 / 3) {
      move = "paper";
    } 
    else if (computerMove > 2 / 3 && computerMove < 1) {
      move = "scisser";
    }    

}
function playGame(playerMove) {
  let result= ''
  if ( playerMove === "rock") {
    if (move === "rock"){
      result = "Tie"
      tie += 1;
      document.getElementById("result").innerHTML = `Result : ${result}`
    }
    else if (move === "paper"){
      result = "You lost"
      lost += 1;
      document.getElementById("result").innerHTML = `Result : ${result}`
    }
    else if (move === "scisser"){
      result = "You wone"
      wone += 1;
      document.getElementById("result").innerHTML = `Result : ${result}`
    }
  } 
  else if (playerMove === "paper"){
    if (move === "rock"){
      result = "You wone"
      wone += 1;
      document.getElementById("result").innerHTML = `Result : ${result}`
    }
    else if (move === "paper"){
      result = "Tie"
      tie += 1;
      document.getElementById("result").innerHTML = `Result : ${result}`
    }
    else if (move === "scisser"){
      result = "You lost"
      lost += 1;
      document.getElementById("result").innerHTML = `Result : ${result}`
    }
  }
  else if (playerMove === "scisser"){
    if (move === "rock"){
      result = "You lost"
      lost += 1;
      document.getElementById("result").innerHTML = `Result : ${result}`
    }
    else if (move === "paper"){
      result = "You wone"
      wone += 1;
      document.getElementById("result").innerHTML = `Result : ${result}`
    }
    else if (move === "scisser"){
      result = "Tie"
      tie += 1;
      document.getElementById("result").innerHTML = `Result : ${result}`
    }
  }
  document.getElementById("wone").innerHTML = `Wines = ${wone}` 
  document.getElementById("lose").innerHTML = `Lose = ${lost}` 
  document.getElementById("tie").innerHTML = `Tie = ${tie}` 
}

function rst(){
  document.getElementById("wone").innerHTML = `Wines = ${wone = 0}` 
  document.getElementById("lose").innerHTML = `Lose = ${lost = 0}` 
  document.getElementById("tie").innerHTML = `Tie = ${tie = 0}` 
}
