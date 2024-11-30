import { FC } from "react";
import googlePlay from "../assets/google-play.png";
import appStore from "../assets/app-store.png";

const AboutSection: FC = () => {
  return (
    <section
      id="من نحن"
      className="bg-gradient-to-r from-green-500 to-green-600 text-white py-8 sm:py-12 md:py-16"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          {/* Responsive heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            من نحن؟
          </h2>

          {/* Responsive paragraph */}
          <p className="text-base sm:text-lg mb-6 sm:mb-8 px-2 sm:px-4">
            بن سليمان: تاجر جملة غذائي أسس عام 1998 بمدينة السلام، بدأ كمحل صغير
            وتوسع ليخدم القاهرة والجيزة بمجموعة كاملة من المنتجات وتوصيل مجاني.
            نسعى لتلبية احتياجات عملائنا في جميع أنحاء المنطقة
          </p>

          {/* Responsive statistics grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            <div className="text-center bg-green-600/30 rounded-lg py-4 px-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-green-400 hover:via-green-500 hover:to-green-600 hover:text-[#212529]">
              <h3 className="text-3xl sm:text-3xl md:text-4xl font-bold">
                +30,000
              </h3>
              <p className="text-sm sm:text-base">عميل</p>
            </div>

            <div className="text-center bg-green-600/30 rounded-lg py-4 px-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-green-400 hover:via-green-500 hover:to-green-600 hover:text-[#212529]">
              <h3 className="text-3xl sm:text-3xl md:text-4xl font-bold">25</h3>
              <p className="text-sm sm:text-base">سنة نجاح</p>
            </div>
            <div className="text-center bg-green-600/30 rounded-lg py-4 px-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-green-400 hover:via-green-500 hover:to-green-600 hover:text-[#212529]">
              <h3 className="text-3xl sm:text-3xl md:text-4xl font-bold">
                +1500
              </h3>
              <p className="text-sm sm:text-base">موظف</p>
            </div>
          </div>

          {/* Responsive app store buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.Elhodafoods.Egypt&pli=1"
              className="hover:opacity-80 transition-opacity w-40 sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={googlePlay}
                alt="Google Play"
                className="h-10 sm:h-12 w-full object-contain"
              />
            </a>
            <a
              href="https://apps.apple.com/eg/app/ben-soliman-%D8%A8-%D9%86-%D8%B3-%D9%84%D9%8A%D9%85%D8%A7%D9%86/id1609436646"
              className="hover:opacity-80 transition-opacity w-40 sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={appStore}
                alt="App Store"
                className="h-10 sm:h-12 w-full object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
