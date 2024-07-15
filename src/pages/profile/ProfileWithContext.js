import React, { useEffect, useState } from "react";

import { axiosReq } from "../../api/axiosDefaults";

import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

import GameBrief from "../../components/games/GameBrief";

import ProfileHeadline from "../../components/profile/ProfileHeadline";
import AllGamesCounts from "../../components/counters/AllGamesCounts";
import WinLossCount from "../../components/counters/WinLossCount";

import styles from "../../assets/css/profiles/Profile.module.css";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ProfileWithContext = () => {
  const [games, setGames] = useState();
  const [hasLoaded, setHasLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const { data } = await axiosReq.get(`/games/?either_player=${id}`);
        setGames(data);
        setHasLoaded(true);
      } catch (err) {}
    };
    setHasLoaded(false);
    fetchGames();
  }, [id]);

  return (
    <Container className="mt-3 mb-5">
      <ProfileHeadline />
      <Row>
        <Col md={{ span: 6, offset: 3 }} className={`${styles.GamesBorder} pt-3`}>
          <AllGamesCounts />
          <hr />
          <WinLossCount />
        </Col>
      </Row>
      {hasLoaded ? (
        games?.results?.length ? (
          games?.results?.map((game) => <GameBrief key={game.id} {...game} />)
        ) : (
          <p>No games found... maybe you should play?</p>
        )
      ) : (
        <Spinner animation="border" />
      )}
    </Container>
  );
};

export default ProfileWithContext;
