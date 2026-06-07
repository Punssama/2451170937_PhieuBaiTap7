function classicFizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = "";

    if (i % 3 === 0) {
      output += "Fizz";
    }

    if (i % 5 === 0) {
      output += "Buzz";
    }

    console.log(output || i);
    console.log(i);
  }
}

function customFizzBuzz(n, rules) {
  for (let i = 1; i <= n; i++) {
    let output = "";

    for (let j = 0; j < rules.length; j++) {
      const rule = rules[j];
      if (i % rule.divisor === 0) {
        output += rule.word;
      }
    }

    console.log(output || i);
  }
}

console.log("=== Classic FizzBuzz 1-100 ===");
classicFizzBuzz();

console.log("\n=== Custom FizzBuzz 1-30 ===");
customFizzBuzz(30, [
  { divisor: 3, word: "Fizz" },
  { divisor: 5, word: "Buzz" },
  { divisor: 7, word: "Jazz" },
]);

if (typeof module !== "undefined") {
  module.exports = { classicFizzBuzz, customFizzBuzz };
}
