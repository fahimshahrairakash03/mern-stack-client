import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Login = () => {
  const handlelogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.username.value;
    const password = form.password.value;
    const user = {
      userName,
      password,
    };
    console.log(user);
    fetch(
      `https://mern-stack-server-one.vercel.app/users?username=${userName}&password=${password}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (userName) {
          toast.success("User Login Succenssfull");
          form.reset();
        }
      });
  };
  return (
    <div>
      <h1>Login</h1>

      <div className="w-50 mx-auto">
        <Form onSubmit={handlelogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              name="username"
              type="text"
              placeholder="Enter UserName"
            />
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
            New User? <Link to="/">Signup</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
