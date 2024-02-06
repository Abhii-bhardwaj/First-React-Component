import React from "react";
function Post() {
  const styles = {
    width: "auto",
    height: "30vh",
    marginTop: "1rem",
  };
  const image = {
    height: "28vh",
    width: "90%",
  };

  const postImage = {
    height: "30vh",
    width: "100%",
    display: "flex",
    margin: "auto",
  };

  let imageUrl = [
    { src: "./src/assets/image/img.jpg", alt: "Image 1" },
    // { src: "./src/assets/image/img1.jpg", alt: "Image 2" },
    // { src: "./src/assets/image/img2.jpg", alt: "Image 3" },
    // { src: "./src/assets/image/img3.jpg", alt: "Image 4" },

    // Add your image data here.
  ];
  return (
    <>
      <div style={styles}>
        {imageUrl.map((index) => (
          <div style={postImage}>
            <img src={index.src} alt={index.alt} style={image} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Post;
