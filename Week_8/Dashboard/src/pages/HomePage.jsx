import React from "react";
import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="HomePage">
      <h1>Welcome to the Blog Dashboard</h1>
      <p>
        This is a simple blog dashboard built with React, React Router, and
        React Bootstrap. Navigate to the Posts page to view sample blog cards.
      </p>
    </Container>
  );
};

export default HomePage;
