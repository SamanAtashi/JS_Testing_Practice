const task = require("./Task-1.js");

test("should return string's length ", () => {
  expect(task("saman")).toBe(5);
});

test("should be at least 1 character long", () => {
  expect(()=>{ task("") }).toThrow("You suck");
});
