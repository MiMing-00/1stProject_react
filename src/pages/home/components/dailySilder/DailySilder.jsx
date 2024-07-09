import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const DailySilder = () => {
  return (
    <>
      <div className="border-4 border-indigo-500 h-[400px] w-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default DailySilder;

// .swiper {
//   width: 100%;
//   height: 100%;
// }

// .swiper-slide {
//   text-align: center;
//   font-size: 18px;
//   background: #fff;

//   /* Center slide text vertically */
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .swiper-slide img {
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }
