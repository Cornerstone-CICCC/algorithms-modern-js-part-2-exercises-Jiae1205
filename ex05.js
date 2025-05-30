// Some Exercise
// Instructions: Create an array of at least five numbers. Write code to check if some of the numbers are even.

const num5 = [12, 23, 34, 45, 56]

const even = (number) => {
  return number % 2 === 0
}

console.log(num5.some(even))