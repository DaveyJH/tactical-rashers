import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import { CurrentProfileDataProvider } from "../../contexts/CurrentProfileDataContext";
import { axiosReq } from "../../api/axiosDefaults";
import { usePageIsForCurrentUser } from "../../hooks/usePageIsForCurrentUser";
import { useRedirect } from "../../hooks/useRedirect";
import { fetchMoreData } from "../../utils/utils";

import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import InfiniteScroll from "react-infinite-scroll-component";

import GameBrief from "../../components/games/GameBrief";
import SearchByPlayer from "../../components/SearchByPlayer";
import WinLossCount from "../../components/counters/WinLossCount";

import styles from "../../assets/css/games/GamesFeed.module.css";

const CompletedGames = () => {
  const [games, setGames] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const { id } = useParams();
  usePageIsForCurrentUser(parseInt(id));
  useRedirect("loggedOut");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const { data } = await axiosReq.get(`/games/?search=${query}&is_active=False&either_player=${id}`);
        setGames(data);
        setHasLoaded(true);
      } catch (err) {}
    };
    setHasLoaded(false);
    const timer = setTimeout(() => fetchGames(), query ? 1000 : 0);
    return () => clearTimeout(timer);
  }, [query, id]);

  return (
    <CurrentProfileDataProvider>
      <Container className="mb-5">
        <h2 className={`my-2 ${styles.Heading}`}>Completed games</h2>
        <WinLossCount />
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
    </CurrentProfileDataProvider>
  );
};

export default CompletedGames;
