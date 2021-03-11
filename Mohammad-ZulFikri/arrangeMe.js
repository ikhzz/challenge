let number = 1234;
let name = "mai";

number = number.toString()
let numberLastIndex = number[number.length -1]
number = number.slice(0, -1)
let numberInputIndex = Math.floor(number.length / 2)
let numberFirstSubString = number.substring(0, numberInputIndex) 
let numberLastSubString = number.substring(numberInputIndex, number.length)
number = numberFirstSubString + numberLastIndex + numberLastSubString

name = name.toString()
let nameLastIndex = name[name.length -1]
name = name.slice(0, -1)
let nameInputIndex = Math.floor(name.length / 2)
let nameFirstSubString = name.substring(0, nameInputIndex) 
let nameLastSubString = name.substring(nameInputIndex, name.length)
name = nameFirstSubString + nameLastIndex + nameLastSubString

// Atur supaya mereka menjadi

console.log(number); // Hasilnya adalah 1423
console.log(name); // Hasilnya "mia"

/*
 * Hint
 * Pertama adalah jadikan mereka array
 * Lalu kalian harus me-loop-ing array tersebut dan ambil index pertama dan index terakhir lalu masukkan ke variable baru (berupa string)
 * Setelah di masukkan ke variable, tentunya kita harus menghapus karakter yang sudah terpakai bukan ?
 * Ada masalah ketika lengthnya ganjil ? tenang kalian bisa gunakan conditional disini
 * Selamat berjuang!
 */


