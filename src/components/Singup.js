import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Singup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = {
      userName,
      email,
      password,
    };
    console.log(user);

    fetch("https://mern-stack-server-one.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("User Created Successfully");
          form.reset();
        }
      });
  };

  return (
    <div>
      <h1>SignUp</h1>

      <div className="w-50 mx-auto">
        <Form onSubmit={handleSignup}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              name="username"
              type="text"
              placeholder="Enter UserName"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>

          <p className="mt-4">
            Already have an acoount? <Link to="/login">Login</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Singup;
