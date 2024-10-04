const arr = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

arr.forEach((element, index, array) => {
  if (element % 3 === 0) {
    console.log(element);
  }
});

const result = arr.map((el) => el - arr.length);
console.log(result);

const filteredResult = arr.filter((el, index) => {
  return index > 0 && el > arr[index - 1];
});
console.log(filteredResult);

const foundElement = arr.find((element, index) => element === index);
console.log(foundElement);

const sortElement = arr.sort((a, b) => a - b);
console.log(sortElement);

const summAllNumbers = arr.reduce((result, price, index, array) => {
  result = result + price;
  return result;
});
console.log(summAllNumbers);

const testingSome = arr.some((element) => element > 90);
console.log(testingSome);

const testingEvery = arr.every((element) => element >= 10 && element < 100);
console.log(testingEvery);
