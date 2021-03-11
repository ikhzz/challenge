// ahhh saya tidak mengerti yang ini mas

// // you can write to stdout for debugging purposes, e.g.
// // console.log('this is a debug message');

// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   const stringA = A.toString();
//   let arrayA = [];
//   for (let i = 0; i < stringA.length; i++) {
//     arrayA.push(stringA[i]);
//   }

//   let result = "";
//   if (arrayA.length % 2 === 0) {
//     for (let i = 0; i <= arrayA.length; i++) {
//       result += arrayA[0];
//       result += arrayA[arrayA.length - 1];
//       arrayA.splice(0, 1);
//       arrayA.splice(arrayA.length - 1, 1);
//     }
//   } else {
//     for (let i = 0; i < arrayA.length; i++) {
//       result += arrayA[0];
//       result += arrayA[arrayA.length - 1];
//       arrayA.splice(0, 1);
//       arrayA.splice(arrayA.length - 1, 1);
//     }
//     result += arrayA[0];
//   }
//   return Number(result);
// }

// console.log(solution(12345));
// console.log(solution(123456));

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(S) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   let temp = "";
//   for (let i = 0; i < S.length; i++) {
//     if (S[i] !== " " && S[i] !== "-") {
//       temp += S[i];
//     }
//   }
//   let result = "";
//   for (let i = 0; i < temp.length; i++) {
//     result += temp[i];
//     if (result.length % 3 === 0) {
//       result += "-";
//     }
//   }
//   return result;
// }

// console.log(solution("00-44  48 5555 8361"));
// console.log(solution("0 - 22 1985--324"));
// console.log(solution("555372654"));

// function solution(S) {
//   let indexFormat = 0;
//   let indexSize = 0;
//   for (let i = 0; i < S.length; i++) {
//     if (S[i] === ".") {
//       indexFormat = i;
//     } else if (S[i] === " ") {
//       indexSize = i;
//     }
//   }

//   let format = "";
//   for (let j = indexFormat + 1; j < S.length; j++) {
//     if (S[j] === " ") {
//       break;
//     }
//     format += S[j];
//   }

//   let size = "";
//   for (let k = indexSize + 1; k < S.length; k++) {
//     size += S[k];
//   }

//   let type = "";
//   if (format === "mp3" || format === "aac" || format === "flac") {
//     type = "music";
//   } else if (format === "jpg" || format === "bmp" || format === "gif") {
//     type = "image";
//   } else if (format === "mp4" || format === "avi" || format === "mkv") {
//     type = "video";
//   } else {
//     type = "other";
//   }

//   return type + " " + size;
// }

// console.log(solution("my.song.mp3 100b"));
