const solution = require("./problem1.js");

function runTests() {
  const testCases = [
    { input: 521, expected: -4 }, // even: 2, odd: 5+1=6, result: 2-6=-4
    { input: 431, expected: 0 }, // even: 4, odd: 3+1=4, result: 4-4=0
    { input: 1234, expected: 2 }, // even: 2+4=6, odd: 1+3=4, result: 6-4=2
    { input: 0, expected: 0 }, // even: 0, odd: 0, result: 0-0=0
    { input: 246, expected: 12 }, // even: 2+4+6=12, odd: 0, result: 12-0=12
    { input: 135, expected: -9 }, // even: 0, odd: 1+3+5=9, result: 0-9=-9
    { input: 12, expected: 1 }, // even: 2, odd: 1, result: 2-1=1
    { input: 987654321, expected: -5 }, // even: 8+6+4+2=20, odd: 9+7+5+3+1=25, result: 20-25=-5
    { input: 42, expected: 6 }, // even: 4+2=6, odd: 0, result: 6-0=6
    { input: 13579, expected: -25 }, // even: 0, odd: 1+3+5+7+9=25, result: 0-25=-25
  ];

  console.log("🚀 Running LeetCode Problem 1 Tests...\n");

  let passed = 0;
  let failed = 0;

  testCases.forEach((testCase, index) => {
    const result = solution(testCase.input);
    const isPass = result === testCase.expected;

    if (isPass) {
      console.log(`✅ Test ${index + 1}: PASSED`);
      console.log(`   Input: ${testCase.input}`);
      console.log(`   Expected: ${testCase.expected}, Got: ${result}\n`);
      passed++;
    } else {
      console.log(`❌ Test ${index + 1}: FAILED`);
      console.log(`   Input: ${testCase.input}`);
      console.log(`   Expected: ${testCase.expected}, Got: ${result}`);
      console.log(
        `   🐛 Debug: Check your logic for input ${testCase.input}\n`
      );
      failed++;
    }
  });

  console.log(`📊 Results: ${passed}/${testCases.length} tests passed`);

  if (failed === 0) {
    console.log("🎉 All tests passed! Your solution is correct!");
    console.log("💡 Time to submit to LeetCode!");
  } else {
    console.log(`⚠️  ${failed} test(s) failed. Keep debugging!`);
    console.log("💡 Tip: Add console.log statements to debug your solution");
  }
}

// Run the tests
runTests();
