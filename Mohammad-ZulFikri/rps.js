// Rock, Paper, and Scissors

/*
Di berikan sebuah function yang menerima dua parameter, yakni inputan dari player dan inputan dari komputer,
function akan mereturn player menang atau computer yang menang.

1. Pertama pikirkan dulu, jika scissor dan paper maka yang menang siapa
2. Lalu buat kondisi jika player scissor maka buatlah kondisi lagi di dalamnya yang akan membandingkan inputan computer dan player
    a. jika komputer menang maka output komputer menang
    b. jika player menang maka output player menang
    c. jika seri maka output seri
3. Lakukan lagi untuk inputan player yang berupa rock atau paper
4. Masukkan output ke variable result dan tampilkan
.
*/

function rps(player, computer) {
  //let result;
  if(player == computer){
    return "Draw";
  } else {
    if(player == 'scissor' && computer == 'paper' || 
    player == 'rock' && computer == 'scissor' || 
    player == 'paper' && computer == 'rock'){

      return 'Player Win';
    } else if(computer == 'scissor' && player == 'paper' || 
    computer == 'rock' && player == 'scissor' || 
    player == 'paper' && computer == 'rock'){

      return 'Computer Win';
    } else {
      return 'Wrong Input';
    }
  }
  
}

console.log(rps("scissor", "rock")); // Computer Win
console.log(rps("rock", "scissor")); // Player Win
console.log(rps("paper", "paper")); // Draw
