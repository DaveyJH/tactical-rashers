import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import Container from "react-bootstrap/Container";

const ErrorPage404 = () => (
  <Container>
    <h1>404 Not Found</h1>
    <p>
      Oops, looks like you rolled some faulty dice! <Link to="/">Let's take you back to the games.</Link>
    </p>
  </Container>
);

export default ErrorPage404;
