import { useState } from "react";
import "../assets/css/Faq.css"

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleAnswer = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
    const faqs = [
        {
          question: "How does an investor gain access to MF Utility?",
          answer: "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        },
        {
          question: "Will investors be able to have multiple Common Account Numbers?",
          answer: "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        },
        {
          question: "How does an investor gain access to MF Utility?",
          answer: "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ];
    return (
      <div className="faq-section">
        <h2 className="faq-title">FAQ</h2>
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <p>{faq.question}</p>
              <button className="toggle-btn">
                {activeIndex === index ? '−' : '+'}
              </button>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default Faq;