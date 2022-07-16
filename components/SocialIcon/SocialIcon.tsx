import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { Brand } from "../../types/Brand";
import styles from "./SocialIcon.module.scss";

type SocialIconProps = {
  icon: IconDefinition;
  link: string;
  brand: Brand;
};

const SocialIcon = ({ icon, link, brand }: SocialIconProps) => {
  return (
    <Link href={link} className={styles.iconContainer}>
      <a target="_blank">
        <FontAwesomeIcon
          icon={icon}
          style={{ height: "24px" }}
          className={`${styles.icon} ${styles[brand]}`}
        />
      </a>
    </Link>
  );
};

export default SocialIcon;
