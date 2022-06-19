import React, { useState, useEffect } from "react";

const User = () => {
  const [intialState, setIntialState] = useState([]);

  const getUserData = async () => {
    const response = await fetch("https://gorest.co.in/public/v2/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log("hii", json);
    setIntialState(json);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <div className="container">
        <h1>User Information</h1>
        <table className="table" style={{ backgroundColor: "#fff" }}>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {intialState.map((data) => {
              const { id, name, email, gender, status } = data;
              return (
                <tr key={id}>
                  <th scope="row">{id}</th>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{gender}</td>
                  <td>{status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
