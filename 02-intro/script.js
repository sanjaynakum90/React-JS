// spread 

const fruits = ["banana","apple", "kivi", "strobarry"]

const vagitables = ["tometo","coriander", "carrat", "capsicam"]

const total = [...fruits, ...vagitables]

console.log(total);


//Object

const person1 = {
    name : "sanjay",
    age : 24,
    id : 1
}


const person2 = {
    ...person1,
    name1 : "amit",
    age1 : 22,
    id1 : 2
}

console.log(person2);


// const data = {...person1,...person2}

// console.log(data);
