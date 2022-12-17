import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-hot-toast";

const MakeComment = ({ id }) => {
  const handlecomment = (e) => {
    e.preventDefault();
    const form = e.target;
    const postId = form.id.value;
    const comment = form.comment.value;
    const comments = {
      postId,
      comment,
    };
    console.log(comments);

    fetch("https://mern-stack-server-one.vercel.app/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(comments),
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
    <div className="w-50 mx-auto">
      <h1>Comments</h1>
      <Form onSubmit={handlecomment}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control name="id" type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Comments</Form.Label>
          <Form.Control name="comment" type="text" />
        </Form.Group>

        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default MakeComment;
