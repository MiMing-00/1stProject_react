import { MdOutlineRateReview } from "react-icons/md";
import { SiPetsathome } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import pet_adoption_logo from "../../../public/image/pet_adoption_logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex text-black h-14 p-4 mx-auto w-full justify-between">
      <div className="flex space-x-20">
        <div
          onClick={() => navigate("/home")}
          className="w-[50px] h-[50px] rounded-2xl"
        >
          <img src={pet_adoption_logo} className="rounded-2xl" />
        </div>
        <SiPetsathome
          onClick={() => navigate("/adoption")}
          className="w-8 h-8 mr-6 cursor-pointer"
        />
        <MdOutlineRateReview
          onClick={() => navigate("/review")}
          className="w-6 h-6 cursor-pointer"
        />
      </div>
      {/* TODO 미정인 부분 없다면 위에 로고를 우측으로 뺄 것*/}
      <div className="flex gap-10 pr-4">
        <div>로그인</div>
        <div>회원 가입</div>
      </div>
    </div>
  );
};

export default Header;
