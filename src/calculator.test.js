const { Calculator } = require("./calculator")

describe("Calculator basic operations", () => {
  it("sum between 3, 2, 1 and 2 should be 8", () => {
    expect(Calculator.sum(3, 2, 1, 2)).toBe(8)
  })

  it("subtract between 10, 5, 2 and 3 should be 0", () => {
    expect(Calculator.subtract(10, 5, 2, 3)).toBe(0)
  })

  it("multiply between 10, 5, and 2 should be 100", () => {
    expect(Calculator.multiply(10, 5, 2)).toBe(100)
  })
})
