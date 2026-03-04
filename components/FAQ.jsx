"use client";

import { useState } from "react";
import { X, Plus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "How do users earn points?",
      answer:
        "Users earn points by disposing waste in Trashee smart bins and scanning the QR code using the Trashee Customer App. Each disposal earns points, with bonus rewards for regular usage and referrals.",
    },
    {
      question: "How does the Trashee app work?",
      answer:
        "Download the app, create an account, locate nearby smart bins, dispose your waste, scan the bin's QR code, and instantly earn points. Track and redeem rewards directly from the app.",
    },
    {
      question: "How can businesses join as partners?",
      answer:
        "Businesses can partner with us by contacting our team through the website or apps. We offer customized packages for corporates, malls, housing societies, hospitality and public institutions.",
    },
    {
      question: "How to deploy smart bins in your area?",
      answer:
        "Contact our team to request a deployment. We assess your location, provide a proposal, install the smart bins, and train your team on the Partner App for management and analytics.",
    },
    {
      question: "What rewards can users redeem?",
      answer:
        "Users can redeem points for shopping vouchers, discounts at partner stores, eco-friendly products, entertainment offers, and can even donate to environmental causes.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>

        <p className="mt-6 text-gray-600">
          Everything you need to know about Trashee.
        </p>

        {/* FAQ Items */}
        <div className="mt-16 space-y-6 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-900">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <X className="text-green-600" size={18} />
                ) : (
                  <Plus className="text-green-600" size={18} />
                )}
              </div>

              {openIndex === index && (
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}