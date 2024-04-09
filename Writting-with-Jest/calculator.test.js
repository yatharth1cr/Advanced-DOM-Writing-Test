// const calcultor = require("./calculator");

// test("sub 2 - 1 to equal 1", () => {
//   expect(calcultor.sub(2, 1)).toBe(1);
// });

// test("adds 1 + 2 to equal 3", () => {
//   expect(calcultor.sum(1, 2)).toBe(3);
// });

// Destructuring
const { sub, sum } = require("./calculator");

test("sub 2 - 1 to equal 1", () => {
  expect(sub(2, 1)).toBe(1);
});

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
