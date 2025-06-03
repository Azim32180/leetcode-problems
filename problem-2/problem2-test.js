function solution(s) {
  const freq = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) {
      return s[i];
    }
  }
  return "_";
}

// Test Cases
function runTests() {
  const testCases = [
    // Basic cases
    { input: "abccba", expected: "_", description: "All characters repeat" },
    {
      input: "abcabc",
      expected: "_",
      description: "All characters repeat equally",
    },
    {
      input: "aabbcc",
      expected: "_",
      description: "All characters appear twice",
    },

    // Single non-repeating character
    {
      input: "abccbad",
      expected: "d",
      description: "Last character is unique",
    },
    {
      input: "xabccba",
      expected: "x",
      description: "First character is unique",
    },
    {
      input: "aabcccbd",
      expected: "d",
      description: "Last character is unique",
    },

    // Multiple non-repeating characters (should return first one)
    {
      input: "abcdef",
      expected: "a",
      description: "All unique - return first",
    },
    {
      input: "aabcdef",
      expected: "b",
      description: "Multiple unique - return first unique",
    },
    {
      input: "abcadef",
      expected: "b",
      description: "Multiple unique chars, first unique is 'b'",
    },

    // Edge cases
    { input: "", expected: "_", description: "Empty string" },
    { input: "a", expected: "a", description: "Single character" },
    { input: "aa", expected: "_", description: "Two identical characters" },
    { input: "ab", expected: "a", description: "Two different characters" },

    // Special characters and numbers
    { input: "112233", expected: "_", description: "Numbers - all repeat" },
    { input: "1122334", expected: "4", description: "Numbers - one unique" },
    { input: "!@#!@#$", expected: "$", description: "Special characters" },
    {
      input: "a!a@a#",
      expected: "!",
      description: "Mixed alphanumeric and special",
    },

    // Case sensitivity
    {
      input: "AaBbCc",
      expected: "A",
      description: "Case sensitive - all unique",
    },
    {
      input: "AaBbCcA",
      expected: "a",
      description: "Case sensitive - 'A' repeats",
    },

    // Longer strings
    {
      input: "programming",
      expected: "p",
      description: "Longer string with unique char at start",
    },
    {
      input: "aabbccddeeffg",
      expected: "g",
      description: "Longer string with unique char at end",
    },
    {
      input: "hello",
      expected: "h",
      description: "'hello' - 'h' is first unique",
    },
    {
      input: "aabbcc",
      expected: "_",
      description: "No unique characters in longer string",
    },
  ];

  console.log("Running tests for solution()...\n");

  let passed = 0;
  let failed = 0;

  testCases.forEach((test, index) => {
    const result = solution(test.input);
    const success = result === test.expected;

    console.log(`Test ${index + 1}: ${test.description}`);
    console.log(`  Input: "${test.input}"`);
    console.log(`  Expected: "${test.expected}"`);
    console.log(`  Got: "${result}"`);
    console.log(`  Result: ${success ? "✅ PASS" : "❌ FAIL"}`);
    console.log("");

    if (success) {
      passed++;
    } else {
      failed++;
    }
  });

  console.log(`\nTest Summary:`);
  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`Total: ${testCases.length}`);

  return { passed, failed, total: testCases.length };
}

// Run the tests
runTests();

// Alternative test runner using a simple assertion function
function assert(condition, message) {
  if (!condition) {
    throw new Error(`Assertion failed: ${message}`);
  }
  console.log(`✅ ${message}`);
}

function runSimpleTests() {
  console.log("\n--- Running Simple Assertion Tests ---");

  try {
    assert(
      solution("abccba") === "_",
      "All repeating characters should return '_'"
    );
    assert(
      solution("abccbad") === "d",
      "Should return first non-repeating character"
    );
    assert(solution("") === "_", "Empty string should return '_'");
    assert(
      solution("a") === "a",
      "Single character should return that character"
    );
    assert(
      solution("abcdef") === "a",
      "All unique should return first character"
    );
    assert(solution("programming") === "p", "Complex string test");

    console.log("🎉 All simple tests passed!");
  } catch (error) {
    console.error("❌", error.message);
  }
}
