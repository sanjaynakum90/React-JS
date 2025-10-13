import { useState } from "react";
import "./ObjectState.css";

const ObjectUseState = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    email: "",
    city: "",
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
    setInput({ name: "", age: "", email: "", city: "" });
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
        type="text"
        value={input.city}
        placeholder="enter your city"
        onChange={(e) => handleInputData("city", e)}
      />
      <br />

      <button onClick={handleAdd}>add</button>

      <h1>name:{input.name}</h1>

      <h1>age:{input.age}</h1>

      <h1>email:{input.email}</h1>

      <h1>city:{input.city}</h1>

      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>email</th>
            <th>city</th>
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
                  <td>{user.city}</td>
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
