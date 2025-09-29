const num = [2, 7, 6, 9, 10, 13, 15, 16, 23, 20]

const total = num.reduce((acc, cur) => {
    return acc + cur
})

console.log(total);

const products = [
    {
        name: "fruits",
        price: 100,
        qty: 10,
    },
    {
        name: "veggies",
        price: 300,
        qty: 15,
    },
    {
        name: "grocery",
        price: 500,
        qty: 3,
    },
];

const totalBill = products.reduce((acc, curr) => {
    return acc + curr.price * curr.qty;
}, 0);

console.log(totalBill);