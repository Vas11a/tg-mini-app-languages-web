import React from "react";

const EmptyDeck = () => {
  return (
    <div className="mt-20 flex flex-col">
      <div className="text-primary/40 text-center uppercase font-bold text-[30px]">
        No decks yet
      </div>
      <div className="text-primary/60 text-center">
        Create your first deck to start learning
      </div>
    </div>
  );
};

export default EmptyDeck;
