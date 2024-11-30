const Hero = () => {
  return (
    <div className="relative h-[calc(100vh-0px)] bg-green-500 flex items-center justify-center">
      {/* Overlay with semi-transparent green */}
      <div className="absolute inset-0 bg-green-500/80"></div>

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/your-background-image.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Social Media Icons - Fixed on right side */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        <a
          href="https://www.facebook.com/Bensolimaneg"
          className="text-white hover:text-gray-200 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/company/elhodafoods/"
          className="text-white hover:text-gray-200 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 flex flex-col items-center">
        <div className="mb-16">
          <p className="text-2xl mb-4">اهلا بكم</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            بن سليمان
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            شركة بن سليمان تجارة المواد الغذائية بالجملة تأسست في 1998 في مدينة
            السلام وتوسعت في عام 2002 لخدمة مناطق القاهرة والجيزة توفر الشركة
            جميع احتياجات السوبرماركت وتجار الجملة بمجموعة كبيرة من المنتجات
            بأفضل الأسعار، وتوفر خدمة التوصيل في القاهرة والجيزة بأسطول يضم نحو
            250 سيارة متنوعة تهدف الشركة إلي توفير أعلى مستوى من الخدمة والرضا
            لعملائها
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm font-light">حرك لأسفل</span>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
