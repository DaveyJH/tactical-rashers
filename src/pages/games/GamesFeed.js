import React, { useState, useEffect } from "react";

import { axiosReq } from "../../api/axiosDefaults";
import { fetchMoreData } from "../../utils/utils";

import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import InfiniteScroll from "react-infinite-scroll-component";

import GameBrief from "../../components/games/GameBrief";
import SearchByPlayer from "../../components/forms/SearchByPlayer";

import styles from "../../assets/css/games/GamesFeed.module.css";

const GamesFeed = () => {
  const [games, setGames] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const { data } = await axiosReq.get(`/games/?search=${query}&is_active=False`);
        setGames(data);
        setHasLoaded(true);
      } catch (err) {}
    };
    setHasLoaded(false);
    const timer = setTimeout(() => fetchGames(), query ? 1000 : 0);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <Container className="mb-5">
      <h2 className={`my-2 ${styles.Heading}`}>Games</h2>
      <SearchByPlayer query={query} setQuery={setQuery} />
      {hasLoaded ? (
        games?.results?.length ? (
          <InfiniteScroll
            children={games?.results?.map((game) => (
              <GameBrief key={game.id} {...game} />
            ))}
            dataLength={games.results.length}
            loader={<Spinner />}
            hasMore={!!games.next}
            next={() => fetchMoreData(games, setGames)}
          />
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
