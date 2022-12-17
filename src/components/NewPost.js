import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-hot-toast";

const NewPost = () => {
  const handlepost = (e) => {
    e.preventDefault();
    const form = e.target;
    const post = form.post.value;
    const userName = form.username.value;
    const image = form.image.value;
    const singlePost = {
      post,
      image,
      userName,
    };
    console.log(singlePost);
    fetch("https://mern-stack-server-one.vercel.app/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(singlePost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Post Saved");
          form.reset();
        }
      });
  };

  return (
    <div className="w-50 mx-auto">
      <Form onSubmit={handlepost}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Post</Form.Label>
          <Form.Control name="post" type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image</Form.Label>
          <Form.Control name="image" type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>User Name</Form.Label>
          <Form.Control name="username" type="text" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewPost;
