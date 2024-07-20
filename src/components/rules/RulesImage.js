import React from "react";

import Image from "react-bootstrap/Image";

import styles from "../../assets/css/rules/RulesImage.module.css";

/**
 * @param {Props} src the source of the image
 * @param {Props} alt the alt text for the image
 * @returns an image for the rules page
 */
const RulesImage = ({ src, alt }) => {
  return <Image src={src} alt={alt} className={styles.RulesImage} fluid />;
};

export default RulesImage;
