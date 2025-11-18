import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTruck, FaWarehouse, FaNetworkWired, 
  FaCogs, FaMicrochip, FaLeaf, FaChevronDown 
} from 'react-icons/fa';
import assets from '../assets/assets';

const PRIMARY_BLUE = "#25257B";
const PRIMARY_RED = "#E61316";
const LIGHT_BG = "#F4F4F8";

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.15, ease: "easeOut" } }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.03, transition: { duration: 0.3, ease: "easeInOut" } }
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0, color: PRIMARY_BLUE },
    hover: {
      scale: 1.2,
      rotate: 360,
      color: PRIMARY_RED,
      transition: {
        rotate: { duration: 0.6, ease: "linear" },
        scale: { duration: 0.3, ease: "easeInOut" },
        color: { duration: 0.3, ease: "easeInOut" }
      }
    }
  };

  const accordionVariants = {
    closed: { opacity: 0, maxHeight: 0 },
    open: {
      opacity: 1,
      maxHeight: 200,
      transition: {
        opacity: { duration: 0.2, ease: "easeOut" },
        maxHeight: { duration: 0.3, ease: "easeOut" }
      }
    }
  };

  const chevronVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180, transition: { duration: 0.3 } }
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    { question: "Why is GREAT INDIA CARDO SERVICE reliable?", answer: "We deliver on our promises with a proven track record of safety and on-time deliveries." },
    { question: "How do we tailor solutions for your business?", answer: "We offer customized logistics solutions designed around your business needs." },
    { question: "What technology do we use?", answer: "We use modern tracking, routing, and planning tools for complete transparency." },
    { question: "How extensive is our network?", answer: "We provide nationwide logistics coverage for businesses of all sizes." },
    { question: "How do we prioritize customers?", answer: "We take a customer-centric approach and always put your goals first." },
    { question: "How do we commit to sustainability?", answer: "We focus on eco-friendly transport practices to reduce environmental impact." }
  ];

  return (
    <div className="bg-white overflow-hidden">

      {/* HERO SECTION */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.truck})` }}
      >
        <div className="absolute inset-0 opacity-70"
          style={{ background: `linear-gradient(to right, ${PRIMARY_BLUE}, ${PRIMARY_RED})` }}
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About GREAT INDIA CARDO SERVICE
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            Your trusted partner for seamless logistics solutions across India.
          </p>
        </motion.div>
      </section>

      {/* ABOUT US */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16"
        style={{ background: LIGHT_BG }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={childVariants}
            className="text-4xl font-extrabold mb-8 text-center"
            style={{ color: PRIMARY_BLUE }}
          >
            About Us
          </motion.h2>

          <motion.p
            variants={childVariants}
            className="text-lg mb-12 text-center max-w-3xl mx-auto leading-relaxed text-gray-700"
          >
            GREAT INDIA CARDO SERVICE delivers reliable and customer-focused logistics solutions throughout India.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white p-6 rounded-xl shadow-md border"
              style={{ borderColor: PRIMARY_BLUE }}
            >
              <motion.h3
                variants={childVariants}
                className="text-2xl font-semibold mb-4"
                style={{ color: PRIMARY_BLUE }}
              >
                Who We Are
              </motion.h3>
              <motion.p variants={childVariants} className="text-gray-700">
                We are a premier logistics provider enabling businesses to simplify transport and distribution operations.
              </motion.p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white p-6 rounded-xl shadow-md border"
              style={{ borderColor: PRIMARY_BLUE }}
            >
              <motion.h3
                variants={childVariants}
                className="text-2xl font-semibold mb-4"
                style={{ color: PRIMARY_BLUE }}
              >
                Our Mission
              </motion.h3>
              <motion.p variants={childVariants} className="text-gray-700">
                We aim to provide scalable, cost-effective, and seamless logistics solutions tailored to business needs.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* WHAT WE DO */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            variants={childVariants}
            className="text-4xl font-extrabold mb-12 text-center"
            style={{ color: PRIMARY_BLUE }}
          >
            What We Do
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FaTruck, title: "Comprehensive Road Transport" },
              { icon: FaWarehouse, title: "Secure Warehousing Solutions" },
              { icon: FaNetworkWired, title: "Efficient Distribution Network" },
              { icon: FaCogs, title: "Tailored Logistics Solutions" },
              { icon: FaMicrochip, title: "Advanced Technology Integration" },
              { icon: FaLeaf, title: "Commitment to Sustainability" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="p-6 rounded-xl shadow-lg text-center border bg-white"
                style={{ borderColor: PRIMARY_BLUE }}
              >
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                  className="text-4xl mb-4 flex justify-center"
                >
                  <item.icon />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: PRIMARY_BLUE }}>
                  {item.title}
                </h3>
                <p className="text-gray-700">
                  High-quality professional logistics services with full nationwide coverage.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ACCORDION */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        className="py-16"
        style={{ background: LIGHT_BG }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            variants={childVariants}
            className="text-4xl font-extrabold mb-12 text-center"
            style={{ color: PRIMARY_BLUE }}
          >
            Why Choose Us
          </motion.h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="rounded-xl shadow-md border bg-white overflow-hidden"
                style={{ borderColor: PRIMARY_BLUE }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center p-6 text-lg font-semibold"
                  style={{ color: PRIMARY_BLUE }}
                >
                  {item.question}
                  <motion.div
                    variants={chevronVariants}
                    animate={openIndex === index ? "open" : "closed"}
                    className="text-xl"
                    style={{ color: PRIMARY_RED }}
                  >
                    <FaChevronDown />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      variants={accordionVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="px-6 pb-6 text-gray-700"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
