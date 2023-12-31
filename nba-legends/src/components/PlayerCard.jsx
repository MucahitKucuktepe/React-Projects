import React, { useState } from "react";
import Card from "react-bootstrap/Card";

const PlayerCard = ({ img, name, statistics }) => {
  const [showImage, setShowImage] = useState(false);
  const handleClick = () => {
    setShowImage(!showImage);
  };
  return (
    <Card
      className="rounded-2 m-auto player-card"
      role="button"
      //   onClick={() => setShowImage(!showImage)}
      onClick={handleClick}
    >
      {showImage ? (
        <Card.Img className="player-logo" variant="top" src={img} />
      ) : (
        <ul className="m-auto">
          {statistics.map((item, i) => (
            <li className="list-unstyled h5 text-start" key={i}>
              🏀 {item}
            </li>
          ))}
        </ul>
      )}
      <Card.Footer>
        <Card.Title>{name} </Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;
