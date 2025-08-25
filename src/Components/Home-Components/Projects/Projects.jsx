import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Projects.css";
import '../transition.css'

const Projects = () => {
  const cards = [
    {
      name: "Mohamed Yousef",
      bold: "People's Bank",
      description:
        "SD-WAN with 375 Branches with PR and DR",
      img: "projects/peoples.webp",
    },
    {
      name: "Mohamed Yousef",
      description: "FortiGate SD-WAN Cisco LAN Network Cisco Firepower FW NEC IP Communication System 10,000+ Users",
      bold: "Singer",
      img: "projects/singer.webp",
    },
    {
      name: "Mohamed Yousef",
      description: "Cisco LAN Network, Cisco Firewall",
      bold: "Airtel",
      img: "projects/airtel.webp",
    },
    {
      name: "Mohamed Yousef",
      description: "LAN, Firewall, PABX, SD-WAN, WIFI, Data backup & replication Email 6500+ Users",
      bold: "Hayleys",
      img: "projects/hayleys.webp",
    },
    {
      name: "Mohamed Yousef",
      description: "PABX Solution Call Center Solution 200+ Users",
      bold: "DIMO",
      img: "projects/motor.webp",
    },
    {
      name: "Mohamed Yousef",
      description: "LAN, Wi-Fi, PABX, Public Address, Media Hub, GRMS, BGM IP TV, Structured Caballing, Fire, Electrical 2000+ Users",
      bold: "Araliya",
      img: "projects/araliya.webp",
    },
    {
      name: "Mohamed Yousef",
      description: "LAN, Firewall, Wi-Fi, PABX, 3000+ Users, lighting",
      // bold: "247 Million",
      img: "projects/council.webp",
    },
    {
      name: "Mohamed Yousef",
      description: "E- mail Solution Spam Filtering Datacenter, UPS, IP Video ( CCTV), Structured Caballing 10,000+ Users",
      bold: "Bank of Ceylon",
      img: "projects/boc.webp",
    },
    {
      name: "Mohamed Yousef",
      description: "Ruckus Wi-Fi Datacenter, UPS",
      bold: "Telecome",
      img: "projects/telecome.webp",
    },
    {
      name: "Mohamed Yousef",
      description: "Cisco LAN Network, Paloalto Firewall, Fortigate Firewall",
      bold: "Siyapatha finance",
      img: "projects/siyapatha.webp",
    },
    {
      name: "Mohamed Yousef",
      description: "LAN, Wi-Fi, Firewall, PABX Video Conferencing Door Access Control, Structured Caballing",
      bold: "Ministry of finance",
      img: "projects/DS.webp",
    },
    {
      name: "Mohamed Yousef",
      description: "SD-WAN with 375 Branches with PR and DR",
      bold: "Ministry of Defence",
      img: "projects/defence.webp",
    },
  ];

  return (
    // <div className="home flex w-full bg-[#161616] px-4 pt-16">
    <section className="slide-container h-auto bg-[#020a1a] ">
      <h2 className="pt-4 text-3xl text-center font-bold text-white md:text-5xl md:leading-[1.2]">Key Projects</h2>

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
            <div className="container w-[237px] mt-20 ">
              <div className="proj-card h-auto w-[237px] bg-white">
                <div className="image">
                  {/* <h3 className="text-black">hello</h3> */}
                  <img src={card.img} alt={card.name} className="mt-[-3rem]" />
                  <h2 className="mt-2 text-lg font-bold text-[#ff6000] md:text-xl md:leading-[1] text-center">{card.bold}</h2>
                </div>
                <div className="content">
                  <p className=" text-gray-500 text-sm font-medium pt-6">{card.description}</p>
                  {/* <h2 className="mt-2 text-xl font-bold text-[#ff6000] md:text-2xl md:leading-[1]">{card.bold}</h2> */}
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

export default Projects;
