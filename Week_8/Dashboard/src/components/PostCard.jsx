import React from "react";
import { Card, Button } from "react-bootstrap";

const PostCard = ({ title, description }) => {
  return (
    <Card className="Card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
};

export default PostCard;

