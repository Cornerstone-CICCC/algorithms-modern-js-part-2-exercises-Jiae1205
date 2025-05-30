// Find Exercise
// Instructions: Create an array of at least five numbers. Write code to find the first element that is greater than 10.

const num2 = [5, 4, 6, 2, 15]

const found = num2.find((Element) => {
  return Element >= 10
})

console.log(found)