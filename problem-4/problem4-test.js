const twoSum = require("./problem4.js");

function runTest(testName, nums, target, expectedIndices, icon = "🧪") {
  const result = twoSum(nums, target);
  const passed =
    Array.isArray(result) &&
    result.length === 2 &&
    nums[result[0]] + nums[result[1]] === target;

  const statusIcon = passed ? "✅" : "❌";

  console.log(`${icon} ${testName}`);
  console.log(`   Input: nums = [${nums.join(", ")}], target = ${target}`);

  if (result) {
    console.log(
      `   Result Indices: ${result}, Values: [${nums[result[0]]}, ${
        nums[result[1]]
      }], Sum: ${nums[result[0]] + nums[result[1]]}`
    );
  } else {
    console.log(`   Result: ${result}`);
  }

  console.log(
    `   Expected indices: ${expectedIndices} | Passed: ${statusIcon}\n`
  );

  return passed;
}

// 🚀 Run Test Suite
console.log("🚀 === LeetCode: Two Sum Test Suite ===\n");

let passedTests = 0;
let totalTests = 0;

// 💡 Test Cases
const tests = [
  {
    name: "Basic Pair",
    nums: [2, 7, 11, 15],
    target: 9,
    expected: [0, 1],
    icon: "🔢",
  },
  {
    name: "Unordered Match",
    nums: [3, 2, 4],
    target: 6,
    expected: [1, 2],
    icon: "🎯",
  },
  {
    name: "Duplicate Elements",
    nums: [3, 3],
    target: 6,
    expected: [0, 1],
    icon: "🧍‍♂️🧍‍♂️",
  },
  {
    name: "Negatives Work Too",
    nums: [-3, 4, 3, 90],
    target: 0,
    expected: [0, 2],
    icon: "➖",
  },
  {
    name: "Zero Sum",
    nums: [0, 4, 3, 0],
    target: 0,
    expected: [0, 3],
    icon: "🅾️",
  },
  {
    name: "Repeated Pairs",
    nums: [1, 5, 1, 5],
    target: 10,
    expected: [1, 3],
    icon: "♻️",
  },
  {
    name: "Start and End",
    nums: [1, 2, 3, 4, 5],
    target: 6,
    expected: [1, 3],
    icon: "↔️",
  },
  {
    name: "Reversed Array",
    nums: [5, 4, 3, 2, 1],
    target: 6,
    expected: [0, 4],
    icon: "🔄",
  },
  {
    name: "Large Input",
    nums: (() => {
      const arr = Array.from({ length: 100000 }, (_, i) => i);
      arr[99998] = 2;
      arr[99999] = 8;
      return arr;
    })(),
    target: 10,
    expected: [99998, 99999],
    icon: "📈",
  },
];

// ✅ Run all tests
tests.forEach((t) => {
  totalTests++;
  if (runTest(t.name, t.nums, t.target, t.expected, t.icon)) passedTests++;
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
