import React, { useState } from "react";

const FaqAccordion = () => {
  const faqData = [
    {
      question: "How does Creatipp Work?",
      answer:
        "Creatipp enables you to create donation campaigns for your projects or causes close to your heart. Whether you're a musician, artist, writer, or any other creative professional. Hereby aiding your supporters to donate  with the blockchain  technology from anywhere in the world, breaking down geographical barriers and help building a global community around your creative endeavors.",
    },
    {
      question: "How do i create Campaign for my cause?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "Can i run multiple Campaigns simultaneously?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      question: "How do i donate towards a cause?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      question:
        "Are there any restrictions on the type of campaign to be funded?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="text-white container mx-auto mt-[-96px] bg-[#FFFFFF0D] p-6 rounded-2xl">
      <div className=" bg-[#FFFFFF1A] text-3xl text-center px-6 py-2 mb-4 rounded-2xl">
        General FAQs
      </div>
      <div className="flex flex-col gap-4">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-[#FFFFFF0D] rounded-2xl">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full p-4 focus:outline-none"
            >
              <span className="text-xl font-medium">{faq.question}</span>
              {activeIndex === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15.25 14.25L12 10.75L8.75 14.25"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15.25 10.75L12 14.25L8.75 10.75"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </button>
            {activeIndex === index && (
              <div className="px-4 py-2">
                <p className="">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
