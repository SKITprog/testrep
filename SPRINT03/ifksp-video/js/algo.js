/*
Összegzés algoritmusa:

összeg = 0
CIKLUS AMÍG van még szám, ADDIG
      szám = kövekező elem
      összeg = összeg + szám
CIKLUS VÉGE

*/

let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];
let sum = 0;
for (let i = 0; i < numericArray.length; i++) { sum += numericArray[i] }
console.log("Sum: ", sum);

/*
Számlálás algoritmusa:
db = 0
Összegzés algoritmusa:

összeg = 0
CIKLUS AMÍG van még szám, ADDIG
      szám = kövekező elem
      összeg = összeg + szám
CIKLUS VÉGE
*/
let db = 0;
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 2 == 0) { db++; }
}
console.log("Even numbers: ", db);

