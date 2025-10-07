import { useState } from "react";

const ObjectUseState = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    email: "",
    id: "",
  });

  const [person, setPerson] = useState([]);

  const handleInputData = (field, e) => {
    setInput((inputData) => {
      return {
        ...inputData,
        [field]: e.target.value,
      };
    });
  };

  const handleAdd = () => {
    setPerson((person) => [...person, input]);
    setInput({ name: "", age: "", email: "", id: "" });
  };

  console.log("person detail", person);

  return (
    <>
      <input
        type="text"
        value={input.name}
        placeholder="enter your name"
        onChange={(e) => handleInputData("name", e)}
      />
      <br />
      <input
        type="number"
        value={input.age}
        placeholder="enter your age"
        onChange={(e) => handleInputData("age", e)}
      />
      <br />
      <input
        type="email"
        value={input.email}
        placeholder="enter your email"
        onChange={(e) => handleInputData("email", e)}
      />
      <br />
      <input
        type="number"
        value={input.city}
        placeholder="enter your id"
        onChange={(e) => handleInputData("id", e)}
      />
      <br />

      <button onClick={handleAdd}>add</button>

      <h1>name:{input.name}</h1>

      <h1>age:{input.age}</h1>

      <h1>email:{input.email}</h1>

      <h1>id:{input.id}</h1>

      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>email</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {person.map((user, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>{user.id}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ObjectUseState;