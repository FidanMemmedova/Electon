import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  console.log(name, description);

  const post = () => {
    axios.post("https://northwind.vercel.app/api/categories", {
      name: name,
      desciption: description,
    });
  };

  return (
    <div style={{ width: "500px", height: "auto", border: "1px solid black" }}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="username"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
       
        placeholder="password"
      />
      <button onClick={post()} type="submit">Duyme</button>
    </div>
  );
};

export default Login;
