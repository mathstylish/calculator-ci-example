module.exports.Calculator = class {
  static sum(...nums) {
    return nums.reduce((prev, curr) => prev + curr)
  }

  static subtract(...nums) {
    return nums.reduce((prev, curr) => prev - curr)
  }

  static multiply(...nums) {
    return nums.reduce((prev, curr) => prev * curr)
  }
}
