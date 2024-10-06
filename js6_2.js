const words = [
  "umbrella",
  "apple",
  "ocean",
  "independent",
  "education",
  "elephant",
  "island",
  "universe",
  "environment",
  "queue",
];

function countVowels(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let letter of word.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}

const sortedWords = words.sort((a, b) => countVowels(a) - countVowels(b));

console.log(sortedWords);
