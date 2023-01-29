import React, { useState } from "react";

const ShortForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const submit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="w-2/6  mx-auto">
      <h1>
        <strong> Name: </strong>
        {firstName} {lastName}, <strong> Email : </strong> {email},{" "}
        <strong> Password: </strong> {password}
      </h1>{" "}
      <form onSubmit={submit} className="bg-gray-200  my-5 py-5">
        <div className="ml-16">
          <div className="flex gap-5 my-5">
            <label htmlFor="name ">First Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onBlur={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex gap-5 my-5">
            <label htmlFor="name ">Last Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onBlur={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex gap-5 my-5">
            <label htmlFor="name ">Email</label>
            <input
              type="text"
              name="name"
              id="name"
              onBlur={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex gap-5 my-5">
            <label htmlFor="name ">Password</label>
            <input
              type="text"
              name="name"
              id="name"
              onBlur={(e) => setpassword(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-success my-10 capitalize">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShortForm;
