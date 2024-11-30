import React, { useState, ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div id="تواصل معنا" className="w-full bg-green-500/10 p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-right mb-8 text-green-600">
          !تواصل معنا
        </h2>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          onSubmit={handleSubmit}
        >
          {/* Contact Form */}
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="الاسم"
              className="w-full p-3 rounded-lg bg-white/80 backdrop-blur-sm border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              dir="rtl"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="الايميل"
              className="w-full p-3 rounded-lg bg-white/80 backdrop-blur-sm border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              dir="rtl"
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="الرسالة"
              rows={4}
              className="w-full p-3 rounded-lg bg-white/80 backdrop-blur-sm border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              dir="rtl"
              onChange={handleChange}
            />
            <button className="w-full bg-white text-green-600 font-bold py-3 rounded-lg hover:bg-green-50 transition duration-300">
              ارسل لنا
            </button>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3">
              <div className="text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="text-right flex-1">
                التجمع الخامس، المنطقة الصناعية، قسم ثالث القاهرة الجديدة
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3">
              <div className="text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <p className="text-right flex-1 font-bold">15092</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3">
              <div className="text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-right flex-1">info@bensolimaneg.com</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
