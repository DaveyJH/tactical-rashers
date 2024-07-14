import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { axiosReq } from "../../api/axiosDefaults";
import { useAllProfileData } from "../../contexts/ProfileDataContext";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const CreateGame = () => {
  const currentUser = useCurrentUser();
  const allProfileData = useAllProfileData();
  const [allProfiles, setAllProfiles] = useState({ data: [] });
  const [errors, setErrors] = useState({});
  const [opponent, setOpponent] = useState("");

  const history = useHistory();

  const handleChange = (e) => {
    const opponentName = e.target.value;
    const opponent = allProfiles?.data.results.find((profile) => profile.owner === opponentName);
    setOpponent(opponent);
  };

// todo update game context
  useEffect(() => {
    const handleMount = async () => {
      try {
        setAllProfiles((prevState) => ({
          ...prevState,
          ...allProfileData,
        }));
      } catch (err) {
        // todo clg
        console.error(err);
      }
    };
    handleMount();
  }, [currentUser, allProfileData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("player2", opponent.id);
    formData.append("player1", currentUser.profile_id);
    formData.append("active", true);
    try {
      const { data } = await axiosReq.post("/games/", formData);
      history.push(`/games/${data.id}`);
    } catch (err) {
      console.error(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const opponentSelect = (
    <Form.Group controlId="opponent">
      <Form.Label>Select opponent</Form.Label>
      {/* todo disable top select option */}
      <Form.Control as="select" onChange={handleChange} required>
        <option value="">Choose your Opponent</option>
        {allProfiles?.data.results
          ?.filter((profile) => profile.id !== currentUser.profile_id)
          .map((profile) => (
            <option key={profile.id} value={profile.owner}>
              {profile.owner}
            </option>
          ))}
      </Form.Control>
      {Object.keys(errors).length > 0 && (
        <Alert variant="danger" className="mt-1">
          Oops! Something seems to have gone wrong. Please try again.
        </Alert>
      )}
    </Form.Group>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Container>{opponentSelect}</Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" type="submit">
            Create Game
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CreateGame;
