"use client";
import Image from "next/image";
import { useState } from "react";
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question: "What is the turnaround time for order processing?",
      answer: "Orders are typically processed within 2-3 business days.",
    },
    {
      question: "Can I customize the designs on my products?",
      answer: "Yes, you can fully customize designs using our design tool.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards, PayPal, and other digital payment methods.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for unused and undamaged products.",
    },
    {
      question: "Are there any discounts for bulk orders?",
      answer:
        "Yes, we offer discounts on bulk orders. Please contact our sales team for more information.",
    },
    {
      question: "How can I get help if I encounter an issue?",
      answer:
        "You can reach out to our customer support team via the contact form on our website.",
    },
    {
      question: "Can I change my order after it has been placed?",
      answer:
        "Order changes are possible within 24 hours of placing the order. Please contact support as soon as possible.",
    },
    {
      question: "What materials are used for the products?",
      answer: "Our products are made from high-quality, sustainable materials.",
    },
  ];

  return (
    <div className="faq-items">
      {faqs.map((item, index) => (
        <div className="faq-item">
          <button
            key={index}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            {item.question}
            <Image src="/svg/arrow-down.svg" width={32} height={16}></Image>
          </button>
          {activeIndex === index && <p className="answer">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
