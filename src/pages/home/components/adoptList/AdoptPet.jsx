const AdoptPet = () => {
  return (
    <>
      <div className="border-2 border-double border-violet-400 rounded-l bg-violet-100 w-[280px]">
        <div className="border-2 border-dotted border-slate-400 m-4 p-4 h-[200px]">
          이미지
        </div>
        <div className="flex justify-center mx-4 px-4 gap-4 pb-2">
          <span className="rounded-xl bg-white px-4 py-1">종</span>
          <span className="px-4 py-1">이름</span>
        </div>
      </div>

      {/* 여러개일 경우 가정 */}
      <div className="border-2 border-double border-violet-400 rounded-l bg-violet-100 w-[280px]">
        <div className="border-2 border-dotted border-slate-400 m-4 p-4 h-[200px]">
          이미지
        </div>
        <div className="flex justify-center mx-4 px-4 gap-4">
          <span className="rounded-xl bg-white px-4 py-1">종</span>
          <span className="px-4 py-1">이름</span>
        </div>
      </div>
      <div className="border-2 border-double border-violet-400 rounded-l bg-violet-100 w-[280px]">
        <div className="border-2 border-dotted border-slate-400 m-4 p-4 h-[200px]">
          이미지
        </div>
        <div className="flex justify-center mx-4 px-4 gap-4">
          <span className="rounded-xl bg-white px-4 py-1">종</span>
          <span className="px-4 py-1">이름</span>
        </div>
      </div>
    </>
  );
};

export default AdoptPet;
