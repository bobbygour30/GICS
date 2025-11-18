import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Network = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const offices = {
    BiharDelivery: [
      { location: "ARARIA COURT", name: "SANJAY BHAGAT", address: "STATION ROAD NEAR MARWARI DHARMSALA, ARARIA COURT-854311", contacts: "7004198649" },
      { location: "FORBESGANJ", name: "MANOJ KUMAR", address: "KALI MELA ROAD, WARD NO 1, FORBESGANJ-854318", contacts: "8863981428 / 7004322665" },
      { location: "GULABBAGH", name: "AJAY YADAV", address: "GULABBAGH", contacts: "7870141478" },
      { location: "KISHANGANJ", name: "RAJKUMAR MONDAL", address: "SANCHALAL, BARELA COMPLEX, CALTAX CHOWK, 3 NO. RAIL GATE, BIHAR-855107", contacts: "7604021111 / 9473333349" },
      { location: "MADHEPURA", name: "DHARMENDRA KUMAR", address: "PURAB BY PASS ROAD, NEAR KESHAB KANEYA VIDYALAYA, BIHAR-852113", contacts: "7352321467 / 7903706272" },
      { location: "MURLIGANJ", name: "HEMANT", address: "MURLIGANJ", contacts: "7979011745" },
      { location: "SAHARSA", name: "NARESH KUMAR DAHLAN", address: "MIRTOLA, NEAR DR B N MISHRA, BIHAR-852201", contacts: "6200408570 / 9431288037" },
      { location: "SUPAUL", name: "ANUJ KUMAR", address: "PATEL CHOWK, WARD NO.26, BIHAR-852131", contacts: "9006444568" },
      { location: "SIMRAHI", name: "TRIPURARI PRASAD KARN", address: "SIMRAHI BAZAR, DHARAMPATTI, N.H.-27 NEAR LAXMI DHARAM KANTA (SUPAUL)", contacts: "8825270756 / 9572038647" },
      { location: "BANMANKHI", name: "N.P. BHAGAT", address: "BAL BHARTI ROAD, WARD NO 5, BANMANKHI, PURNIA, BIHAR-854202", contacts: "9934487361" },
      { location: "TRIVENI GANJ", name: "DHARMENDRA KUMAR", address: "BANSI CHOWK (UNDER DHARMENDRA KUMAR – MADHEPURA)", contacts: "7352321467 / 7903706272" },
    ],

    WestBengalDelivery: [
      { location: "ALIPURDUAR", name: "BABLU SAHA", address: "BF ROAD, PURAN BAZAR, NEAR AMUL FACTORY, ALIPURDUAR, WEST BENGAL-736121", contacts: "9932384791 / 7596022369" },
      { location: "BAROBISHA", name: "BABLU SAHA", address: "HOWLI PATTI, BAROBISHA, WEST BENGAL-736207", contacts: "8637350261" },
      { location: "COOCHBIHAR", name: "RAJU SHARMA", address: "DURGABARI MORE, SILVER JUBILEE ROAD, WEST BENGAL-736101", contacts: "7595048484 / 03582225370" },
      { location: "DALKHOLA", name: "PARITOSH BISWAS", address: "MALLICKPUR MORE, DALKHOLA, WEST BENGAL-733201", contacts: "8250860792" },
      { location: "DHUPGURI", name: "DEBOJIT DUTTA", address: "FALLPATTY GODOWN, NEAR JALPAIGURI BUS TERMINUS, WEST BENGAL-735210", contacts: "7595048482 / 8250434984" },
      { location: "DINHATA", name: "PANKAJ BONIK", address: "STATION ROAD, DINHATA, WEST BENGAL-736135", contacts: "7595048485 / 8637090996" },
      { location: "FALAKATA", name: "PRABIR GHOSH", address: "SUBHASH PALLY, DIST- ALIPURDUAR, WEST BENGAL-735211", contacts: "7595048483" },
      { location: "ISLAMPUR", name: "CHANDAN CHOWDHURY", address: "PURATAN PALLY, MONDAL GOLA, NEAR COPARATI CINEMA HALL, ISLAMPUR-733202", contacts: "7001934985" },
      { location: "JALPAIGURI", name: "RAKESH PRASAD", address: "SAMAJ PARA, NEAR RABINDRA BHAWAN, WEST BENGAL-735101", contacts: "7595048480 / 9832350426" },
      { location: "KALIACHAK", name: "MD MOHIDUL HAQUE", address: "BALIDANGA MORE, NEAR KATHFARA MILL, KALIACHAK-732201", contacts: "9064795800" },
      { location: "KALIAGANJ", name: "UTTAM SAHA", address: "SOUTH AKHANAGAR NETAJI PALLY, WEST BENGAL-733129", contacts: "9434965019" },
      { location: "MAINAGURI", name: "SAMRAT SAHA", address: "SUBASH NAGAR, JALPESH ROAD NEAR SAGARDEEP CLUB, MAINAGURI-735224", contacts: "9733154414" },
      { location: "MALBAZAR", name: "RATAN BANIK", address: "DAKBANGALA MATH NEAR POSHU HOSPITAL, WEST BENGAL-735221", contacts: "8348361469 / 9475807854" },
      { location: "MALDA", name: "PULAK KR GHOSH", address: "M K ROAD NEAR HDFC BANK, MALDA-732101", contacts: "9775858867 / 7890003512" },
      { location: "MATHABHANGA", name: "MALAY SAHA", address: "PASCHIMPARA NEAR UDYON SANGHA CLUB, WEST BENGAL-736148", contacts: "7595048487 / 9932171819" },
      { location: "RAIGANJ", name: "SANKAR SARKAR LAL CHAND GOAP", address: "NH-34 OPP SMOKE CENTRE, RAIGANJ, WEST BENGAL-733134", contacts: "7890003612 / 9609881852" },
      { location: "TUFANGANJ", name: "TAPAN PAUL", address: "C/O PRIYANKA BASTRALAYA, READYMADE PATTI, TUFANGANJ", contacts: "9434589705 / 9647810383" },
    ],

    AssamDelivery: [
      { location: "DHUBRI", name: "DILIPSINGH", address: "KASAIPATTI CHARMAN ROAD WARD NO- 3 DHUBRI - 783381", contacts: "9954218391 / 7896728510" },
      { location: "BILASIPARA", name: "SUROJIT", address: "SUBHASPALLY ROAD, NEAR SHIV MANDIR, BILASIPARA", contacts: "8822986940" },
      { location: "GOALPARA", name: "PANDIT JI", address: "BURRABAZAR MARWARI THAKURBARI MANDIR GOALPARA -783101", contacts: "7002089858" },
      { location: "MANKACHAR", name: "ANOWAR HUSSAIN", address: "BEPARIPARA MANKACHAR -783131", contacts: "9957091095" },
      { location: "HATSINGIMARI", name: "ZAKIR HUSSAIN", address: "KHARUABANDA, HATSINGHMARI- 783135", contacts: "8638876093" },
      { location: "ALAMGANJ", name: "SAINOOR ALAM", address: "ALAMGANJ BAZAR ALAMGANJ 783339", contacts: "7002345234" },
      { location: "BARPETA ROAD", name: "PRANAB SAHA", address: "MANASHPUR, WARD NO 4, NEAR ELECTRICITY OFFICE, BARPETA ROAD", contacts: "9435087906" },
      { location: "BONGAIGAON", name: "MANIK DEBNATH", address: "BT ROAD, NEAR KANISHK HOTEL BONGAIGAON - 783380", contacts: "9954358485" },
      { location: "DHEKIAJULI", name: "RAJIB SAHA", address: "MAIN ROAD DHEKIAJULI, NEAR KRISHNA HOTEL DHEKIAJULI- 784110", contacts: "8638726404" },
      { location: "KRISHNAI", name: "", address: "", contacts: "9957625575" },
      { location: "NAWGAON", name: "PINKU KUMAR", address: "WARD NO-20, DHING GATE, NEAR JAMME MASJID NAWGAON- 782002", contacts: "7003974234 / 9706538629" },
      { location: "LANKA", name: "BISWAJEET KUNDU", address: "NEAR LAQNKESHWARI MANDIR, LANKA, HOJAI- 782446", contacts: "7002783573" },
      { location: "HOJAI", name: "BISWAJEET KUNDU", address: "THAKURBARI ROAD, NEAR SHANTINIKETAN HOSTEL, KRISHNA NAGAR, HOJAI- 782435", contacts: "7002783573" },
      { location: "DUDHNAI", name: "", address: "", contacts: "" },
      { location: "MOIRABARI", name: "", address: "", contacts: "" },
      { location: "NAGERBERA", name: "ABDUS SALAM", address: "NEAR NAGERBERA POLICE STATION, NAGERBERA- 781127", contacts: "9101117231" },
      { location: "BUNI", name: "", address: "", contacts: "" },
      { location: "LAKHIPUR", name: "SHORIFUL ALAM", address: "WARD NO 4 HALUAPARA ROAD, LAKHIPUR -783129", contacts: "7896553658" },
      { location: "GAIBANDA", name: "EHSAN ALI", address: "GAIBANDA MARKET", contacts: "6002829412" },
      { location: "FULBARI", name: "", address: "", contacts: "" },
    ],
  };

  const deliveryRegions = Object.keys(offices);

  const regionDisplayName = (key) => {
    const map = {
      BiharDelivery: "Bihar",
      WestBengalDelivery: "West Bengal",
      AssamDelivery: "Assam",
    };
    return map[key] || key;
  };

  const sectionVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
  const childVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
  const panelVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { x: '100%', opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  return (
    <div className="bg-[#F4F4F8] min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative h-64 bg-[#25257B] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#25257B] via-[#25257B] to-[#E61316]/20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E61316] rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">Our Network</h1>
          <p className="text-xl md:text-2xl font-light opacity-90">Extensive reach across India with delivery offices</p>
          <div className="mt-6 h-1 w-32 bg-[#E61316] mx-auto rounded-full"></div>
        </motion.div>
      </section>

      {/* Delivery Network */}
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-16 bg-[#F4F4F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold text-[#E61316] mb-3">Delivery Network</h2>
            <p className="text-gray-600 mb-10 text-lg">Click any location to view contact details</p>
            <div className="h-1 w-48 bg-[#E61316] mx-auto mb-10 rounded-full"></div>
          </div>

          {deliveryRegions.map((region) => (
            <div key={region} className="mb-16">
              <h3 className="text-3xl font-bold text-[#E61316] mb-8 text-center bg-white py-4 rounded-lg shadow-sm border border-red-100">
                {regionDisplayName(region)}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                {offices[region].map((office, index) => (
                  <motion.button
                    key={index}
                    variants={childVariants}
                    whileHover={{ scale: 1.06, backgroundColor: "#E61316" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedLocation(office)}
                    className="bg-white hover:bg-[#E61316] text-[#E61316] hover:text-white font-bold py-5 px-4 rounded-xl shadow-lg border-2 border-[#E61316]/20 transition-all duration-300"
                  >
                    <span className="block text-sm leading-tight">{office.location}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Sliding Panel - Cross button fixed perfectly */}
      <AnimatePresence>
        {selectedLocation && (
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto border-l-4 border-[#E61316]"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-b from-[#25257B] to-[#25257B]/95 text-white p-6 flex items-start justify-between">
              <div className="pr-10">
                <h3 className="text-2xl font-extrabold">{selectedLocation.location}</h3>
                {selectedLocation.name && <p className="text-lg opacity-90 mt-1">{selectedLocation.name}</p>}
              </div>

              {/* Perfectly positioned close button */}
              <button
                onClick={() => setSelectedLocation(null)}
                className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white text-3xl font-bold transition-all duration-200 backdrop-blur-sm"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {selectedLocation.address && (
                <div>
                  <h4 className="text-sm font-semibold text-[#25257B] uppercase tracking-wider mb-2">Address</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedLocation.address}</p>
                </div>
              )}

              {selectedLocation.contacts && (
                <div>
                  <h4 className="text-sm font-semibold text-[#E61316] uppercase tracking-wider mb-2">Contact Numbers</h4>
                  <p className="text-lg font-mono text-[#25257B] bg-gray-50 p-4 rounded-lg border border-gray-200">
                    {selectedLocation.contacts}
                  </p>
                </div>
              )}

              <div className="pt-6 border-t-2 border-dashed border-gray-200">
                <p className="text-center text-sm text-gray-500">GICS Network • Serving with Trust</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      {selectedLocation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedLocation(null)}
          className="fixed inset-0 bg-black z-40"
        />
      )}
    </div>
  );
};

export default Network;