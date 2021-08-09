import React from "react";

const Card = ({ cardData, onSelect }) => {
  const {
    name,
    capital,
    region,
    subregion,
    population,
    borders,
    languages,
    flag,
  } = cardData;

  return (
    <>
      <div className="card">
        <div className="thumbnail">
          <img src={flag} width="530" height="320px" alt="flagImg" />
        </div>
        <div className="right">
          <h1>Countries App</h1>

          <h4>
            Name :- <span>{name}</span>
          </h4>
          <h4>
            Capital :- <span>{capital !== "" ? capital : "none"}</span>
          </h4>
          <h4>
            Region :- <span>{region}</span>
          </h4>
          <h4>
            Subregion :- <span>{subregion}</span>
          </h4>
          <h4>
            Population :- <span>{population}</span>
          </h4>
          <h4>
            Borders :- <span> {borders !== ", " ? borders : "none"}</span>
          </h4>
          <h4>
            Languages :- <span>{languages}</span>
          </h4>
        </div>
        <div className="fab">
          <button onClick={onSelect}>
            <i className="fa fa-refresh fa-3x"> </i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
