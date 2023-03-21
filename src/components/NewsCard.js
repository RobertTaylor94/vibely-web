import React from "react";

function NewsCard({title,description,url,urlToImage}) {
  return (
    <div>
      <img src={urlToImage} alt="News"></img>
      <h5 >
        <a href={url}>{title}</a>
      </h5>
      <p>{description}</p>
    </div>
  )
}

export default NewsCard;
