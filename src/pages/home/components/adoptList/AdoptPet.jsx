const AdoptPet = ({ pet }) => {
  return (
    <li className="m-2 p-2 relative w-[340px] h-[450px] group">
      <img
        src={pet.popfile}
        alt={`image of ${pet.kindCd}`}
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="absolute inset-0 p-4 flex flex-col justify-between text-white font-bold bg-black bg-opacity-50 opacity-0 rounded-xl group-hover:opacity-100 transition-opacity duration-300">
        <div>
          <div className="text-lg flex justify-end">
            {pet.colorCd}의 {pet.kindCd}
          </div>
          <div className="py-1 flex justify-end">{pet.age}</div>
        </div>
        <div className="flex justify-center text-xl">
          저에 대해서 더 알고 싶으세요?
        </div>
        <div>
          <div className="text-white flex justify-end">
            {pet.orgNm}의 {pet.careNm}
          </div>
        </div>
      </div>
    </li>
  );
};

export default AdoptPet;
