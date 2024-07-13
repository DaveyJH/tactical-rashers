import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import { axiosReq } from "../../api/axiosDefaults";

import Spinner from "react-bootstrap/Spinner";
import GameBrief from "../../components/games/GameBrief";

const GamesFeed = () => {
  const [games, setGames] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation;
  const [query, setQuery] = useState("");

  // handlechange for query

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const { data } = await axiosReq.get(`/games/?either_player=${query},is_active=no`);
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
    {/* search bar */}
    {/* hasLoaded? */}
  <div>GamesFeed</div>
  {/* map games */}
  <GameBrief id={1}/>
  </>
  );
};

export default GamesFeed;
