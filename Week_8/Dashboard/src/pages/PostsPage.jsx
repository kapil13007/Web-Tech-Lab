import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PostCard from "../components/PostCard";

const PostsPage = () => {
  const posts = [
    {
      id: 1,
      title: "The Great Estate Developer ",
      description: "A cunning entrepreneur navigates rivalries and schemes to build a real estate empire."
    },
    {
      id: 2,
      title: "Tokyo Ghoul",
      description: "A college student becomes part-ghoul and must survive in a deadly world of flesh-eating creatures."
    },
    {
      id: 3,
      title: "Code Geass",
      description: "An exiled prince gains mind-control powers and leads a rebellion to overthrow a tyrannical empire."
    },
    {
      id: 4,
      title: "Grand Blue",
      description: "College life turns chaotic with hilarious antics, diving adventures, and wild friendships."
    }
  ];

  return (
    <Container className="Container">
      <h2>Blog Posts</h2>
      <Row className="g-4">
        {posts.map((post) => (
          <Col key={post.id} xs={12} sm={6} md={6} lg={4}>
            <PostCard title={post.title} description={post.description} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PostsPage;

