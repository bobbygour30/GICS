import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFilePdf, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import assets from '../assets/assets';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    option: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const serviceID = 'service';
    const templateID = 'templath';
    const publicKey = 'P-bU-6NjR';

    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      option: formData.option || 'General Inquiry',
    }, publicKey)
      .then(() => {
        setIsSent(true);
        setFormData({ name: '', email: '', phone: '', option: '' });
        setTimeout(() => setIsSent(false), 6000);
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setError('Failed to send message. Please try again or contact us directly.');
      })
      .finally(() => setIsLoading(false));
  };

  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = '/files/branch-list.pdf';
    link.download = 'GICS-Branch-List.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#F4F4F8] min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${assets.truck})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#25257B]/95 via-[#25257B]/90 to-[#E61316]/40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E61316] rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-center text-white px-6 max-w-5xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-95">
            We're here to help you move forward
          </p>
          <div className="mt-8 h-1 w-48 bg-[#E61316] mx-auto rounded-full"></div>
        </motion.div>
      </section>

      {/* Contact Form */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-[#25257B] text-center mb-12"
          >
            Request a Free Consultation
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl border border-[#25257B]/10 p-10 max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <motion.div>
                <label className="block text-[#25257B] font-bold text-lg mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 rounded-xl border-2 border-[#25257B]/20 focus:border-[#E61316] focus:outline-none focus:ring-4 focus:ring-[#E61316]/20 transition-all duration-300"
                  placeholder="John Doe"
                />
              </motion.div>

              <motion.div>
                <label className="block text-[#25257B] font-bold text-lg mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 rounded-xl border-2 border-[#25257B]/20 focus:border-[#E61316] focus:outline-none focus:ring-4 focus:ring-[#E61316]/20 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </motion.div>

              <motion.div>
                <label className="block text-[#25257B] font-bold text-lg mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 rounded-xl border-2 border-[#25257B]/20 focus:border-[#E61316] focus:outline-none focus:ring-4 focus:ring-[#E61316]/20 transition-all duration-300"
                  placeholder="+91 98765 43210"
                />
              </motion.div>

              <motion.div>
                <label className="block text-[#25257B] font-bold text-lg mb-2">I'm Interested In</label>
                <select
                  name="option"
                  value={formData.option}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-xl border-2 border-[#25257B]/20 focus:border-[#E61316] focus:outline-none focus:ring-4 focus:ring-[#E61316]/20 transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  <option value="general-parcel">General Parcel Service</option>
                  <option value="courier-service">Courier Service</option>
                  <option value="ftl">Full Truckload (FTL)</option>
                  <option value="outdoor-branding">Outdoor Branding on Trucks</option>
                  <option value="career">Career Opportunities</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </motion.div>

              {isSent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 text-green-700 p-4 rounded-lg text-center font-bold flex items-center justify-center gap-2"
                >
                  Message sent successfully! We'll contact you soon.
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-red-50 text-red-700 p-4 rounded-lg text-center font-medium"
                >
                  {error}
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#25257B] to-[#E61316] text-white text-xl font-bold py-5 rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-300 uppercase tracking-wider flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message <FaPaperPlane />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* Get In Touch + Map */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-[#E61316] text-center mb-16"
          >
            Get In Touch
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-[#25257B] to-[#E61316] text-white p-10 rounded-2xl shadow-2xl"
            >
              <h3 className="text-3xl font-bold mb-8">Corporate Office</h3>
              <div className="space-y-8 text-lg">
                <div className="flex items-start gap-5">
                  <div className="text-3xl"><FaMapMarkerAlt /></div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="opacity-90">
                      155C/1 MAHATMA GANDHI ROAD KOLKATA-700007
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="text-3xl"><FaEnvelope /></div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:gics0786@gmail.com" className="hover:underline">gics0786@gmail.com</a><br />
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="text-3xl"><FaPhone /></div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+916289471244" className="text-2xl font-bold hover:underline">+91 62894 71244</a>
                  </div>
                </div>

                <div className="flex items-center gap-5 pt-6 border-t border-white/20">
                  <div className="text-3xl"><FaFilePdf /></div>
                  <button
                    onClick={handleDownloadClick}
                    className="font-bold text-xl hover:underline"
                  >
                    Download Branch List (PDF)
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Google Map */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden shadow-2xl border-8 border-[#25257B]/10"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3683.985627168562!2d88.35586507530067!3d22.57964087948672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDM0JzQ2LjciTiA4OMKwMjEnMzAuNCJF!5e0!3m2!1sen!2sin!4v1763535683068!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GICS Logistics Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer Tagline */}
      <div className="py-12 text-center bg-[#25257B] text-white">
        <p className="text-xl font-semibold">
          Trusted by Thousands • Moving India Forward Since 2015
        </p>
      </div>
    </div>
  );
};

export default ContactUs;