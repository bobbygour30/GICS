import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBox, FaMotorcycle, FaTruck, FaPaperPlane } from 'react-icons/fa';
import assets from '../assets/assets';

const PickupRequest = () => {
  const [formType, setFormType] = useState('parcel');

  const [parcelFormData, setParcelFormData] = useState({
    gstNo: '', customerName: '', noOfPackages: '', approxWeight: '',
    contactPersonName: '', contactPersonMobile: '', email: '',
    originPincode: '', destinationPincode: '', pickupStreetAddress: '',
    pickupApartment: '', pickupCityName: '', receiverGstNo: '', receiverName: '',
    materialImage1: null, materialImage2: null,
  });

  const [twoWheelerFormData, setTwoWheelerFormData] = useState({
    fullName: '', email: '', contactPersonMobile: '', vehicleNo: '',
    twoWheelerCC: '', twoWheelerType: '', originPincode: '',
    destinationPincode: '', additionalRequests: '',
  });

  const handleParcelInputChange = (e) => {
    const { name, value, files } = e.target;
    setParcelFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleTwoWheelerInputChange = (e) => {
    const { name, value } = e.target;
    setTwoWheelerFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleParcelSubmit = (e) => {
    e.preventDefault();
    console.log('Parcel Pickup Request:', parcelFormData);
    alert('Parcel pickup request submitted successfully!');
    setParcelFormData({
      gstNo: '', customerName: '', noOfPackages: '', approxWeight: '',
      contactPersonName: '', contactPersonMobile: '', email: '',
      originPincode: '', destinationPincode: '', pickupStreetAddress: '',
      pickupApartment: '', pickupCityName: '', receiverGstNo: '', receiverName: '',
      materialImage1: null, materialImage2: null,
    });
  };

  const handleTwoWheelerSubmit = (e) => {
    e.preventDefault();
    console.log('2-Wheeler Pickup Request:', twoWheelerFormData);
    alert('2-Wheeler pickup request submitted successfully!');
    setTwoWheelerFormData({
      fullName: '', email: '', contactPersonMobile: '', vehicleNo: '',
      twoWheelerCC: '', twoWheelerType: '', originPincode: '',
      destinationPincode: '', additionalRequests: '',
    });
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
            Schedule Pickup
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-95 mb-4">
            Doorstep collection for Parcels & 2-Wheelers
          </p>
          <p className="text-lg md:text-xl font-light opacity-90">
            Fast • Reliable • Nationwide Coverage
          </p>
          <div className="mt-8 h-1 w-64 bg-[#E61316] mx-auto rounded-full"></div>
        </motion.div>
      </section>

      {/* Toggle Buttons + Form */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Toggle Buttons */}
          <div className="flex justify-center gap-8 mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFormType('parcel')}
              className={`flex items-center gap-4 px-10 py-6 rounded-2xl font-bold text-xl shadow-xl transition-all duration-300 ${
                formType === 'parcel'
                  ? 'bg-gradient-to-r from-[#25257B] to-[#E61316] text-white'
                  : 'bg-white text-[#25257B] border-2 border-[#25257B]/20'
              }`}
            >
              <FaBox className="text-3xl" />
              Parcel Pickup
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFormType('twoWheeler')}
              className={`flex items-center gap-4 px-10 py-6 rounded-2xl font-bold text-xl shadow-xl transition-all duration-300 ${
                formType === 'twoWheeler'
                  ? 'bg-gradient-to-r from-[#25257B] to-[#E61316] text-white'
                  : 'bg-white text-[#25257B] border-2 border-[#25257B]/20'
              }`}
            >
              <FaMotorcycle className="text-3xl" />
              2-Wheeler Pickup
            </motion.button>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl shadow-2xl border border-[#25257B]/10 p-10 max-w-5xl mx-auto"
          >
            <div className="text-center mb-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`inline-block p-6 rounded-full ${
                  formType === 'parcel' ? 'bg-[#E61316]/10 text-[#E61316]' : 'bg-[#25257B]/10 text-[#25257B]'
                }`}
              >
                {formType === 'parcel' ? <FaBox className="text-6xl" /> : <FaTruck className="text-6xl" />}
              </motion.div>
              <h2 className="text-4xl font-extrabold text-[#25257B] mt-6">
                {formType === 'parcel' ? 'Parcel Pickup Request' : '2-Wheeler Transport Request'}
              </h2>
            </div>

            {formType === 'parcel' ? (
              <form onSubmit={handleParcelSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { label: "GST Number", name: "gstNo", required: true },
                  { label: "Customer Name", name: "customerName", required: true },
                  { label: "No. of Packages", name: "noOfPackages", type: "number", required: true },
                  { label: "Approx Weight (kg)", name: "approxWeight", type: "number", required: true },
                  { label: "Contact Person Name", name: "contactPersonName", required: true },
                  { label: "Contact Mobile", name: "contactPersonMobile", type: "tel", required: true },
                  { label: "Email Address", name: "email", type: "email", required: true },
                  { label: "Origin Pincode", name: "originPincode", required: true },
                  { label: "Destination Pincode", name: "destinationPincode", required: true },
                  { label: "Pickup Street Address", name: "pickupStreetAddress", colSpan: "md:col-span-2", required: true },
                  { label: "Apartment/Floor (Optional)", name: "pickupApartment", colSpan: "md:col-span-2" },
                  { label: "Pickup City", name: "pickupCityName", required: true },
                  { label: "Receiver GST (Optional)", name: "receiverGstNo" },
                  { label: "Receiver Name", name: "receiverName", colSpan: "md:col-span-2", required: true },
                ].map((field, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={field.colSpan || "col-span-1"}
                  >
                    <label className="block text-[#25257B] font-bold text-lg mb-2">
                      {field.label} {field.required && <span className="text-[#E61316]">*</span>}
                    </label>
                    <input
                      type={field.type || "text"}
                      name={field.name}
                      value={parcelFormData[field.name]}
                      onChange={handleParcelInputChange}
                      required={field.required}
                      className="w-full px-6 py-4 rounded-xl border-2 border-[#25257B]/20 focus:border-[#E61316] focus:outline-none focus:ring-4 focus:ring-[#E61316]/20 transition-all duration-300"
                      placeholder={field.label}
                    />
                  </motion.div>
                ))}

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} className="md:col-span-2 space-y-4">
                  <label className="block text-[#25257B] font-bold text-lg">Upload Material Images (Optional)</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="file" name="materialImage1" onChange={handleParcelInputChange} accept="image/*" className="file:mr-4 file:py-4 file:px-6 file:rounded-xl file:border-0 file:bg-[#25257B]/10 file:text-[#25257B] hover:file:bg-[#25257B]/20" />
                    <input type="file" name="materialImage2" onChange={handleParcelInputChange} accept="image/*" className="file:mr-4 file:py-4 file:px-6 file:rounded-xl file:border-0 file:bg-[#25257B]/10 file:text-[#25257B] hover:file:bg-[#25257B]/20" />
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#25257B] to-[#E61316] text-white text-xl font-bold py-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 uppercase tracking-wider flex items-center justify-center gap-3"
                  >
                    Submit Parcel Request <FaPaperPlane />
                  </button>
                </motion.div>
              </form>
            ) : (
              <form onSubmit={handleTwoWheelerSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 2-Wheeler Fields */}
                {[
                  { label: "Full Name", name: "fullName", required: true },
                  { label: "Email", name: "email", type: "email", required: true },
                  { label: "Mobile Number", name: "contactPersonMobile", type: "tel", required: true },
                  { label: "Vehicle Number", name: "vehicleNo", required: true },
                  { label: "Engine CC", name: "twoWheelerCC", type: "select", options: ["", "100-150cc", "150-250cc", "250cc+"], required: true },
                  { label: "Vehicle Type", name: "twoWheelerType", type: "select", options: ["", "Motorcycle", "Scooter", "Moped"], required: true },
                  { label: "Pickup Pincode", name: "originPincode", required: true },
                  { label: "Destination Pincode", name: "destinationPincode", required: true },
                  { label: "Additional Requests", name: "additionalRequests", colSpan: "md:col-span-2", type: "textarea" },
                ].map((field, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className={field.colSpan || "col-span-1"}>
                    <label className="block text-[#25257B] font-bold text-lg mb-2">
                      {field.label} {field.required && <span className="text-[#E61316]">*</span>}
                    </label>
                    {field.type === "select" ? (
                      <select
                        name={field.name}
                        value={twoWheelerFormData[field.name]}
                        onChange={handleTwoWheelerInputChange}
                        required={field.required}
                        className="w-full px-6 py-4 rounded-xl border-2 border-[#25257B]/20 focus:border-[#E61316] focus:outline-none focus:ring-4 focus:ring-[#E61316]/20 transition-all duration-300"
                      >
                        {field.options.map(opt => (
                          <option key={opt} value={opt}>{opt || "Select"}</option>
                        ))}
                      </select>
                    ) : field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        value={twoWheelerFormData[field.name]}
                        onChange={handleTwoWheelerInputChange}
                        rows="4"
                        className="w-full px-6 py-4 rounded-xl border-2 border-[#25257B]/20 focus:border-[#E61316] focus:outline-none focus:ring-4 focus:ring-[#E61316]/20 transition-all duration-300 resize-none"
                        placeholder="Any special instructions..."
                      />
                    ) : (
                      <input
                        type={field.type || "text"}
                        name={field.name}
                        value={twoWheelerFormData[field.name]}
                        onChange={handleTwoWheelerInputChange}
                        required={field.required}
                        className="w-full px-6 py-4 rounded-xl border-2 border-[#25257B]/20 focus:border-[#E61316] focus:outline-none focus:ring-4 focus:ring-[#E61316]/20 transition-all duration-300"
                        placeholder={field.label}
                      />
                    )}
                  </motion.div>
                ))}

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#25257B] to-[#E61316] text-white text-xl font-bold py-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 uppercase tracking-wider flex items-center justify-center gap-3"
                  >
                    Submit 2-Wheeler Request <FaPaperPlane />
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer Tagline */}
      <div className="py-12 bg-[#25257B] text-white text-center">
        <p className="text-xl md:text-2xl font-semibold">
          We Pick Up. You Relax. Delivered with Care.
        </p>
      </div>
    </div>
  );
};

export default PickupRequest;