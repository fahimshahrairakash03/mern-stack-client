import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const DisaplayComments = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://mern-stack-server-one.vercel.app/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div>
      <h1>Comments: {comments.length}</h1>

      <div className="w-50 mx-auto">
        {comments.map((comment) => (
          <Card className="mt-4">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>{comment.comment}</p>
                <footer className="blockquote-footer">
                  <cite title="Source Title">{comment.postId}</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DisaplayComments;
