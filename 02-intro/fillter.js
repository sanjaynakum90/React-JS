const num = [2, 7, 6, 9, 10, 13, 15, 16, 23, 20]

const even = num.filter((num) => num % 2 != 0);

console.log(even);

const personData = [
    {
        name: "sanjay",
        id: 1,
        age: 24
    },
    {
        name: "amit",
        id: 2,
        age: 22
    },
    {
        name: "jay",
        id: 3,
        age: 21
    },
    {
        name: "krushnal",
        id: 4,
        age: 23
    },
];

const eligiblePerson = personData.filter((person) => person.age > 18);

console.log(eligiblePerson);