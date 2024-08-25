const defaultContext = {
  name: "",
  cases: [],
  beforeAll: [],
  afterAll: [],
  beforeEach: [],
  afterEach: [],
};

const currentContext = { ...defaultContext };

const beforeAll = (cb) => {
  currentContext.beforeAll.push(cb);
};
const beforeEach = (cb) => {
  currentContext.beforeEach.push(cb);
};
const afterEach = (cb) => {
  currentContext.afterEach.push(cb);
};
const afterAll = (cb) => {
  currentContext.afterAll.push(cb);
};

export { beforeAll, beforeEach, afterEach, afterAll };
