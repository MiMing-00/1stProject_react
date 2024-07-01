import ReviewItem from "./ReviewItem";

const ReviewBoard = () => {
  return (
    <>
      <div className="xl:flex flex-col m-t-4">
        {/* TODO span 에다 링크 넣기 고민 중 */}
        <h2 className="flex">
          # <span className="border-b-2 border-slate-300">가족</span> 을
          맞이했어요!
        </h2>
        {/* TODO 맵으로 가져오기 */}
        <ul>
          <ReviewItem />
        </ul>
      </div>
    </>
  );
};

export default ReviewBoard;
