// TASK 1 check effectiveness
let numbers = [2, 1, 0, 5, 6, 0];
// expected result : [2, 1, 5, 6, 0, 0]

let numbers2 = [2, 1, 0, 5, 9, 0, 6, 0];
// expected result : [2, 1,  5, 9, 6, 0, 0, 0]

// =============================Code Sebelum========================
// function sortArrayZeroToEnd(arr) {
//   const noZeroData = arr.filter((item) => {
//     if (item !== 0) {
//       return true;
//     }
//   });
//   const onlyZeroData = arr.filter((item) => {
//     if (item === 0) {
//       return true;
//     }
//   });
//   return noZeroData.concat(onlyZeroData);
// }
// =============================Code Sebelum========================

function sortArrayZeroToEnd(arr) {
  // karena menggunakan function bawaan filter JS , langsung saja menggunakan kondisi yang mereturn hasil kedalam variabel sesuai dengan kondisi zero dan onlyZero.

  let zero = arr.filter((zeroData) => zeroData !== 0); //hasil yang bukan 0
  let onlyZero = arr.filter((onlyZeroData) => onlyZeroData === 0); //hasil yang mereturn hanya 0 saja.

  //kedua hasil dari variabel tersebut langsung ditambah dengan metode spread array
  return [...zero, ...onlyZero]; // menggunakan spread array agar lebih minimalis code
}

console.log("check :", sortArrayZeroToEnd(numbers)); // [2, 1, 5, 6, 0, 0]
console.log("check :", sortArrayZeroToEnd(numbers2)); // [2, 1,  5, 9, 6, 0, 0, 0]

// TASK 2
/*let a = 200
let b = 400
a -> b, b -> a (ini di swap)
dibuat pseudocode / flowchart */
// pseudocode code ya
/* [0] Init a dan b */
let a = 200;
let b = 400;
/* [1] masukan data/variabel kedalam array  */
/* [2] lalu menggunakan destructuring assignment array   */

// [1]     [2]
[a, b] = [b, a];

/* [3] lalu keluarkan hasil dari assignment ke dalam console.log untuk mengetahui output ya   */
console.log(`Check a:${a} , Check b:${b}`);

// ============================================================

// 3. buatlah bendera programmer menggunakan looping
/*
P = = = = = = = = P
= R = = = = = = R =
= = O = = = = O = =
= = = G = = G = = =
= = = = R R = = = =
= = = = A A = = = =
= = = M = = M = = =
= = M = = = = M = =
= E = = = = = = E =
R = = = = = = = = R
*/
