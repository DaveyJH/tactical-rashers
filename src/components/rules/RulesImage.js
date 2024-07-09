import React from "react";
import Image from "react-bootstrap/Image";

import styles from "../../assets/css/rules/RulesImage.module.css";

const RulesImage = ({ src, alt }) => {
  return <Image src={src} alt={alt} className={styles.RulesImage} fluid />;
};

export default RulesImage;
