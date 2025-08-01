const numbers = [1, 2, 3, 4, 5];
const secondNumbers = [6, 7, 8, 9];

// Copy các phần tử trong mảng numbes sang 1 mảng mới
// const numberCopies = numbers.slice(); cách cũ
const numberCopies = [...numbers, ...secondNumbers];

// 1, 2, 3, 4, 5 <=> ...numbers
// 6, 7, 8, 9 <=> ...secondNumbers
// [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Nunber copy: ", numberCopies);
