import { useParams } from "react-router-dom";
import usePetQuery from "../../../hooks/usePetQuery";
import { IoCall } from "react-icons/io5";

const AdoptionDetail = () => {
  const { id } = useParams();
  const { data, isPending, error } = usePetQuery(id);

  if (isPending) {
    return <div>로딩 중</div>;
  }

  if (error) {
    return <div>erroR!!!!!~~~~~</div>;
  }

  const getAge = (petAge) => {
    const today = new Date();
    const year = today.getFullYear();

    return year - parseInt(petAge.slice(0, 4));
  };

  const getGender = (petGender) => {
    if ((petGender === "F") | (petGender === "f")) {
      return "암컷";
    } else if ((petGender === "M") | (petGender === "m")) {
      return "수컷";
    } else {
      return petGender;
    }
  };

  const happenDay = (petHappenDt) => {
    return `${petHappenDt.slice(0, 4)}년 ${petHappenDt.slice(
      5,
      6
    )}월 ${petHappenDt.slice(7, 8)}일`;
  };

  return (
    <div className="border-2 rounded-xl w-[90%] p-4 mx-auto">
      <div className="w-full flex flex-col mx-auto">
        <div className="m-4 p-4 border-2 rounded-xl">
          {data.colorCd}의 {data.kindCd}
        </div>
        <div className="flex justify-center items-center w-[40%] mx-auto pb-4">
          <img
            src={data.popfile}
            alt={`${data.desertionNo}의 정보`}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div>
          <h3 className="p-4 m-4 text-2xl">가족이 되어 주세요!</h3>
          <table className="border-separate border-spacing-2 border border-slate-400 w-full text-balanc ...">
            <tbody>
              <tr>
                <th className="border border-slate-300 ...">성별</th>
                <td className="border border-slate-300 ...">
                  {getGender(data.sexCd)}
                </td>
              </tr>
              <tr>
                <th className="border border-slate-300 ...">나이</th>
                <td className="border border-slate-300 ...">
                  {getAge(data.age)} 살
                </td>
              </tr>
              <tr>
                <th className="border border-slate-300 ...">몸무게</th>
                <td className="border border-slate-300 ...">{data.weight}</td>
              </tr>
              <tr>
                <th className="border border-slate-300e ...">특이사항</th>
                <td className="border border-slate-300 ...">
                  {data.specialMark}
                </td>
              </tr>
              <tr>
                <th className="border border-slate-300 ...">보호소 위치</th>
                <td className="border border-slate-300 ...">
                  {data.careAddr} 의{" "}
                  <div className="font-bold">{data.careNm}</div>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex flex-col justify-center mt-4">
            <div>
              이 아이는 <span>{happenDay(data.happenDt)}</span>에 &apos;
              {data.happenPlace}&apos; 에서 발견됐어요.
            </div>
            <div>
              털색은 예쁜 {data.colorCd}을 가지고 있고, 나이는{" "}
              {getAge(data.age)}
              살이에요.
            </div>
            <div>
              이 아이가 눈에 밟히시는 분은 <IoCall /> {data.officetel} 으로
              연락해주세요.
            </div>
            <div>당신의 신중한 선택을 기다리고 있습니다.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptionDetail;
