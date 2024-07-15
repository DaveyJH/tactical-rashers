import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import { axiosReq } from "../../api/axiosDefaults";

import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

import GameBrief from "../../components/games/GameBrief";
import SearchByPlayer from "../../components/SearchByPlayer";

import styles from "../../assets/css/games/GamesFeed.module.css";

const GamesFeed = () => {
  const [games, setGames] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation;
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        // todo change is_active to False
        const { data } = await axiosReq.get(`/games/?search=${query}&is_active=False`);
        setGames(data);
        setHasLoaded(true);
      } catch (err) {}
    };
    setHasLoaded(false);
    const timer = setTimeout(() => fetchGames(), query ? 1000 : 0);
    return () => clearTimeout(timer);
  }, [query, pathname]);

  return (
    <Container className="mb-5">
      <h2 className={`my-2 ${styles.Heading}`}>Completed games</h2>
      <SearchByPlayer query={query} setQuery={setQuery} />
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

export default GamesFeed;
