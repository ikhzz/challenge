let number = 1234;
let name = "mai";

const arrangeMe = (param) => {

  param = param.toString()
  const lastString = param[param.length -1]
  param = param.slice(0, -1)
  const middleIndex = Math.floor(param.length / 2)
  const firstSub = param.substring(0, middleIndex) 
  const lastSub = param.substring(middleIndex, param.length)

  param = firstSub + lastString + lastSub

  return param;
}


// Atur supaya mereka menjadi

console.log(arrangeMe(number)); // Hasilnya adalah 1423
console.log(arrangeMe(name)); // Hasilnya "mia"

/*
 * Hint
 * Pertama adalah jadikan mereka array
 * Lalu kalian harus me-loop-ing array tersebut dan ambil index pertama dan index terakhir lalu masukkan ke variable baru (berupa string)
 * Setelah di masukkan ke variable, tentunya kita harus menghapus karakter yang sudah terpakai bukan ?
 * Ada masalah ketika lengthnya ganjil ? tenang kalian bisa gunakan conditional disini
 * Selamat berjuang!
 */


