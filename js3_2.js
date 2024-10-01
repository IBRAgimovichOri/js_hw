let minValue = 1;
let maxValue = 100;

for (let i = minValue; i <= maxValue; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`Число ${i} делится без остатка на 3 и 5`);
  }

  if (i % 3 === 0 && i % 5 === 0) {
    continue;
  }

  if (i % 3 === 0) {
    console.log(`Число ${i} делится без остатка на 3`);
  }

  if (i % 5 === 0) {
    console.log(`Число ${i} делится без остатка на 5`);
  }
}
//ghg
