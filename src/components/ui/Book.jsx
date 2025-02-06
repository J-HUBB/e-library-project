import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Book = (props) => {
  return (
    <div className="book">
      <a href="">
        <figure className="book__img--wrapper">
          <img
            src="https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg"
            alt=""
            className="book__img"
          />
        </figure>
      </a>
      <div className="book__title">
        <a href="/" className="book__title--link">
          Atomic Habits
        </a>
      </div>
      <div className="book__ratings">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalfAlt} />
      </div>
      <div className="book__price">
        <span className="book__price--normal">$15.00</span>
        $10.00
      </div>
    </div>
  );
};

export default Book;
