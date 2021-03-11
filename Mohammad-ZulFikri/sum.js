

/*
Jumlahkan semua bilangan di dalam array
*/

function sum(array) {
  // code goes here
  let result = 0
  array.forEach(element => {
    for(let i = 0; i < element.length; i++){
      result += element[i]
    }
  });
  return result;
}

const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(sum(numbers)); // 45
