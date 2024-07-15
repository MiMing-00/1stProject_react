import { useNavigate } from "react-router-dom";
import Hover from "../../Hover";
import AdoptPet from "./AdoptPet";
import { MdOutlineRateReview } from "react-icons/md";
import { SiPetsathome } from "react-icons/si";
import usePetQuery from "../../../../hooks/usePetQuery";

const AdoptList = () => {
  const navigate = useNavigate();
  const { data, isPending, error } = usePetQuery();

  if (isPending || !data) {
    return <div>로딩!</div>;
  }

  if (error) {
    console.log(error);
    return <div>에러!</div>;
  }

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
            # <span className="border-b-2 border-slate-300">가족</span> 을
            기다리고 있어요!
          </h2>
        </div>
        <ul className="grid justify-items-center grid-cols-3 auto-cols-max gap-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 min-[320px]:grid-cols-1">
          {/* 여기서 맵으로 뿌리기 */}
          {data?.map((pet) => (
            <AdoptPet key={pet.desertionNo} pet={pet} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default AdoptList;
