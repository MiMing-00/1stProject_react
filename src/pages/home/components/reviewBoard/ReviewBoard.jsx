import ReviewItem from "./ReviewItem";

const ReviewBoard = () => {
  return (
    <>
      <div className="xl:flex flex-col m-t-4">
        {/* span 에다 링크 넣기 */}
        <h2 className="flex">
          # <span className="border-b-2 border-slate-300">가족</span> 을
          맞이했어요!
        </h2>
        {/* 맵으로 가져오기 */}
        <ul>
          <li className="flex flex-row m-4 gap-4">
            <ReviewItem />
          </li>
        </ul>
      </div>
    </>
  );
};

export default ReviewBoard;
