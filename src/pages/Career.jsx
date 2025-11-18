import React, { useState } from 'react';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const Career = () => {
  const [formData, setFormData] = useState({
    firstName: '',
 lastName: '',
    fatherName: '',
    qualification: '',
    experience: '',
    mobile: '',
    email: '',
    address: '',
    state: '',
    city: '',
    licenseNumber: '',
    licenseType: '',
    requestNote: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Career Form Submitted:', formData);
    alert('Thank you! Your application has been submitted successfully.');
    setFormData({
      firstName: '', lastName: '', fatherName: '', qualification: '', experience: '',
      mobile: '', email: '', address: '', state: '', city: '',
      licenseNumber: '', licenseType: '', requestNote: ''
    });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.15 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-[#F4F4F8] min-h-screen overflow-hidden">
      {/* Hero Section - Same as Network */}
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${assets.truck})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#252Aless57B]/95 via-[#25257B]/90 to-[#E61316]/40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E61316] rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-center text-white px-6 max-w-5xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Careers at GICS 
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-95 italic">
            “Pleasure in the job puts perfection in the work.” – Aristotle
          </p>
          <div className="mt-8 h-1 w-48 bg-[#E61316] mx-auto rounded-full"></div>
        </motion.div>
      </section>

      {/* Career Opportunities */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            variants={childVariants}
            className="text-4xl md:text-5xl font-extrabold text-[#25257B] text-center mb-12"
          >
            Join Our Driving Force
          </motion.h2>

          <motion.div
            variants={childVariants}
            className="bg-white rounded-2xl shadow-xl border border-[#25257B]/10 p-10 hover:shadow-2xl transition-all duration-500"
          >
            <h3 className="text-3xl font-bold text-[#E61316] mb-6 text-center">
              Driver Opportunities
            </h3>
            <div className="text-gray-700 text-lg leading-relaxed space-y-6 text-center max-w-3xl mx-auto">
              <p>
                We are looking for skilled and responsible <strong>Heavy Vehicle Drivers</strong> to join our growing fleet. You will be the backbone of our nationwide logistics network — ensuring safe, timely, and efficient delivery of goods across India.
              </p>
              <p>
                We offer <strong>attractive incentives</strong> including fuel efficiency bonuses, tire & maintenance coverage, target achievement rewards, <strong>accidental insurance</strong>, <strong>PF & ESI benefits</strong>, and a supportive work environment.
              </p>
              <p className="text-[#25257B] font-semibold text-xl mt-8">
                Be part of a trusted name in logistics. Drive with pride. Grow with us.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Application Form */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            variants={childVariants}
            className="text-4xl md:text-5xl font-extrabold text-[#E61316] text-center mb-12"
          >
            Apply Now
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-[#25257B]/5 to-[#E61316]/5 rounded-2xl shadow-2xl p-10 border border-[#25257B]/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { label: "First Name", name: "firstName", type: "text" },
                { label: "Last Name", name: "lastName", type: "text" },
                { label: "Father's Name", name: "fatherName", type: "text" },
                { label: "Qualification", name: "qualification", type: "text" },
                { label: "Experience (Years)", name: "experience", type: "number" },
                { label: "Mobile Number", name: "mobile", type: "tel" },
                { label: "Email ID", name: "email", type: "email" },
                { label: "State", name: "state", type: "text" },
                { label: "City", name: "city", type: "text" },
                { label: "Driving License Number", name: "licenseNumber", type: "text" },
              ].map((field, i) => (
                <motion.div key={i} variants={childVariants}>
                  <label className="block text-[#25257B] font-bold text-lg mb-2">
                    {field.label} <span className="text-[#E61316]">*</span>
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-[#25257B]/20 focus:border-[#E61316] focus:outline-none focus:ring-4 focus:ring-[#E61316]/20 transition-all duration-300 text-gray-800 font-medium"
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                  />
                </motion.div>
              ))}

              <motion.div variants={childVariants}>
                <label className="block text-[#25257B] font-bold text-lg mb-2">
                  License Type <span className="text-[#E61316]">*</span>
                </label>
                <select
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-[#25257B]/20 focus:border-[#E61316] focus:outline-none focus:ring-4 focus:ring-[#E61316]/20 transition-all duration-300 text-gray-800 font-medium"
                >
                  <option value="">Select License Type</option>
                  <option value="LMV">LMV (Light Motor Vehicle)</option>
                  <option value="HMV">HMV (Heavy Motor Vehicle)</option>
                  <option value="Both">Both LMV & HMV</option>
                </select>
              </motion.div>

              <motion.div variants={childVariants} className="md:col-span-2">
                <label className="block text-[#25257B] font-bold text-lg mb-2">Address <span className="text-[#E61316]">*</span></label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-5 py-4 rounded-xl border-2 border-[#25257B]/20 focus:border-[#E61316] focus:outline-none focus:ring-4 focus:ring-[#E61316]/20 transition-all duration-300 text-gray-800 font-medium resize-none"
                  placeholder="Full permanent address"
                />
              </motion.div>

              <motion.div variants={childVariants} className="md:col-span-2">
                <label className="block text-[#25257B] font-bold text-lg mb-2">Additional Note / Message</label>
                <textarea
                  name="requestNote"
                  value={formData.requestNote}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-5 py-4 rounded-xl border-2 border-[#25257B]/20 focus:border-[#E61316] focus:outline-none focus:ring-4 focus:ring-[#E61316]/20 transition-all duration-300 text-gray-800 font-medium resize-none"
                  placeholder="Any special request, preferred route, or message..."
                />
              </motion.div>

              <motion.div variants={childVariants} className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#25257B] to-[#E61316] text-white text-xl font-bold py-5 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 uppercase tracking-wider"
                >
                  Submit Application
                </button>
              </motion.div>
            </div>
          </motion.form>
        </div>
      </motion.section>

      {/* Footer Note */}
      <div className="py-12 text-center text-gray-600 bg-[#F4F4F8]">
        <p className="text-lg font-medium">
          We are an equal opportunity employer • Join the GICS Family Today
        </p>
      </div>
    </div>
  );
};

export default Career;