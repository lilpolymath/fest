const validate = (actual) => {
  if (actual === undefined || actual === null) {
    throw new Error("Validation requires an actual value to be provided.");
  }

  return {
    isEqual: (expected) => {
      if (JSON.stringify(actual) === JSON.stringify(expected)) {
        return {
          pass: true,
          message: `Expected ${actual} to be ${expected}`,
        };
      } else {
        return {
          pass: false,
          message: `Expected ${actual} to be ${expected}, but it was not.`,
        };
      }
    },
    isNotEqual: (expected) => {
      if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        return {
          pass: true,
          message: `Expected ${actual} to not be ${expected}`,
        };
      } else {
        return {
          pass: false,
          message: `Expected ${actual} to not be ${expected}, but it was.`,
        };
      }
    },
    isTruthy: () => {
      if (actual) {
        return {
          pass: true,
          message: `Expected ${actual} to be truthy`,
        };
      } else {
        return {
          pass: false,
          message: `Expected ${actual} to be truthy, but it was falsy.`,
        };
      }
    },
    isFalsy: () => {
      if (!actual) {
        return {
          pass: true,
          message: `Expected ${actual} to be falsy`,
        };
      } else {
        return {
          pass: false,
          message: `Expected ${actual} to be falsy, but it was truthy.`,
        };
      }
    },
  };
};

export default validate;
