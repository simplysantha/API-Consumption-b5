import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState("");

  const dataToSendBackend = {
    name: name,
    email: email,
    phone: phone,
    avatar: avatar
  };

  console.log(dataToSendBackend);

  const serverURL = "https://6745ed80512ddbd807fa3749.mockapi.io/crud";

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(serverURL, dataToSendBackend)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

//   await axios.get(URL, DATA).then().catch()
//   await axios.post(URL, DATA).then().catch()
//   await axios.put(URL, DATA).then().catch()
//   await axios.delete(URL, DATA).then().catch()

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="form-container">
        <h2 className="form-header">Register Up</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="number"
              id="phone"
              className="form-input"
              placeholder="Enter your phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="avatar" className="form-label">
              Avatar
            </label>
            <input
              id="avatar"
              type="text"
              className="form-input"
              placeholder="Enter your Avatar"
              onChange={(e) => setAvatar(e.target.value)}
            ></input>
          </div>
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;