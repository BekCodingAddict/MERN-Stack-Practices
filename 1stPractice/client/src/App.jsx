// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [listOfUser, setListOfUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputData = new FormData(e.target);
    const newUserData = {
      name: inputData.get("name"),
      age: inputData.get("age"),
      userName: inputData.get("userName"),
    };
    console.log(newUserData);
    await axios
      .post("http://localhost:3001/add-user", newUserData)
      .then((resp) => {
        alert("Success!");
      });
  };

  useEffect(() => {
    const fetchUser = async () => {
      await axios.get("http://localhost:3001/get-users").then((res) => {
        setListOfUsers(res.data);
      });
    };
    fetchUser();
  }, [listOfUser]);
  return (
    <div>
      <div className="displayUsers">
        {listOfUser.map((user) => (
          <div key={user.name}>
            <div>{user.name}</div>
            <div>{user.age}</div>
            <div>{user.userName}</div>
          </div>
        ))}
      </div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="name" name="name" />
          <input type="number" placeholder="age" name="age" />
          <input type="userName" placeholder="userName" name="userName" />
          <button type="submit">Add +</button>
        </form>
      </div>
    </div>
  );
}

export default App;
