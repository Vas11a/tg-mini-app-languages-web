import React from "react";
import SearchComponent from "../../componetns/search/SearchComponent";
import DeckListModule from "../../modules/deck_list/DeckListModule";

const HomePage = () => {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <SearchComponent />
      <DeckListModule />
    </div>
  );
};

export default HomePage;
