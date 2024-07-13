import React, { useState } from "react";

import { Form, InputGroup, Button, Container } from "react-bootstrap";

import { useSetMoves } from "../../contexts/MovesContext";

const CreateMove = () => {
  const [content, setContent] = useState("");
  const { handleNewMove } = useSetMoves();

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      handleNewMove(content);
      setContent("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Form className="mt-2" onSubmit={handleSubmit}>
        <Form.Group>
          <InputGroup>
            <Form.Control placeholder="Your move..." as="textarea" value={content} onChange={handleChange} rows={4} />
          </InputGroup>
        </Form.Group>
        <Button disabled={!content.trim()} type="submit">
          Send
        </Button>
      </Form>
    </Container>
  );
};

export default CreateMove;
