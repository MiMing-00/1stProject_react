import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { getAbandonmentData } from "../../../../api/PetApi";
import { useEffect, useState } from "react";

const DailySilder = () => {
  const [slidePet, setSlidePet] = useState([]);

  useEffect(() => {
    const fetchAbandonmentSlideData = async (
      page = "3",
      numberOfRows = "7"
    ) => {
      const response = await getAbandonmentData(page, numberOfRows);
      const slideData = response.response.body.items.item;
      setSlidePet(slideData);
      return slideData;
    };
    fetchAbandonmentSlideData();
  }, []);

  return (
    <>
      <div className="rounded h-[500px] w-full flex">
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
        >
          {slidePet?.map((pet) => (
            <SwiperSlide key={pet.desertionNo}>
              <img
                src={pet.popfile}
                className="object-cover w-full h-full rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-2xl">
                <p>{pet.specialMark}</p>
                <p>
                  {pet.colorCd}의 {pet.kindCd}
                </p>
              </div>
            </SwiperSlide>
          ))}
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
