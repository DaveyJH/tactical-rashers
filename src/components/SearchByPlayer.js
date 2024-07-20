import React from "react";

import Form from "react-bootstrap/Form";

/**
 *
 * Requires `query` and `setQuery` to be passed in as props
 * @param {*} query current query value from state
 * @param {*} query setQuery function to update query state
 * @returns `SearchByPlayer` component
 */
const SearchByPlayer = ({ query, setQuery }) => {
  return (
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
};

export default SearchByPlayer;
