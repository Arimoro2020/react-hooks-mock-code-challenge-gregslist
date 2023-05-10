import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleOnDelete}) {



  

const renderListings = listings.map(listing=>
  <ListingCard key={listing.id} listing={listing} handleOnDelete={handleOnDelete}/>)

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
