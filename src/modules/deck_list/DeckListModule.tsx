import React from "react";
import { ArrowIcon } from "../../images/ArrowIcon";

interface Props {}

const DeckListModule = ({}: Props) => {
  return (
    <div className="flex-1 overflow-y-auto min-h-0 flex flex-col gap-2">
      <div className="mt-20 flex flex-col">
        <div className="text-primary/40 text-center uppercase font-bold text-[30px]">
          No decks yet
        </div>
        <div className="text-primary/60 text-center">
          Create your first deck to start learning
        </div>
      </div>
    </div>
  );
};

export default DeckListModule;
