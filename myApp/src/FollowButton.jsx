import React, { useState } from "react";
const FollowButton = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const styles = {
    backgroundColor: "transparent",
    border: "none",
    fontSize: "0.8em",
    display: "flex",
    flexDirection: "flex-end",
    outline: "none",
    color: "#0ba6ff",
    fontWeight: "30",
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <>
      <button style={styles} onClick={handleFollow}>
        {isFollowing ? "Following" : "+Follow"}
      </button>
    </>
  );
};

export default FollowButton;
