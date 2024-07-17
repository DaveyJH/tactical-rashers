import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { setTokenTimestamp } from "../../utils/utils";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import BackgammonImage from "../../components/BackgammonImage";

import styles from "../../assets/css/AuthPages.module.css";

const SignIn = () => {
  // todo add redirect for logged in users
  const setCurrentUser = useSetCurrentUser();

  const [errors, setErrors] = useState({});
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;
  const history = useHistory();

  const handleChange = (e) => {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      history.goBack();
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className={`${styles.Row} align-items-center`}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className="px-4 pt-4 py-1">
          <h1 className={`${styles.Header} py-3`}>Sign in</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" name="username" value={username} onChange={handleChange} />
            </Form.Group>
            {errors.username?.map((message, i) => (
              <Alert variant="warning" key={i}>
                {message}
              </Alert>
            ))}
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={password} onChange={handleChange} />
            </Form.Group>
            {errors.password1?.map((message, i) => (
              <Alert variant="warning" key={i}>
                {message}
              </Alert>
            ))}
            <Button className={styles.Button} type="submit">
              Sign In
            </Button>
            {errors.non_field_errors?.map((message, i) => (
              <Alert variant="warning" key={i} className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>
        <Container>
          <Link className={styles.Link} to="/sign-up">
            Don't have an account? <span>Sign up now!</span>
          </Link>
        </Container>
      </Col>
      <Col md={6} className="align-self-start align-self-md-center">
        <BackgammonImage />
      </Col>
    </Row>
  );
};

export default SignIn;
