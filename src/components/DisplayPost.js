import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MakeComment from "./MakeComment";
import DisaplayComments from "./DisaplayComments";

const DisplayPost = () => {
  //   const [posts, setPosts] = useState([]);
  const posts = useLoaderData();

  return (
    <div>
      <h1>Posts: {posts.length}</h1>
      <div className="d-flex justify-content-around">
        {posts.map((post, i) => (
          <div key={i}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ height: "15rem" }}
                variant="top"
                src={post.image}
              />
              <Card.Body>
                <Card.Title>{post.post}</Card.Title>
                <Card.Text>User: {post.userName}</Card.Text>
                <Link className="my-2" to={`/makeComment/${post._id}`}>
                  {" "}
                  <Button variant="primary"> Make Comments</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <DisaplayComments></DisaplayComments>
      </div>
    </div>
  );
};

export default DisplayPost;
