const Card = ({ veri }) => {
  return (
    <div className="morePicture">
      <ul className="pictures">
        {veri.map(({ photographer, src }, i) => (
          <li className="picture" key={i}>
            <div className="imageContainer">
              <img src={src["large"]} alt="" />
            </div>
            <h1 className="info"> {photographer} </h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
