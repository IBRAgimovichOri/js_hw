const minAge = 18;
const maxAge = 60;
let age = 60;

if (typeof age !== "number") {
  console.log("Incorrect data type");
} else if (age < minAge) {
  console.log(
    "You don't have access cause your age is ' + 'age' + ' it's less then"
  );
} else if (maxAge > age >= minAge) {
  console.log("Welcome!");
} else if (age > maxAge) {
  console.log("Keep calm and look Culture channel");
} else {
  console.log("technical work");
}
