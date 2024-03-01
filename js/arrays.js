// 1. Найти сумму положительных элементов в массиве.

// function positiveSum(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//       sum += array[i];
//     }
//   }
//   return sum;
// }

// const numArray = [1, -2, 3, -4, 5];
// const result = positiveSum(numArray);

// console.log(result);

// 2. Найти количество отрицательных элементов в массиве.

// function negativeCount(array) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
//       count++;
//     }
//   }
//   return count;
// }

// const numArray = [1, -2, 3, -4, 5];
// const result = negativeCount(numArray);
// console.log(result);

// 3. Отфильтровать массив, оставив только уникальные значения.

// const numArray = [1, 2, 3, 4, 3, 2, 1];
// const newArray = [];

// for (let i = 0; i < numArray.length; i++) {
//   if (!newArray.includes(numArray[i])) {
//     newArray.push(numArray[i]);
//   }
// }

// console.log(newArray);

// 4. Найти сумму элементов на четных позициях в массиве (индексы начинаются с 0).

// function evenNumFunction(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i += 2) {
//     sum += array[i];
//   }
//   return sum;
// }

// const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = evenNumFunction(numArray);
// console.log(result);

// 5. Проверить, является ли каждый элемент массива целым числом.

// function checkIfAllIntegers(numArray) {
//   for (let i = 0; i < numArray.length; i++) {
//     if (!Number.isInteger(numArray[i])) {
//       return false;
//     }
//   }
//   return true;
// }

// const numbersArray1 = [1, 2, 3, 4, 5];
// const numbersArray2 = [1, 2, "three", 4, 5];

// console.log(checkIfAllIntegers(numbersArray1));
// console.log(checkIfAllIntegers(numbersArray2));

// 6. Найти индекс первого отрицательного элемента в массиве.

// function negativeIndexFunction(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
//       return i;
//     }
//   }
//   return -1;
// }

// const numArray = [1, 2, -3, 4, -5, 6];
// const index = negativeIndexFunction(numArray);
// console.log(index);

// 7. Создать новый массив, содержащий элементы, преобразованные в верхний регистр (если они строкового типа).

// function uppercaseStringArray(inputArray) {
//   const uppercaseArray = [];
//   for (let i = 0; i < inputArray.length; i++) {
//     if (typeof inputArray[i] === "string") {
//       uppercaseArray.push(inputArray[i].toUpperCase());
//     } else {
//       uppercaseArray.push(inputArray[i]);
//     }
//   }
//   return uppercaseArray;
// }

// const inputArray = [1, "hello", "world", 42, "example"];
// const uppercaseArray = uppercaseStringArray(inputArray);
// console.log(uppercaseArray);

// 8. Проверить, содержит ли массив только уникальные значения (без дубликатов).

// function onlyUnique(inputArray) {
//   for (let i = 0; i < inputArray.length; i++) {
//     if (inputArray.indexOf(inputArray[i]) !== i) {
//       return false;
//     }
//   }
//   return true;
// }
// const inputArray = [1, 2, 3, 4, 5];
// const newArray = onlyUnique(inputArray);

// console.log(newArray);

// 9. Проверить, содержит ли массив хотя бы одно отрицательное значение.

// function negativeNum(numArray) {
//   for (let i = 0; i < numArray.length; i++) {
//     if (numArray[i] < 0) {
//       return true;
//     }
//   }
//   return false;
// }

// const numArray1 = [1, 2, 3, 4, 5];
// const numArray2 = [1, 2, -3, 4, 5];

// console.log(negativeNum(numArray1));
// console.log(negativeNum(numArray2));

// 10. Найти сумму элементов, расположенных до определенного индекса в массиве.

// function sumIndex(array, index) {
//   let sum = 0;
//   for (let i = 0; i <= index && i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }

// const numArray = [1, 2, 3, 4, 5];
// const targetIndex = 2;
// const result = sumIndex(numArray, targetIndex);
// console.log(result);

// 11. Проверить, содержит ли массив только числовые значения.

// function isArrayNumeric(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "number") {
//       return false;
//     }
//   }
//   return true;
// }

// const numArray = [1, 2, 3, 4, 5];
// const isNumeric = isArrayNumeric(numArray);

// if (isNumeric) {
//   console.log("Массив содержит только числовые значения.");
// } else {
//   console.log("Массив содержит нечисловые значения.");
// }

// 12. Создать новый массив, содержащий элементы, удовлетворяющие определенному условию (например, больше 10).
















// 13. Найти индекс последнего элемента в массиве, равного определенному значению.

// function lastIndex(arr, value) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] === value) {
//       return i;
//     }
//   }
//   return -1;
// }

// let newArray = [1, 2, 3, 4, 2, 5];
// let newValue = 2;
// let newIndex = lastIndex(newArray, newValue);
// console.log("Индекс последнего элемента равного ", newValue, ": ", newIndex);

// 14. Проверить, содержит ли массив хотя бы одно положительное значение.

// function positivieValue(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       return true;
//     }
//   }
//   return false;
// }

// let arr1 = [-2, 0, 4, -5, 8];
// let arr2 = [-1, -3, -7, 0];

// console.log(positivieValue(arr1));
// console.log(positivieValue(arr2));

// 15. Преобразовать массив в объект, где индексы массива станут ключами объекта.

// function arrayObj(arr) {
//   let resultObj = {};
//   for (let i = 0; i < arr.length; i++) {
//     resultObj[i] = arr[i];
//   }
//   return resultObj;
// }

// let newArray = ["Nvidia", "MSI", "GIGABITE"];
// let newObject = arrayObj(newArray);

// console.log(newObject);

// 16. Проверить, содержат ли все элементы массива одинаковые значения.

// function allEqual(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[0]) {
//       return false;
//     }
//   }
//   return true;
// }

// let arr1 = [1, 1, 1, 1, 1];
// let arr2 = [1, 2, 1, 1, 1];

// console.log(allEqual(arr1));
// console.log(allEqual(arr2));

// 17. Удалить все элементы массива, кроме тех, которые кратны 3.

// let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = numArray.length - 1; i >= 0; i--) {
//   if (numArray[i] % 3 !== 0) {
//     numArray.splice(i, 1);
//   }
// }
// console.log(numArray);
