import React from "react";
import FilterModule from "../../modules/filter/FilterModule";
import DeckListModule from "../../modules/deck_list/DeckListModule";

const HomePage = () => {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <FilterModule />
      <DeckListModule />
    </div>
  );
};

export default HomePage;
