import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import assets from '../assets/assets';

const Footer = () => {
  // Hover animations
  const footerLinkVariants = {
    initial: { y: 0, color: '#FBFAFB' }, 
    hover: { y: -2, color: '#E61316', transition: { duration: 0.2, ease: 'easeInOut' } },
  };

  const socialIconVariants = {
    initial: { scale: 1, color: '#FBFAFB' },
    hover: { scale: 1.2, color: '#E61316', transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-[#25257B] text-[#FBFAFB] py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <img src={assets.logo3} className="w-32 rounded-full" alt="" />
            <h3 className="text-2xl font-bold mb-4 text-[#E61316]">
              GREAT INDIA CARGO SERVICE
            </h3>

            <p className="text-[#FBFAFB] text-sm leading-relaxed max-w-xs text-center md:text-left opacity-90">
              Your trusted partner for reliable and efficient logistics solutions across India. We deliver with precision and care.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#E61316]">Quick Links</h3>

            <ul className="space-y-2 text-center md:text-left">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Network', path: '/network' },
                { name: 'Services', path: '/services' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <motion.li
                  key={link.name}
                  variants={footerLinkVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <Link
                    to={link.path}
                    className="text-[#FBFAFB] hover:text-[#E61316] transition duration-200"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#E61316]">Contact Us</h3>

            <ul className="space-y-2 text-center md:text-left">
              <motion.li
                variants={footerLinkVariants}
                initial="initial"
                whileHover="hover"
                className="flex items-center justify-center md:justify-start"
              >
                <FaMapMarkerAlt className="mr-2 text-[#E61316]" />
                <span className="text-[#FBFAFB] opacity-90">
                  155C/1 MAHATMA GANDHI ROAD KOLKATA-700007
                </span>
              </motion.li>

              <motion.li
                variants={footerLinkVariants}
                initial="initial"
                whileHover="hover"
                className="flex items-center justify-center md:justify-start"
              >
                <FaPhone className="mr-2 text-[#E61316]" />
                <a
                  href="tel:+919088988812"
                  className="text-[#FBFAFB] hover:text-[#E61316] transition duration-200"
                >
                  +91 90889 88812 +91 90887 88812 
                </a>
              </motion.li>

              <motion.li
                variants={footerLinkVariants}
                initial="initial"
                whileHover="hover"
                className="flex items-center justify-center md:justify-start"
              >
                <FaEnvelope className="mr-2 text-[#E61316]" />
                <a
                  href="mailto:gics0786@gmail.com"
                  className="text-[#FBFAFB] hover:text-[#E61316] transition duration-200"
                >
                  gics0786@gmail.com
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#E61316]">Follow Us</h3>

            <div className="flex space-x-4">
              {[
                { icon: FaFacebookF, href: 'https://facebook.com' },
                { icon: FaTwitter, href: 'https://twitter.com' },
                { icon: FaLinkedinIn, href: 'https://linkedin.com' },
                { icon: FaInstagram, href: 'https://instagram.com' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialIconVariants}
                  initial="initial"
                  whileHover="hover"
                  className="text-[#FBFAFB] text-2xl"
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-[#1A1A66] text-center"
        >
          <p className="text-[#FBFAFB] text-sm opacity-90">
            &copy; {new Date().getFullYear()} GREAT INDIA CARGO SERVICE. All rights reserved.
          </p>
        </motion.div>

      </div>
    </motion.footer>
  );
};

export default Footer;
