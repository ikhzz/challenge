/*
 *****
 ****
 ***
 **
 *
 */

 function showStarsFive(parameter) {
  // your code goes here
  for(let i = 0; i < parameter; i++){
    console.log('*'.repeat(parameter -i))
  }
}

showStarsFive(5);