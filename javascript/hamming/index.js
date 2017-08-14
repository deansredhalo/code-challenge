// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.

class Hamming {
  static compute(str1, str2) {
    let distance = 0;

    if (str1.length !== str2.length) {
      throw new Error('DNA strands must be of equal length.');
    } else if (str1 !== str2) {
      let i = 0;

      while (i < str1.length) {
        if (str1[i] !== str2[i]) {
          distance++;
        }
        i++;
      }

    }

    return distance;
  }
}

module.exports = Hamming;
