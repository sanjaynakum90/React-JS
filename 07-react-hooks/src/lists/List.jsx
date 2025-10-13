// import React from "react";

// const List = () => {
//   const fruits = ["apple", "banana", "mango", "cherry", "papaya", "strawberry"];

//   return (
//     <>
//       {fruits.map((fruit, index) => {
//         return <h1 key={index}>{fruit}</h1>;
//       })}
//     </>
//   );
// };

// export default List;

import React from "react";

const List = () => {
  const people = [
    {
      id: 1,
      name: "Alice Johnson",
      age: 28,
      email: "alice.johnson@example.com",
      city: "New York",
    },
    {
      id: 2,
      name: "Brian Smith",
      age: 35,
      email: "brian.smith@example.com",
      city: "Los Angeles",
    },
    {
      id: 3,
      name: "Catherine Lee",
      age: 24,
      email: "catherine.lee@example.com",
      city: "Chicago",
    },
    {
      id: 4,
      name: "David Kim",
      age: 31,
      email: "david.kim@example.com",
      city: "Houston",
    },
    {
      id: 5,
      name: "Emily Davis",
      age: 29,
      email: "emily.davis@example.com",
      city: "Phoenix",
    },
    {
      id: 6,
      name: "Frank Wilson",
      age: 42,
      email: "frank.wilson@example.com",
      city: "Philadelphia",
    },
    {
      id: 7,
      name: "Grace Hall",
      age: 33,
      email: "grace.hall@example.com",
      city: "San Antonio",
    },
    {
      id: 8,
      name: "Henry Martin",
      age: 26,
      email: "henry.martin@example.com",
      city: "San Diego",
    },
    {
      id: 9,
      name: "Isabella Moore",
      age: 30,
      email: "isabella.moore@example.com",
      city: "Dallas",
    },
    {
      id: 10,
      name: "Jack Thompson",
      age: 38,
      email: "jack.thompson@example.com",
      city: "San Jose",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person) => (
          <tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person.age}</td>
            <td>{person.email}</td>
            <td>{person.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
