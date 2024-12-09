import React, { useState } from "react";
import chooseimg from "../assets/wcu_1-1.png";
import choose from "../assets/wcu_1-2.png";

const WhyChoose = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What are your gym's operating hours?",
      answer:
        "Our standard membership provides access to our gym facilities during regular operating hours.",
    },
    {
      question: "What amenities and facilities does your gym offer?",
      answer:
        "We offer state-of-the-art equipment, sauna, steam rooms, and personal training sessions tailored to your needs.",
    },
    {
      question: "Do you provide personal training services?",
      answer:
        "Yes, we provide one-on-one personal training with experienced trainers to help you achieve your fitness goals.",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-12 mt-10 mx-auto">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center relative">
          <img
            src={choose}
            alt="Trainer"
            className="w-64 h-64 object-cover rounded-lg shadow-lg z-10"
          />
          <img
            src={chooseimg}
            alt="Gym"
            className="w-96 h-96 object-cover rounded-lg shadow-lg absolute top-10 left-10"
          />
          <div className="absolute bottom-5 left-5 bg-red-600 text-white p-4 rounded-lg shadow-lg flex items-center gap-3">
            <div className="text-2xl">🏋️</div>
            <div>
              <h3 className="text-xl font-bold">25+ Years Experience</h3>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 lg:ml-10 mt-10 lg:mt-0">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-300 mb-6">
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
            doloremque laudantium aperiam eaque inventore veritatis.
          </p>

          {/* FAQ Section */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-4 bg-gray-800 rounded-lg shadow-md cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h4 className="text-lg font-medium flex justify-between items-center">
                  {faq.question}
                  <span className="text-xl">
                    {openFAQ === index ? "-" : "+"}
                  </span>
                </h4>
                {openFAQ === index && (
                  <p className="text-gray-400 mt-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
