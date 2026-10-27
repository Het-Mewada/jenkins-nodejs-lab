const { add } = require("../sum");

test("adds two positive numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("adds a negative number", () => {
  expect(add(5, -2)).toBe(3);
});

test("adds zero", () => {
  expect(add(7, 0)).toBe(7);
});
