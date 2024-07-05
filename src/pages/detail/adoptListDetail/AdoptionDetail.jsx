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

  return (
    <div className="border-2 rounded-xl w-3/2">
      <div className="">
        {data.colorCd}의 {data.kindCd}
      </div>
      <div className="flex justify-center items-center w-[90%]">
        <img
          src={data.popfile}
          alt={`${data.desertionNo}의 정보`}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default AdoptionDetail;
