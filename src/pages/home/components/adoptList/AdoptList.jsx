import Hover from "../../Hover";
import AdoptPet from "./AdoptPet";

const AdoptList = () => {
  return (
    <>
      <div className="flex flex-col gap-4 mx-auto my-4">
        <div className="flex justify-end">
          <Hover />
        </div>
        {/* span에다 링크 넣기 */}
        <div className="xl:flex">
          <h2 className="flex">
            # <span className="border-b-2 border-slate-300">입양</span> 을
            기다리고 있어요!
          </h2>
        </div>
        <ul className="grid min-[320px]:justify-items-center min-[320px]:grid-cols-1 xl:grid-cols-4 sm:justify-items-center">
          {/* 여기서 맵으로 뿌리기 */}
          <li className="flex flex-col m-4 p-1 border-2 border-double border-violet-400 rounded-l bg-violet-100 sm:w-72 sm:m-0 min-[320px]:w-auto min-[320px]:m-0 xl:w-64">
            <AdoptPet />
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdoptList;
