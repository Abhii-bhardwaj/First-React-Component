import React from "react";
import { MdOutlineThumbUp } from "react-icons/md";
import { MdOutlineThumbDownOffAlt } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";
import { TfiCommentAlt } from "react-icons/tfi";

function Footer() {
  const Footer = {
    display: "flex",
    margin: "0px",
  };

  const reaction = {
    display: "flex",
    gap: "3em",
    padding: "0",
  };
  return (
    <>
      <div style={Footer}>
        <div style={reaction}>
          <div className="like">
            <MdOutlineThumbUp className="like-icon" />
          </div>
          <div className="unlike">
            <MdOutlineThumbDownOffAlt className="unlike-icon" />
          </div>
          <div className="comment">
            <TfiCommentAlt className="comment-icon" />
          </div>
        </div>
        <div className="save">
          <FaRegBookmark className="save-icon" />
        </div>
      </div>
    </>
  );
}

export default Footer;
