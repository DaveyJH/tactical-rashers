import React from "react";

import Form from "react-bootstrap/Form";

/**
 * @param {Props} query **required** the query to search by player
 * @param {Props} setQuery **required** the function to set the query
 * @returns a search bar to search by player name
 */
const SearchByPlayer = ({ query, setQuery }) => (
  <Form onSubmit={(e) => e.preventDefault()}>
    <Form.Group controlId="player-search">
      <Form.Label className="sr-only">Search by player</Form.Label>
      <Form.Control
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="mr-sm-2"
        placeholder="Search by player"
      />
    </Form.Group>
  </Form>
);

export default SearchByPlayer;
