import React from "react";

function ImageList({ images }) {
  return (
    <div className="image-list">
      {images.map((img) => {
        return (
          <img
            key={img.id}
            className="image-list-img"
            src={img.urls.regular}
            alt={img.alt_description}
          />
        );
      })}
    </div>
  );
}

export default ImageList;
