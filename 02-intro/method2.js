const fruits = ["apple", "banana", "strobarry", "kivi"]

console.log(fruits.indexOf("kivi"));


console.log(fruits.includes("orange"));

const num = [1, 2, 3, 4, 5, 6, 7, 10, 22]


console.log(num.sort((a, b) => a - b));

console.log(num.sort((a, b) => b-a));


console.log(
    "check number every number  is greater than 1 or not ?",
    num.every((values) => values > 1)
);

