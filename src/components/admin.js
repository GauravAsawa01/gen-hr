import React, { useState, useEffect } from "react";

const Admin = () => {
  const [credentials, setCredentials] = useState({
    id: "",
    name: "",
    email: "",
    gender: "",
    status: "",
  });
  const [intialState, setIntialState] = useState([]);

  const postUserData = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://gorest.co.in/public/v2/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 4694ceb772430f6152082064284710c1a5726007d63279756a4887ed37c9398a",
      },

      body: JSON.stringify({
        id: credentials.id,
        name: credentials.name,
        email: credentials.email,
        gender: credentials.gender,
        status: credentials.status,
      }),
    });
    const json = await response.json();
    console.log("hii", json);
    setIntialState(intialState.concat(json));
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container">
        <h1>Add User Information</h1>
        <form onSubmit={postUserData}>
          <div className="mb-3">
            <label htmlFor="id" className="form-label">
              <strong style={{ color: "tomato" }}>User Id</strong>
            </label>
            <input
              type="text"
              className="form-control text-input-css"
              id="id"
              name="id"
              aria-describedby="emailHelp"
              value={credentials.id}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <strong style={{ color: "tomato" }}>User Name</strong>
            </label>
            <input
              type="text"
              className="form-control text-input-css"
              id="name"
              name="name"
              aria-describedby="emailHelp"
              value={credentials.name}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <strong style={{ color: "tomato" }}>Email</strong>
            </label>
            <input
              type="email"
              className="form-control text-input-css"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              value={credentials.email}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              <strong style={{ color: "tomato" }}>gender</strong>
            </label>
            <input
              type="gender"
              className="form-control text-input-css"
              id="gender"
              name="gender"
              value={credentials.gender}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="status" className="form-label">
              <strong style={{ color: "tomato" }}>User Status</strong>
            </label>
            <input
              type="text"
              className="form-control text-input-css"
              id="status"
              name="status"
              aria-describedby="emailHelp"
              value={credentials.status}
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn btn-primary ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Admin;
