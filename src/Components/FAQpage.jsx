import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, Phone, Mail, Clock } from 'lucide-react';
import { Link } from "react-router-dom";
import Footer from '../Components/Footer';

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      category: "General Services",
      questions: [
        {
          question: "What services does FentonsIT provide?",
          answer: "FentonsIT offers comprehensive IT solutions including web development, mobile app development, cloud services, cybersecurity, IT consulting, system integration, and technical support services for businesses of all sizes."
        },
        {
          question: "How long has FentonsIT been in business?",
          answer: "FentonsIT has been providing reliable IT solutions and services, helping businesses transform digitally and achieve their technology goals with our experienced team of professionals."
        },
        {
          question: "Do you serve both local and international clients?",
          answer: "Yes, we serve clients both locally in Sri Lanka and internationally. Our team is equipped to work across different time zones and provide remote support and services globally."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What are your support hours?",
          answer: "Our technical support team is available Monday to Friday from 9:00 AM to 6:00 PM (Sri Lankan Standard Time). We also offer emergency support for critical issues outside regular hours for our premium clients."
        },
        {
          question: "How quickly do you respond to support requests?",
          answer: "We aim to respond to all support requests within 2-4 hours during business hours. Critical issues are prioritized and typically addressed within 1 hour. Response times may vary based on your service plan."
        },
        {
          question: "Do you provide remote support?",
          answer: "Yes, we provide comprehensive remote support services. Our team can access your systems securely to diagnose and resolve issues quickly, minimizing downtime and ensuring business continuity."
        }
      ]
    },
    {
      category: "Projects & Development",
      questions: [
        {
          question: "How long does a typical web development project take?",
          answer: "Project timelines vary based on complexity and requirements. A basic website typically takes 2-4 weeks, while complex web applications can take 2-6 months. We provide detailed timelines during the project planning phase."
        },
        {
          question: "Do you provide ongoing maintenance after project completion?",
          answer: "Yes, we offer comprehensive maintenance and support packages to ensure your systems remain updated, secure, and performing optimally. This includes regular updates, security patches, and technical support."
        },
        {
          question: "Can you work with our existing systems and technologies?",
          answer: "Absolutely! Our team has experience with a wide range of technologies and platforms. We can integrate with your existing systems and provide solutions that complement your current infrastructure."
        }
      ]
    },
    {
      category: "Pricing & Contracts",
      questions: [
        {
          question: "How do you structure your pricing?",
          answer: "Our pricing is tailored to each project's specific requirements. We offer both fixed-price projects and hourly rates depending on the scope. We provide detailed quotes after understanding your needs through our consultation process."
        },
        {
          question: "Do you require long-term contracts?",
          answer: "Contract terms depend on the type of service. One-time projects don't require long-term commitments, while ongoing support and maintenance services may involve monthly or annual agreements for better rates and priority support."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, for larger projects, we can arrange flexible payment schedules typically broken down into milestones. This ensures you only pay for completed work and helps manage cash flow for bigger investments."
        }
      ]
    },
    {
      category: "Security & Compliance",
      questions: [
        {
          question: "How do you ensure data security and privacy?",
          answer: "We implement industry-standard security measures including encrypted data transmission, secure hosting environments, regular security audits, and strict access controls. We also sign NDAs and follow data protection regulations."
        },
        {
          question: "Are you compliant with international standards?",
          answer: "Yes, we follow international best practices and standards for security, quality, and data protection. Our processes are designed to meet requirements for various compliance frameworks depending on your industry needs."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold pt-12 text-white mb-4">How can we help you?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our IT services, support, and solutions. 
            Can't find what you're looking for? Contact our team directly.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
            <MessageCircle className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
            <p className="text-gray-300 text-sm">Get instant support from our team</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
            <Phone className="w-8 h-8 text-green-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
            <p className="text-gray-300 text-sm">Speak directly with our experts</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors">
            <Mail className="w-8 h-8 text-purple-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
            <p className="text-gray-300 text-sm">Send us your detailed questions</p>
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-800 rounded-lg border border-gray-700">
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-xl font-semibold text-white">{category.category}</h3>
              </div>
              <div className="divide-y divide-gray-700">
                {category.questions.map((faq, questionIndex) => {
                  const faqIndex = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openFAQ === faqIndex;
                  
                  return (
                    <div key={questionIndex}>
                      <button
                        className="w-full text-left p-6 hover:bg-gray-750 transition-colors focus:outline-none focus:bg-gray-750"
                        onClick={() => toggleFAQ(faqIndex)}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-medium text-white pr-4">
                            {faq.question}
                          </h4>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Need Help Section */}
        <div className="mt-16 bg-gray-700 blur-2 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Still need help?</h3>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Our support team is ready to assist you with any questions or technical issues. 
            Get in touch and we'll respond as quickly as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
            <button className="bg-[#ff6000] hover:bg-[#ff4400] text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Contact Support
            </button>
            </Link>
          </div>
        </div>
      </main>

    </div>
  );
};

export default FAQPage;