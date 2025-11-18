import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaSearch } from 'react-icons/fa';
import assets from '../assets/assets';

const TrackConsignment = () => {
  const [consignmentNumber, setConsignmentNumber] = useState('');

  const handleInputChange = (e) => {
    setConsignmentNumber(e.target.value.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (consignmentNumber.trim()) {
      console.log('Tracking Consignment/LR:', consignmentNumber);
      alert(`Tracking consignment: ${consignmentNumber}\n(Real tracking API would be called here)`);
      // In real app: redirect to tracking result page or show modal
    }
  };

  return (
    <div className="bg-[#F4F4F8] min-h-screen overflow-hidden">
      {/* Hero Section - Same as Network */}
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${assets.truck})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#25257B]/95 via-[#25257B]/90 to-[#E61316]/40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E61316] rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative z-10 text-center text-white px-6 max-w-5xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Track Your Consignment
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-95 mb-4">
            Real-time tracking across India
          </p>
          <p className="text-lg md:text-xl font-light opacity-90">
            Serving 24 States & 5 Union Territories with 1245+ Branches
          </p>
          <div className="mt-8 h-1 w-64 bg-[#E61316] mx-auto rounded-full"></div>
        </motion.div>
      </section>

      {/* Track Consignment Form */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-[#25257B] text-center mb-12"
          >
            Track Your Shipment
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -10, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            className="bg-white rounded-3xl shadow-2xl border border-[#25257B]/10 p-12 max-w-2xl mx-auto"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="text-[#E61316] text-8xl mb-8 flex justify-center"
            >
              <FaMapMarkedAlt />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-700 text-center mb-10 font-medium"
            >
              Enter your <strong>Consignment Number</strong> or <strong>LR Number</strong> below to track your shipment in real-time.
            </motion.p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-[#25257B] font-bold text-lg mb-3 text-center">
                  Consignment / LR Number <span className="text-[#E61316]">*</span>
                </label>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="text"
                    value={consignmentNumber}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. DEL12345678"
                    className="w-full px-8 py-6 text-xl font-mono text-center tracking-wider uppercase rounded-2xl border-2 border-[#25257B]/20 focus:border-[#E61316] focus:outline-none focus:ring-4 focus:ring-[#E61316]/20 transition-all duration-300 shadow-inner"
                  />
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#25257B]/40 pointer-events-none">
                    <FaSearch className="text-2xl" />
                  </div>
                </motion.div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[#25257B] to-[#E61316] text-white text-2xl font-bold py-6 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 uppercase tracking-wider flex items-center justify-center gap-4"
              >
                <FaSearch />
                Track Now
              </motion.button>
            </form>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 text-center text-gray-600"
            >
              <p className="text-sm">
                Need help? Contact us at{' '}
                <a href="tel:+919350167349" className="text-[#E61316] font-bold hover:underline">
                  +91 62894 71244
                </a>{' '}
                or email{' '}
                <a href="mailto:info.grlogistics@gmail.com" className="text-[#E61316] font-bold hover:underline">
                  gics0786@gmail.com
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Bottom Tagline */}
      <div className="py-12 bg-[#25257B] text-white text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xl md:text-2xl font-semibold"
        >
          Your cargo. Our responsibility. Tracked 24×7.
        </motion.p>
      </div>
    </div>
  );
};

export default TrackConsignment;