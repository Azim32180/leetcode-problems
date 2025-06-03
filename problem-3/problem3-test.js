const solution = require("./problem3.js");

function runTest(testName, input, expected, icon) {
  const actual = solution(input);
  const passed = actual === expected;
  const statusIcon = passed ? "✅" : "❌";

  console.log(`${icon} ${testName}`);
  console.log(`   Input: [${input.join(", ")}]`);
  console.log(`   Expected: "${expected}" | Actual: "${actual}" ${statusIcon}`);

  // Show the calculation visually
  const evenSum = input
    .filter((_, i) => i % 2 === 0)
    .reduce((sum, val) => sum + val, 0);
  const oddSum = input
    .filter((_, i) => i % 2 !== 0)
    .reduce((sum, val) => sum + val, 0);

  console.log(
    `   📊 Even indices (0,2,4...): ${evenSum} vs Odd indices (1,3,5...): ${oddSum}`
  );
  console.log();

  return passed;
}

// Test Cases
console.log("🚀 === LeetCode Test Suite === 🚀");
console.log();

let passedTests = 0;
let totalTests = 0;

// Test Case 1: Even indices sum is greater
totalTests++;
if (runTest("Even Indices Win", [4, 1, 2, 3], "even", "🔢")) passedTests++;

// Test Case 2: Odd indices sum is greater
totalTests++;
if (runTest("Odd Indices Win", [1, 5, 2, 7], "odd", "🎯")) passedTests++;

// Test Case 3: Equal sums
totalTests++;
if (runTest("Perfect Balance", [5, 1, 1, 5], "equal", "⚖️")) passedTests++;

// Test Case 4: Single element (only even index)
totalTests++;
if (runTest("Solo Element", [7], "even", "🎪")) passedTests++;

// Test Case 5: Two elements
totalTests++;
if (runTest("Dynamic Duo", [3, 8], "odd", "👥")) passedTests++;

// Test Case 6: Negative numbers
totalTests++;
if (runTest("Negative Territory", [-2, 5, 3, -1], "odd", "➖")) passedTests++;

// Test Case 7: All zeros
totalTests++;
if (runTest("Zero Hero", [0, 0, 0, 0], "equal", "🔄")) passedTests++;

// Test Case 8: Larger array
totalTests++;
if (runTest("Big Array Energy", [1, 2, 3, 4, 5, 6], "odd", "📈")) passedTests++;

// Test Case 9: Mixed positive/negative with equal sums
totalTests++;
if (runTest("Chaos Balance", [3, -1, -1, 3], "equal", "🌪️")) passedTests++;

// Test Case 10: Large numbers
totalTests++;
if (runTest("Big Numbers", [100, 200, 50, 150], "odd", "💰")) passedTests++;

// Summary
console.log("📋 === Test Summary === 📋");
console.log(
  `${
    passedTests === totalTests ? "🎉" : "⚠️"
  } Passed: ${passedTests}/${totalTests} tests`
);

if (passedTests === totalTests) {
  console.log("🏆 All tests passed! Your solution is rock solid! 🏆");
} else {
  console.log("🔧 Some tests failed. Time to debug! 🔧");
}
