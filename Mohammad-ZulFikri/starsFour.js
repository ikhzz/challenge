/*
 *
 **
 * *
 *  *
 *****
 */

 function showStarsFour(parameter) {
  // your code goes here
  for(let i = 0; i < parameter; i++){
    if(i == parameter -1){
      console.log('*'.repeat(parameter))
    } else if(i < 1){
      console.log('*')
    } else if(i < 2) {
      console.log('*'.repeat(2))
    } else {
      console.log('*' + ' '.repeat(i-1) + '*')
    }
    
  }
}

showStarsFour(15);
