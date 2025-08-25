import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../Home-Components/Projects/Projects.css";
// import '../transition.css'

const InnoProjects = () => {
  const cards = [
    {
      name: "Mohamed Yousef",
      bold: "Call Center Solution with CRM",
      description:
        "Sri Lanka Tourists Board",
      img: "/Innoprojects/sltda.jpg",
    },
    {
      name: "Mohamed Yousef",
      description: "Seylan Bank",
      bold: "Call Billing & Recording Solution",
      img: "/Innoprojects/seylan.png",
    },
    {
      name: "Mohamed Yousef",
      description: "Sampath Bank PLC",
      bold: "Customized SIP Phone Solution",
      img: "/Innoprojects/sampath.png",
    },
    {
      name: "Mohamed Yousef",
      description: "Asia Broadcasting Cooperation Limited",
      bold: "Custormized Missed Call App",
      img: "/Innoprojects/hiru.png",
    },
    {
      name: "Mohamed Yousef",
      description: "Seylan Bank",
      bold: "Call Billing & Recording Solution",
      img: "/Innoprojects/seylan.png",
    },
    {
      name: "Mohamed Yousef",
      description: "Sampath Bank PLC",
      bold: "Customized SIP Phone Solution",
      img: "/Innoprojects/sampath.png",
    },
  ];

  return (
    // <div className="home flex w-full bg-[#161616] px-4 pt-16">
    <section className="slide-container h-auto bg-black mt-8 px-8">

      <div className="home flex flex-row flex-wrap justify-around bg-[#16161600]  pt-16 ">
        <div className="lefthead md:w-2/5 w-full">
          <p className="my-4 font-normal text-md md:text-lg md:leading-[1.6] text-white">
            Case studies
          </p>
          <h2 className="text-xl font-bold md:text-3xl md:leading-[1.2] text-[#ff6000]">
            Proud projects make us excel
          </h2>
        </div>
        <div className="hidden md:flex righthr w-3/5 flex-col justify-around pl-6">
          <hr className=" h-0.5 w-full bg-gradient-to-r from-[#ff6000] via-gray-500  border-none" />

        </div>
      </div>

      <Swiper
        className="slide-content"
        modules={[Navigation]}
        slidesPerView={4}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          520: { slidesPerView: 2 },
          950: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="swiper-slide ">
            <div className="container w-[266px] mt-20 ">
              <div className="proj-card w-[266px] bg-[#fffff]">
                <div className="image">
                  {/* <h3>hello</h3> */}
                  <img src={card.img} alt={card.name} className="mt-[-3rem]" />
                </div>
                <div className="content">
                  <p className=" text-gray-300 text-sm font-medium pb-4">{card.description}</p>
                  <h2 className=" text-xl font-bold text-white md:text-2xl md:leading-[1]">{card.bold}</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </section>
    // </div>
  );
};

export default InnoProjects;
