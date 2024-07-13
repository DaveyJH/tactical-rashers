import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import { axiosReq } from "../../api/axiosDefaults";

import Spinner from "react-bootstrap/Spinner";
import GameBrief from "../../components/games/GameBrief";
import SearchByPlayer from "../../components/SearchByPlayer";

const GamesFeed = () => {
  const [games, setGames] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation;
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        // todo change is_active to False
        const { data } = await axiosReq.get(`/games/?search=${query}&is_active=True`);
        setGames(data);
        setHasLoaded(true);
      } catch (err) {}
    };
    setHasLoaded(false);
    const timer = setTimeout(() => fetchGames(), query ? 1000 : 0);
    return () => clearTimeout(timer);
  }, [query, pathname]);

  return (
    <>
      <SearchByPlayer query={query} setQuery={setQuery} />
      <div>GamesFeed</div>
      {/* todo display no games found depending on query */}
      {hasLoaded ? (
      games?.results?.map((game) => (
        <GameBrief key={game.id} {...game} />
      ))
      ) : (
        <Spinner animation="border" />
      )}
    </>
  );
};

export default GamesFeed;
