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
      <Form.Control
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="mr-sm-2"
        placeholder="Search by player"
      />
    </Form>
  );
};

export default SearchByPlayer;
