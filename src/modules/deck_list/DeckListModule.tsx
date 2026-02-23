import React from "react";
import { ArrowIcon } from "../../images/ArrowIcon";
import EmptyDeck from "./components/EmptyDeck";
import { PencilIconIcon } from "../../images/PencilIcon";

interface Props {}

const DeckListModule = ({}: Props) => {
  return (
    <div className="flex-1 overflow-y-auto min-h-0 flex flex-col gap-6 pb-6 mt-6">
      {/* <EmptyDeck /> */}
      <div className="flex flex-col gap-1 px-4 py-3 pb-2 rounded-2xl drop-shadow mx-1 bg-white">
        <div className="flex justify-between items-center">
          <div className="text-dark font-medium ">Basic Words</div>
          <div className=" w-6 h-6 bg-primary/20 flex justify-center items-center cursor-pointer rounded-md">
            <PencilIconIcon color="var(--color-primary)" className="w-4 h-4" />
          </div>
        </div>
        <div className="flex justify-between items-center  ">
          <div className="flex flex-col">
            <div className=" text-gray-300 text-[14px]">153 words</div>
            <div className=" text-primary/50 text-[14px]">ru-en</div>
          </div>
          <div className="py-px px-2 rounded-xl bg-primary/70 text-[14px] text-white font-medium">
            B2
          </div>
        </div>
        <div className="border-t border-primary/30 pt-1.5 flex items-center gap-4">
          <div className="flex-1 relative">
            <div className="w-full h-1.5 rounded-2xl bg-primary/15"></div>
            <div className=" absolute bg-primary/80 z-20 h-1.5 rounded-2xl top-0 w-[45%]"></div>
          </div>
          <div className="text-dark text-[14px]"> 45%</div>
        </div>
      </div>
      <div className="flex flex-col gap-1 px-4 py-3 pb-2 rounded-2xl drop-shadow mx-1 bg-white">
        <div className="flex justify-between items-center">
          <div className="text-dark font-medium ">Basic Words</div>
          <div className=" w-6 h-6 bg-primary/20 flex justify-center items-center cursor-pointer rounded-md">
            <PencilIconIcon color="var(--color-primary)" className="w-4 h-4" />
          </div>
        </div>
        <div className="flex justify-between items-center  ">
          <div className="flex flex-col">
            <div className=" text-gray-300 text-[14px]">153 words</div>
            <div className=" text-primary/50 text-[14px]">ru-en</div>
          </div>
          <div className="py-px px-2 rounded-xl bg-primary/70 text-[14px] text-white font-medium">
            B2
          </div>
        </div>
        <div className="border-t border-primary/30 pt-1.5 flex items-center gap-4">
          <div className="flex-1 relative">
            <div className="w-full h-1.5 rounded-2xl bg-primary/15"></div>
            <div className=" absolute bg-primary/80 z-20 h-1.5 rounded-2xl top-0 w-[45%]"></div>
          </div>
          <div className="text-dark text-[14px]"> 45%</div>
        </div>
      </div>
      <div className="flex flex-col gap-1 px-4 py-3 pb-2 rounded-2xl drop-shadow mx-1 bg-white">
        <div className="flex justify-between items-center">
          <div className="text-dark font-medium ">Basic Words</div>
          <div className=" w-6 h-6 bg-primary/20 flex justify-center items-center cursor-pointer rounded-md">
            <PencilIconIcon color="var(--color-primary)" className="w-4 h-4" />
          </div>
        </div>
        <div className="flex justify-between items-center  ">
          <div className="flex flex-col">
            <div className=" text-gray-300 text-[14px]">153 words</div>
            <div className=" text-primary/50 text-[14px]">ru-en</div>
          </div>
          <div className="py-px px-2 rounded-xl bg-primary/70 text-[14px] text-white font-medium">
            B2
          </div>
        </div>
        <div className="border-t border-primary/30 pt-1.5 flex items-center gap-4">
          <div className="flex-1 relative">
            <div className="w-full h-1.5 rounded-2xl bg-primary/15"></div>
            <div className=" absolute bg-primary/80 z-20 h-1.5 rounded-2xl top-0 w-[45%]"></div>
          </div>
          <div className="text-dark text-[14px]"> 45%</div>
        </div>
      </div>
      <div className="flex flex-col gap-1 px-4 py-3 pb-2 rounded-2xl drop-shadow mx-1 bg-white">
        <div className="flex justify-between items-center">
          <div className="text-dark font-medium ">Basic Words</div>
          <div className=" w-6 h-6 bg-primary/20 flex justify-center items-center cursor-pointer rounded-md">
            <PencilIconIcon color="var(--color-primary)" className="w-4 h-4" />
          </div>
        </div>
        <div className="flex justify-between items-center  ">
          <div className="flex flex-col">
            <div className=" text-gray-300 text-[14px]">153 words</div>
            <div className=" text-primary/50 text-[14px]">ru-en</div>
          </div>
          <div className="py-px px-2 rounded-xl bg-primary/70 text-[14px] text-white font-medium">
            B2
          </div>
        </div>
        <div className="border-t border-primary/30 pt-1.5 flex items-center gap-4">
          <div className="flex-1 relative">
            <div className="w-full h-1.5 rounded-2xl bg-primary/15"></div>
            <div className=" absolute bg-primary/80 z-20 h-1.5 rounded-2xl top-0 w-[45%]"></div>
          </div>
          <div className="text-dark text-[14px]"> 45%</div>
        </div>
      </div>
      <div className="flex flex-col gap-1 px-4 py-3 pb-2 rounded-2xl drop-shadow mx-1 bg-white">
        <div className="flex justify-between items-center">
          <div className="text-dark font-medium ">Basic Words</div>
          <div className=" w-6 h-6 bg-primary/20 flex justify-center items-center cursor-pointer rounded-md">
            <PencilIconIcon color="var(--color-primary)" className="w-4 h-4" />
          </div>
        </div>
        <div className="flex justify-between items-center  ">
          <div className="flex flex-col">
            <div className=" text-gray-300 text-[14px]">153 words</div>
            <div className=" text-primary/50 text-[14px]">ru-en</div>
          </div>
          <div className="py-px px-2 rounded-xl bg-primary/70 text-[14px] text-white font-medium">
            B2
          </div>
        </div>
        <div className="border-t border-primary/30 pt-1.5 flex items-center gap-4">
          <div className="flex-1 relative">
            <div className="w-full h-1.5 rounded-2xl bg-primary/15"></div>
            <div className=" absolute bg-primary/80 z-20 h-1.5 rounded-2xl top-0 w-[45%]"></div>
          </div>
          <div className="text-dark text-[14px]"> 45%</div>
        </div>
      </div>
      <div className="flex flex-col gap-1 px-4 py-3 pb-2 rounded-2xl drop-shadow mx-1 bg-white">
        <div className="flex justify-between items-center">
          <div className="text-dark font-medium ">Basic Words</div>
          <div className=" w-6 h-6 bg-primary/20 flex justify-center items-center cursor-pointer rounded-md">
            <PencilIconIcon color="var(--color-primary)" className="w-4 h-4" />
          </div>
        </div>
        <div className="flex justify-between items-center  ">
          <div className="flex flex-col">
            <div className=" text-gray-300 text-[14px]">153 words</div>
            <div className=" text-primary/50 text-[14px]">ru-en</div>
          </div>
          <div className="py-px px-2 rounded-xl bg-primary/70 text-[14px] text-white font-medium">
            B2
          </div>
        </div>
        <div className="border-t border-primary/30 pt-1.5 flex items-center gap-4">
          <div className="flex-1 relative">
            <div className="w-full h-1.5 rounded-2xl bg-primary/15"></div>
            <div className=" absolute bg-primary/80 z-20 h-1.5 rounded-2xl top-0 w-[45%]"></div>
          </div>
          <div className="text-dark text-[14px]"> 45%</div>
        </div>
      </div>
      <div className="flex flex-col gap-1 px-4 py-3 pb-2 rounded-2xl drop-shadow mx-1 bg-white">
        <div className="flex justify-between items-center">
          <div className="text-dark font-medium ">Basic Words</div>
          <div className=" w-6 h-6 bg-primary/20 flex justify-center items-center cursor-pointer rounded-md">
            <PencilIconIcon color="var(--color-primary)" className="w-4 h-4" />
          </div>
        </div>
        <div className="flex justify-between items-center  ">
          <div className="flex flex-col">
            <div className=" text-gray-300 text-[14px]">153 words</div>
            <div className=" text-primary/50 text-[14px]">ru-en</div>
          </div>
          <div className="py-px px-2 rounded-xl bg-primary/70 text-[14px] text-white font-medium">
            B2
          </div>
        </div>
        <div className="border-t border-primary/30 pt-1.5 flex items-center gap-4">
          <div className="flex-1 relative">
            <div className="w-full h-1.5 rounded-2xl bg-primary/15"></div>
            <div className=" absolute bg-primary/80 z-20 h-1.5 rounded-2xl top-0 w-[45%]"></div>
          </div>
          <div className="text-dark text-[14px]"> 45%</div>
        </div>
      </div>
    </div>
  );
};

export default DeckListModule;
