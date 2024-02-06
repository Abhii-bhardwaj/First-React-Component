import React from "react";
import PropTypes from "prop-types";
import picUsed from "./assets/image/img.jpg";
import styles from "./Header.module.css";
import FollowButton from "./FollowButton";
import { HiOutlineDotsVertical } from "react-icons/hi";

function Header(props) {
  const username = props.username;
  const designation = props.designation;

  return (
    <>
      <header className={styles.Header}>
        <div className={styles.combo}>
          <div className={styles.ProfilePic}>
            <img src={picUsed} alt={username} />
          </div>

          <div className={styles.username}>
            <div className={styles.username_name}>
              <p>Abhi Bhardwaj</p>
            </div>
            <div className={styles.username_post}>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>

        <div className={styles.follow}>
          <FollowButton />
        </div>
        <div className={styles.menu}>
          <HiOutlineDotsVertical className={styles.menu} />
        </div>
      </header>
    </>
  );
}

Header.propType = {
  username: PropTypes.string,
  designation: PropTypes.string,
};

Header.defaultProps = {
  username: "Abhi",
  designation: "Frontend Developer",
};

export default Header;
