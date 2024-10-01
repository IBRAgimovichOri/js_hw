// function combineArraysAsNumbers(...array) {
//   return array;
// }
// let result = combineArraysAsNumbers(1,2,4,5,6,7,8,9,9,9,9);
// console.log(result);

// function toCustomCase(sentence) {
//   return sentence
//     .split(" ") // Разделяем предложение на массив слов
//     .map((word, index) => {
//       if (index === 0) {
//         // Первое слово с маленькой буквы
//         return word.charAt(0).toLowerCase() + word.slice(1).toLowerCase();
//       } else {
//         // Остальные слова с заглавной буквы
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//       }
//     })
//     .join("_"); // Соединяем слова с подчеркиваниями
// }

// // Пример использования
// let sentence = "преобразуй это предложение";
// let result = toCustomCase(sentence);
// console.log(result); // преобразуй_Это_Предложение
