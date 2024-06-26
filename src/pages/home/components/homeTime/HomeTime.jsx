import { useEffect, useState } from "react";
import { IoAlarm } from "react-icons/io5";

const HomeTime = () => {
  const [date, setDate] = useState("");

  const today = () => {
    const todayDate = new Date();
    const formatedDate = `${todayDate.getFullYear()}년 ${
      todayDate.getMonth() + 1
    }월 ${todayDate.getDate()}일`;

    setDate(formatedDate);
  };

  useEffect(() => {
    today();
  }, []);

  // ㅇ ㅏ,,,,, 잠시만.... ^^.... 나중에~!^^ 자정에 바꿀 수 있는지? 확인해보기!
  // useEffect((

  // ) => {
  //   today();
  //   const interval = setInterval(today, )
  // }, []);

  return (
    <div className="flex bg-slate-400 rounded-xl text-white w-[280px] p-4 sm:justify-cente gap-2 p-1 min-[320px]:justify-center">
      <IoAlarm className="w-20 h-20" />
      <div className="flex flex-col">
        <div className="font-bold">{date}</div>
        <div>
          만약 <span className="font-bold">오늘</span> 만나게 된다면,
        </div>
        <div>
          <span className="font-bold">오늘</span>이 생일이 되겠죠!
        </div>
      </div>
    </div>
  );
};

export default HomeTime;
