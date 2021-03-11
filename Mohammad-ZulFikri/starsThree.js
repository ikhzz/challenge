/*
 *****
 *   *
 *   *
 *   *
 *****
 */

 function showStarsThree(parameter) {
  // your code goes here
  for(let i = 0; i < parameter; i++){
    if(i == 0){
      console.log('*'.repeat(parameter))
    } else if(i == parameter -1){
      console.log('*'.repeat(parameter))
    } else {
      console.log('*' + ' '.repeat(parameter -2) + '*')
    }
  }
}

showStarsThree(10);