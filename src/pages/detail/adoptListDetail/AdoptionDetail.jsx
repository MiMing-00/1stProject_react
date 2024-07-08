import { useParams } from "react-router-dom";
import usePetQuery from "../../../hooks/usePetQuery";

const AdoptionDetail = () => {
  const { id } = useParams();
  const { data, isPending, error } = usePetQuery(id);

  console.log(data);

  //   age
  // :
  // "2022(년생)"
  // careAddr
  // :
  // "경상남도 거제시 사등면 두동로1길 109 (사등면, 한국자원재생공사폐비닐적재장) 거제시유기동물보호소"
  // careNm
  // :
  // "거제시유기동물보호소"
  // careTel
  // :
  // "055-639-6368"
  // chargeNm
  // :
  // "이용휘"
  // colorCd
  // :
  // "흰색.노란색.검은색"
  // desertionNo
  // :
  // "448537202400977"
  // filename
  // :
  // "http://www.animal.go.kr/files/shelter/2024/06/202407051707237_s.jpg"
  // happenDt
  // :
  // "20240705"
  // happenPlace
  // :
  // "사등면사무소"
  // kindCd
  // :
  // "[고양이] 한국 고양이"
  // neuterYn
  // :
  // "N"
  // noticeEdt
  // :
  // "20240715"
  // noticeNo
  // :
  // "경남-거제-2024-00278"
  // noticeSdt
  // :
  // "20240705"
  // officetel
  // :
  // "0556396366"
  // orgNm
  // :
  // "경상남도 거제시"
  // popfile
  // :
  // "http://www.animal.go.kr/files/shelter/2024/06/202407051707237.jpg"
  // processState
  // :
  // "보호중"
  // sexCd
  // :
  // "F"
  // specialMark
  // :
  // "경계있음"
  // weight
  // :
  // "3(Kg)"
  // [[Prototype]]
  // :
  // Object

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

  return (
    <div className="border-2 rounded-xl w-3/2 p-4">
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
        <table className="border-separate border-spacing-2 border border-slate-400 w-full ...">
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
              <th className="border border-slate-300 ...">주의사항</th>
              <td className="border border-slate-300 ...">
                {data.specialMark}
              </td>
            </tr>
            <tr>
              <th className="border border-slate-300 ...">보호소 위치</th>
              <td className="border border-slate-300 ...">
                {data.careAddr} 의{" "}
                <span className="font-bold">{data.careNm}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdoptionDetail;
