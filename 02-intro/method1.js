const num = [1, 2, 3, 4, 5, 6, 7, 10, 22]

let sum = num.some((x) => {
    return x < 8
})

console.log(sum);


console.log(num.reverse());


const numIterate = num.values()

for (let value of numIterate) {
  console.log("value", value);
}


let find = num.find((value) => value < 8)

console.log(find);


const index = num.findIndex((value) => Number > 5)

console.log(index);



console.log(
    "checking every elements that num greater than 5 is available :",
    num.every((value) => value>5)
);