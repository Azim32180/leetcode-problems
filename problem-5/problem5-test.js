const solution = require("./problem5.js"); // adjust filename if needed

function runTest(testName, numbers, expected, icon = "🧪") {
  const result = solution(numbers);
  const passed =
    Array.isArray(result) &&
    result.length === expected.length &&
    result.every((val, idx) => val === expected[idx]);

  const statusIcon = passed ? "✅" : "❌";

  console.log(`${icon} ${testName}`);
  console.log(`   Input: [${numbers.join(", ")}]`);
  console.log(`   Result: [${result.join(", ")}]`);
  console.log(
    `   Expected: [${expected.join(", ")}] | Passed: ${statusIcon}\n`
  );

  return passed;
}

// 🚀 Run Test Suite
console.log("🚀 === LeetCode: Balanced Number Grouping Test Suite ===\n");

let passedTests = 0;
let totalTests = 0;

// 💡 Test Cases
const tests = [
  {
    name: "Example 1",
    numbers: [5, 2, 8, 3, 6],
    expected: [5, 8, 2, 3, 6],
    icon: "🔢",
  },
  {
    name: "Example 2",
    numbers: [10, 1, 5, 7],
    expected: [10, 5, 7, 1],
    icon: "🎯",
  },
  {
    name: "Single Element",
    numbers: [42],
    expected: [42],
    icon: "1️⃣",
  },
  {
    name: "Two Elements",
    numbers: [7, 3],
    expected: [7, 3],
    icon: "2️⃣",
  },
  {
    name: "Strictly Increasing",
    numbers: [1, 2, 3, 4, 5],
    expected: [1, 3, 5, 2, 4],
    icon: "⬆️",
  },
  {
    name: "Strictly Decreasing",
    numbers: [9, 8, 7, 6, 5],
    expected: [9, 7, 5, 8, 6],
    icon: "⬇️",
  },
  {
    name: "All Duplicates",
    numbers: [4, 4, 4, 4],
    expected: [4, 4, 4, 4],
    icon: "🧍‍♂️🧍‍♂️",
  },
  {
    name: "Mixed Negatives and Positives",
    numbers: [-1, 5, -3, 2, 0],
    expected: [-1, -3, 0, 5, 2],
    icon: "➖➕",
  },
  {
    name: "Larger Array",
    numbers: [3, 1, 4, 1, 5, 9, 2],
    expected: [3, 4, 5, 9, 1, 1, 2],
    icon: "📈",
  },
];

// ✅ Run all tests
tests.forEach((t) => {
  totalTests++;
  if (runTest(t.name, t.numbers, t.expected, t.icon)) passedTests++;
});

// 📊 Summary
console.log("📋 === Test Summary === 📋");
console.log(
  `${
    passedTests === totalTests ? "🏆" : "⚠️"
  } Passed: ${passedTests}/${totalTests} tests`
);

if (passedTests === totalTests) {
  console.log("🎉 All tests passed! Your solution is rock solid!");
} else {
  console.log("🔧 Some tests failed. Keep grinding!");
}
