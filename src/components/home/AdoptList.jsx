import React from "react";
import Hover from "./Hover";
import AdoptItem from "./AdoptItem";

const AdoptList = () => {
  return (
    <>
      <div className="flex gap-4 mx-auto my-4">
        <div>
          # <span className="border-b-2 border-slate-300">입양</span> 을
          기다리고 있어요!
        </div>
        {/* 여기서 맵으로 뿌리기 */}
        <AdoptItem />
      </div>
      <div className="">
        <Hover />
      </div>
    </>
  );
};

export default AdoptList;
