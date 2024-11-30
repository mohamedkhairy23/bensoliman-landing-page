import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from "../assets/ben soliman logo.png";

const BranchLocations = () => {
  const branches = [
    {
      name: "فرع النهضة (للبيع المباشر)",
      logo: Logo,
      address: "النهضة، نزلة النهضة امام رئاسة حي النهضة",
    },
    {
      name: "فرع اكتوبر",
      logo: Logo,
      address: "اكتوبر، الحي السابع بجوار مسجد الحصري",
    },
    {
      name: "فرع الوراق",
      logo: Logo,
      address: "الوراق، نزلة الوراق امام رئاسة حي الوراق",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-16 bg-green-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl font-bold text-green-600">فروعنا</h2>
          <p className="text-2xl text-green-700">اين توجد فروعنا؟</p>
        </div>

        {/* Slider */}
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <Slider {...settings}>
            {branches.map((branch, index) => (
              <div key={index} className="px-4">
                <div className="group relative bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto max-w-[350px] h-[300px] overflow-hidden">
                  {/* Default View */}
                  <div className="absolute inset-0 p-8 flex flex-col items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                    <img
                      src={branch.logo}
                      alt="Ben Soliman Logo"
                      className="h-28 w-auto"
                    />
                    <h3 className="text-xl font-semibold text-green-600 text-center mt-6">
                      {branch.name}
                    </h3>
                  </div>

                  {/* Hover View */}
                  <div className="absolute inset-0 p-8 flex flex-col items-center justify-center bg-white bg-opacity-75 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    <h3 className="text-xl font-semibold text-green-600 mb-4">
                      {branch.name}
                    </h3>
                    <p className="text-green-700 text-center leading-relaxed">
                      {branch.address}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BranchLocations;
