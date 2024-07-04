const ReviewItem = () => {
  return (
    <>
      <li className="flex flex-row m-4 gap-4">
        <div className="border-2 bg-slate-300 animate-slider rounded">
          <div className="flex m-2">
            <div>
              <div className="rounded-full">유저 이미지</div>
            </div>
            <div>
              <div>닉네임</div>
              <div>날짜</div>
            </div>
          </div>
          <div className="bg-white m-2">텍스트</div>
        </div>
      </li>

      {/* TODO 여러개 예시 아래는 이후 지울 것 */}
      <li className="flex flex-row m-4 gap-4">
        <div className="border-2 bg-slate-300 animate-slider rounded">
          <div className="flex m-2">
            <div>
              <div className="rounded-full">유저 이미지</div>
            </div>
            <div>
              <div>닉네임</div>
              <div>날짜</div>
            </div>
          </div>
          <div className="bg-white m-2">텍스트</div>
        </div>
      </li>
    </>
  );
};

export default ReviewItem;
