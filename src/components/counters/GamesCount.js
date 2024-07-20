import React from "react";

/**
 * @param {Props} status active || completed
 * @param {Props} count number of games
 * @returns {React.Component} status and count of games
 */
const GamesCount = ({ status, count }) => {
  return (
    <p className="d-flex justify-content-between px-4">
      <span>{status} games:</span>
      <span> {count}</span>
    </p>
  );
};

export default GamesCount;
