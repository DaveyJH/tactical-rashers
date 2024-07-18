import React from "react";

import Image from "react-bootstrap/Image";

import styles from "../assets/css/BackgammonImage.module.css";

import BackgammonBoardLargeWEBP from "../assets/images/backgammon-board-l.webp";
import BackgammonBoardMedWEBP from "../assets/images/backgammon-board-m.webp";
import BackgammonBoardSmallWEBP from "../assets/images/backgammon-board-s.webp";

const BackgammonImage = () => {
  return (
    <Image
      className={`${styles.BackgammonImage} p-4 p-md-0`}
      src={BackgammonBoardLargeWEBP}
      srcSet={`
          ${BackgammonBoardSmallWEBP} 425w,
          ${BackgammonBoardMedWEBP} 768w,
          ${BackgammonBoardLargeWEBP} 1280w`}
      sizes="(max-width: 425px) 425px, (max-width: 768px) 768px, 1280px"
      alt="backgammon board with dice"
      fluid
    />
  );
};

export default BackgammonImage;
