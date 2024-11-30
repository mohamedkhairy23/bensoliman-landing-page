import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arial from "../assets/1.jpg";
import feba from "../assets/2.jpg";
import aslElhloul from "../assets/3.jpg";

const PartnerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const partners = [
    {
      id: 1,
      name: "Ariel",
      logo: arial,
    },
    {
      id: 2,
      name: "Feba",
      logo: feba,
    },
    {
      id: 3,
      name: "Asl Alhaloub",
      logo: aslElhloul,
    },
  ];

  return (
    <div id="شركائنا" className="w-full">
      <div className="bg-gradient-to-r from-green-500 to-green-600 py-16 animate-gradient">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center flex-col text-right mb-12">
            <h2 className="text-3xl font-bold text-white">شركائنا</h2>
            <p className="text-xl text-gray-200 mt-2">من شركاء النجاح؟</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Slider {...settings}>
              {partners.map((partner) => (
                <div key={partner.id} className="px-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-auto object-contain transition-transform duration-500 transform hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSlider;
