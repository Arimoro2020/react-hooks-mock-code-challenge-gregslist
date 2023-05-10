import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const url = "http://localhost:6001/listings/"


function App() {

  const [listings, setListings] = useState([]);
  const [isSearched, setIsSearched] = useState("")

  function handleOnChange(event){
    setIsSearched(event.target.value);
  }

  const filteredListings = listings.filter(el=>el.description.toLowerCase().includes(isSearched.toLowerCase()))

  function handleOnDelete(listing){
    const listingUrl = `http://localhost:6001/listings/${listing.id}`

    fetch(listingUrl,{
      method: 'DELETE',
      headers:{
        "Content-Type": "application/json"
      },})
      .then(res=>res.json())
      .then(console.log("deleted!"))
      const renderNewListings = listings.filter(el=> el.id !== listing.id)
      setListings(listings=>renderNewListings);
    
  }

  useEffect(() =>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>setListings(data))


  }, [])



  return (
    <div className="app">
      <Header isSearched={isSearched} handleOnChange={handleOnChange}/>
      <ListingsContainer listings={filteredListings} handleOnDelete={handleOnDelete}/>
    </div>
  );
}

export default App;
