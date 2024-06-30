import { useNavigate } from "react-router-dom";
import Hover from "../../Hover";
import AdoptPet from "./AdoptPet";
import { MdOutlineRateReview } from "react-icons/md";
import { SiPetsathome } from "react-icons/si";

const AdoptList = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col gap-4 mx-auto my-4">
        <div className="flex justify-between">
          <div className="flex gap-16 ml-2">
            {/* TODO 임시 설정 */}
            <SiPetsathome
              onClick={() => navigate("/adoption")}
              className="w-[50px] h-[50px] cursor-pointer"
            />
            <MdOutlineRateReview
              onClick={() => navigate("/review")}
              className="w-[50px] h-[50px] cursor-pointer"
            />
          </div>
          <Hover />
        </div>
        {/* span에다 링크 넣기 */}
        <div className="xl:flex">
          <h2 className="flex">
            # <span className="border-b-2 border-slate-300">입양</span> 을
            기다리고 있어요!
          </h2>
        </div>
        <ul className="grid justify-items-center grid-flow-col auto-cols-max gap-4">
          {/* 여기서 맵으로 뿌리기 */}
          <li className="flex pb-4 px-4 m-4 h-[310px] gap-4 sm:m-0 min-[320px]:m-0">
            <AdoptPet />
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdoptList;
