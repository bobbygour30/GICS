import React from 'react';
import { motion } from 'framer-motion';
import { FaBox, FaTruck, FaRoad, FaAd } from 'react-icons/fa';
import assets from '../assets/assets';

const Services = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.15, ease: 'easeOut' } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { scale: 1.03, y: -8, transition: { duration: 0.3 } },
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.25, 
      rotate: 360,
      color: '#E61316',
      transition: { 
        rotate: { duration: 0.7, ease: 'linear' },
        scale: { duration: 0.3 }
      }
    }
  };

  return (
    <div className="bg-[#F4F4F8] overflow-hidden min-h-screen">
      {/* Hero Section - Same as Network */}
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${assets.truck})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#25257B]/95 via-[#25257B]/90 to-[#E61316]/30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E61316] rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative z-10 text-center text-white px-6 max-w-5xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-95 mb-3">
            Large Scale Operations with Quality, Reliability, and On-Time Delivery
          </p>
          <p className="text-lg md:text-xl font-light opacity-90">
            Covering 24 States & 5 Union Territories with 1245 Branches & Franchisees
          </p>
          <div className="mt-8 h-1 w-40 bg-[#E61316] mx-auto rounded-full"></div>
        </motion.div>
      </section>

      {/* Services Sections */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

          {/* General Parcel */}
          <motion.div variants={childVariants}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#25257B] text-center mb-12">
              General Parcel
            </h2>
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl shadow-xl border border-[#25257B]/10 p-10 hover:shadow-2xl transition-all duration-500"
            >
              <motion.div
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                className="text-[#25257B] text-7xl mb-8 flex justify-center"
              >
                <FaBox />
              </motion.div>
              <div className="text-gray-700 space-y-6 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                <p>
                  General Parcel forms the core of GICS business, involving pan-Indian movement of consignments of varying size and weight across the country on a Less than Truck Load (LTL) godown-to-godown basis. We also provide door collection and door delivery options at a cost.
                </p>
                <p>
                  We operate across 24 States and 5 Union Territories, covering all major cities and towns in India through a network of 1245 branches and franchisees. Our wide service network and company-owned vehicles ensure the safest possible movement for consignments with minimal theft, pilferage, or damage.
                </p>
              </div>
              <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-gray-700 font-medium">
                {[
                  "Surface transportation for best last-mile connectivity",
                  "Online track & trace facility",
                  "Dedicated company-owned vehicles",
                  "24x7x365 days operations",
                  "Consignment size ranging from 1 kg to 40 tons",
                  "Door pick-up and door delivery facility",
                  "Dedicated customer care window",
                  "On-time delivery",
                  "Extensive nationwide network",
                  "Best-in-class service record"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 bg-[#25257B]/5 px-5 py-3 rounded-lg"
                  >
                    <span className="text-[#E61316] text-xl">✔</span> {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Courier Service */}
          <motion.div variants={childVariants}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#E61316] text-center mb-12">
              Courier Service
            </h2>
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl shadow-xl border border-[#E61316]/20 p-10 hover:shadow-2xl transition-all duration-500"
            >
              <motion.div variants={iconVariants} initial="initial" whileHover="hover" className="text-[#E61316] text-7xl mb-8 flex justify-center">
                <FaTruck />
              </motion.div>
              <div className="text-gray-700 space-y-6 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                <p>
                  We offer courier services for time-sensitive documents and packages, primarily within select regions, with out-of-state locations serviced through trusted partnerships.
                </p>
                <p>
                  In compliance with Indian laws, we do not provide service for mail and letters. Our offerings include time-certain deliveries and local ground transport for hand-deliveries.
                </p>
              </div>
              <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-gray-700 font-medium">
                {[
                  "Door-to-door time-bound service",
                  "Multi-modal connectivity",
                  "Time-bound deliveries",
                  "Special service to and from remote locations",
                  "Topay / COD facilities on delivery",
                  "Return / reverse pick-ups",
                  "Late pick-ups and early connections",
                  "Cash management and L.C. service for banks"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 bg-[#E61316]/5 px-5 py-3 rounded-lg"
                  >
                    <span className="text-[#E61316] text-xl">✔</span> {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Full Truckload Services */}
          <motion.div variants={childVariants}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#25257B] text-center mb-12">
              Full Truckload Services (FTL)
            </h2>
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl shadow-xl border border-[#25257B]/10 p-10 hover:shadow-2xl transition-all duration-500"
            >
              <motion.div variants={iconVariants} initial="initial" whileHover="hover" className="text-[#25257B] text-7xl mb-8 flex justify-center">
                <FaRoad />
              </motion.div>
              <div className="text-gray-700 space-y-6 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                <p>
                  Our Full Truckload (FTL) services leverage our network of select branches and independent brokerage agents to provide door-to-door transport.
                </p>
                <p>
                  Goods are loaded at the customer's premises and delivered to the specified destination, ideal for manufacturers with large quantities of goods.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Outdoor Branding */}
          <motion.div variants={childVariants}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#E61316] text-center mb-12">
              Outdoor Branding
            </h2>
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl shadow-xl border border-[#E61316]/20 p-10 hover:shadow-2xl transition-all duration-500"
            >
              <motion.div variants={iconVariants} initial="initial" whileHover="hover" className="text-[#E61316] text-7xl mb-8 flex justify-center">
                <FaAd />
              </motion.div>
              <div className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                <p>
                  GICS  permits the usage of its vehicles for branding. Reputed corporates such as Mahindra & Mahindra, Bosch, Maruti, Michelin, Hindustan Petroleum, United India Insurance, and National India Insurance have partnered with us.
                </p>
                <p className="mt-4 font-semibold text-[#25257B]">
                  Our vehicles traverse Indian highways, offering significant value addition and great brand recall for your products.
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </motion.section>
    </div>
  );
};

export default Services;