import React, {useState} from "react";

function ListingCard({listing, handleOnDelete}) {
  const [isFavorite, setIsFavorite] = useState(true)

  function handleOnClick(){
    setIsFavorite(!isFavorite);
  }


  const {description, image, location} = listing;
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite? (
          <button className="emoji-button favorite active" onClick={handleOnClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleOnClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={()=>handleOnDelete(listing)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
