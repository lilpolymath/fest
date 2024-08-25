const validate = {
  isEqual: (actual, expected) => {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      return {
        pass: true,
        message: `Expected ${actual} to be ${expected}`,
      };
    } else {
      return {
        pass: false,
        message: `Expected ${actual} to be ${expected}`,
      };
    }
  },
  isNotEqual: (actual, expected) => {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
      return {
        pass: true,
        message: `Expected ${actual} to not be ${expected}`,
      };
    } else {
      return {
        pass: false,
        message: `Expected ${actual} to not be ${expected}`,
      };
    }
  },
  isTruthy: (actual) => {
    if (actual) {
      return {
        pass: true,
        message: `Expected ${actual} to be truthy`,
      };
    } else {
      return {
        pass: false,
        message: `Expected ${actual} to be truthy`,
      };
    }
  },
  isFalsy: (actual) => {
    if (!actual) {
      return {
        pass: true,
        message: `Expected ${actual} to be falsy`,
      };
    } else {
      return {
        pass: false,
        message: `Expected ${actual} to be falst`,
      };
    }
  },
};

export default validate;
