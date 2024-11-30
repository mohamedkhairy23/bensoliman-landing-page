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
    // Add more partners as needed
  ];

  return (
    <div className="w-full">
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center flex-col text-right mb-12">
            <h2 className="text-3xl font-bold text-gray-800">شركائنا</h2>
            <p className="text-xl text-gray-600 mt-2">من شركاء النجاح؟</p>
          </div>

          <div className="max-w-5xl mx-auto">
            {" "}
            {/* Added this wrapper */}
            <Slider {...settings}>
              {partners.map((partner) => (
                <div key={partner.id} className="px-4">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-auto object-contain"
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
