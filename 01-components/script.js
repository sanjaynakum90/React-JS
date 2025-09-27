

const numArray = [1, 2, 3, 6, 7, 8, 9, 10];

let numGreaterThan5 = numArray.find((values) => values > 5);

console.log("finding number greater than five in numArray", numGreaterThan5);

// <------------------------------------------------->



let numGreaterThan5index = numArray.findIndex((values) => values > 9);

console.log("index of numGreaterThan5 in numArray is :", numGreaterThan5index);

// <----------------------------------------------------->


const fruits = [
    "apple",
    "banana",
    "cherry",
    "mango",
    "watermelon",
    "grapes",
    "strawberry",
];

// slice()

console.log("fruits array op with slice", fruits.slice(3, 6));


console.log("fruits array before", fruits);

console.log(
    "fruit array op with splice adding one more fruits in second index op : ",
    fruits.splice(2, 0, "orange")
);

console.log("fruits array after", fruits);

let num = [2, 3, 4, 78, 9, 6, 45, 64, 5, 5, 5];

console.log(
    "num greater than 100 is available ?",
    num.some((values) => values > 100)
);


console.log(
    "num greater than 5 is available ?",
    num.some((values) => values > 5)
);

console.log(
    "checking every elements that num greater than 5 is available :",
    num.every((values) => values > 5)
);



console.log(
    "check number every number  is greater than 1 or not ?",
    num.every((values) => values > 1)
);

