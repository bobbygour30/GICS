import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- NEW STATIC DATA FOR BOOKING HUBS ---
const bookingHubs = {
  BurrabazarKolkata: [
    {
      title: "COLOOTOLA",
      address: "71/1 MAULANA SHAUKAT ALI STREET, OPPOSITE ISLAMIA HOTEL, KOLKATA – 700073",
      contacts: [
        { name: "RAKESH", number: "+91 8910123817" },
        { name: "GODOWN", number: "+91 7584039501" }
      ],
      bookingStations: ["KALIACHAK", "MALDA", "RAIGANJ", "KALIAGANJ"]
    },
    {
      title: "CENTRAL AVENUE",
      address: "112 B MAHATMA GANDHI ROAD, NEAR SHAHI GUEST HOUSE, KOLKATA – 700073",
      contacts: [
        { name: "PRAHLAD", number: "+91 8017306042" },
        { name: "GODOWN", number: "+91 9073216401" }
      ],
      bookingStations: ["DALKHOLA", "KISHANGANJ", "ISLAMPUR"]
    },
    {
      title: "STRAND ROAD",
      address: "67/10 STRAND ROAD AHIRITOLA NIMTALA MORE NEAR BHOOTHNATH AUTO STAND KOLKATA – 700006",
      contacts: [
        { name: "AZIM", number: "+91 9088788812" },
        { name: "GODOWN", number: "+91 9088016188" }
      ],
      bookingStations: {
        BENGAL: ["JALPAIGURI", "MAYNAGURI", "MALBAZAR", "DHUPGURI", "FALAKATA", "COOCHBEHAR", "DINHATA", "TOOFANGANJ", "MATHABHANGA", "ALIPURDUAR", "BAROBISHA", "KAMAKHYAGURI", "HAMILTONGANJ"],
        ASSAM: ["DHUBRI", "BILASIPARA", "BONGAIGAON", "BARPETA ROAD", "HATSINGHMARI", "MANKACHAR", "GOALPARA"]
      }
    }
  ],
  MetiabruzHaat: [
    {
      title: "RAILWAY LINE OPPOSITE AUTO STAND",
      address: "NEAR GIRLS SCHOOL METIABRUZ",
      contacts: [{ name: "General", number: "+91 9088016189" }],
      bookingStations: ["ALL BENGAL", "BIHAR", "ASSAM"]
    },
    {
      title: "RAIL LINE MEETHA TALAB",
      address: "NEAR LITTLE DOLL CLOTHING STORE METIABRUZ",
      contacts: [{ name: "MUKESH", number: "+91 7596022366" }],
      bookingStations: ["ALL BENGAL", "BIHAR", "ASSAM"]
    },
    {
      title: "ABM HAT 2ND FLOOR",
      address: "METIABRUZ",
      contacts: [
        { name: "DEEPAK RAJAK", number: "+91 7598048489" },
        { name: "BABU", number: "+91 7596022369" }
      ],
      bookingStations: ["ALL BENGAL", "BIHAR", "ASSAM"]
    }
  ],
  HowrahHaat: [
    {
      title: "BANKIM SETU",
      address: "UNDER BANKIM SETU GODOWN -5 NEAR BOXING MATH, HOWRAH – 711101",
      contacts: [
        { name: "DEEPAK RAJAK", number: "+91 7595048489" },
        { name: "DEEPAK PASWAN", number: "+91 9088016190" }
      ],
      bookingStations: ["ALL BENGAL", "BIHAR", "ASSAM"]
    },
    {
      title: "NEW SEAL LANE",
      address: "28 NEW SEAL LANE, HOWRAH - 711101",
      contacts: [{ name: "DEEPAK RAJAK", number: "+91 7595048489" }],
      bookingStations: ["ALL BENGAL", "BIHAR", "ASSAM"]
    },
    {
      title: "NABIN HAAT",
      address: "13 NITYADHAN MUKHERJEE ROAD",
      contacts: [
        { name: "NITU DA (NABINA BOOKING AGENCY)", number: "+91 9831960539" },
        { name: "KANU DA (KAMAKHYA BOOKING AGENCY)", number: "+91 9831217454" },
        { name: "TITU DA (LOKENATH BOOKING AGENCY)", number: "+91 9836506010" },
        { name: "DUTTA DA (DUTTA TRADERS)", number: "+91 9903483003" },
        { name: "PATHIK", number: "+91 8327367224" }
      ],
      bookingStations: ["ALL BENGAL", "BIHAR", "ASSAM"]
    }
  ],
  Shalimar: [
    {
      title: "SHALIMAR",
      address: "12 PTR SIDDING SHALIMAR KOYLA DEPOT, HOWRAH – 711102",
      contacts: [{ name: "TINKU", number: "+91 8013732334" }],
      bookingStations: ["ALL BENGAL", "BIHAR", "ASSAM"]
    }
  ]
};

const Network = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  // --- EXISTING OFFICES DATA (UPDATED IN PREVIOUS TURNS) ---
  const offices = {
    BiharDelivery: [
  { location: "ARARIA COURT", name: "SANJAY BHAGAT", address: "STATION ROAD NEAR MARWARI DHARMSALA, ARARIA COURT- 854311", contacts: "7091297322 / 9472397322" },
  { location: "BAKHRI", name: "", address: "", contacts: "" },
  { location: "BANMANKHI", name: "N.P. BHAGAT", address: "BAL BHARTI ROAD, WARD NO 5, BANMANKHI, PURNIA, BIHAR-854202", contacts: "9934487361" },
  { location: "BEGUSARAI", name: "MUKESH KUMAR / RAKESH TIWARI", address: "NH-31 OPPOSITE GYAN BHARTI SCHOOL BEGUSARAI", contacts: "7004193655 / 7004226650" },
  { location: "DALSINGH SARAI", name: "", address: "", contacts: "" },
  { location: "DARBHANGA", name: "AKESHY KUMAR", address: "NEAR OVER BRIDGE MABBI MADHPUR – 846005 DARBHANGA", contacts: "9470775614" },
  { location: "FORBESGANJ", name: "MANOJ KUMAR", address: "MUNNI POKHAR WARD NO. 17 FORBESGANJ", contacts: "8863981428 / 7004322665" },
  { location: "GULABBAGH", name: "AJAY YADAV", address: "SONALI CHOWK MOHANLAL BAJAJ GIRL SCHOOL GULABBAGH", contacts: "7870141478" },
  { location: "JAYNAGAR", name: "", address: "", contacts: "" },
  { location: "KHAGARIA", name: "VISHVANATH KUMAR SINGH", address: "BY PASS ROAD NEAR SURYA MANDIR KHAGARIA – 851204", contacts: "MITHU GODOWN – 9973372111" },
  { location: "KATIHAR", name: "", address: "", contacts: "" },
  { location: "KISHANGANJ", name: "RAJKUMAR MONDAL", address: "SANCHALAL, BARELA COMPLEX, CALTAX CHOWK, 3 NO. RAIL GATE, BIHAR-855107", contacts: "7604021111 / 7488744522" },
  { location: "MADHEPURA", name: "DHARMENDRA KUMAR", address: "PURAB BY PASS ROAD, NEAR KESHAB KANEYA VIDYALAYA, BIHAR-852113", contacts: "7352321467" },
  { location: "MURLIGANJ", name: "HEMANT KUMAR", address: "KASHIPUR ROAD NEAR CENTRAL BANK MURLIGANJ", contacts: "7979011745" },
  { location: "ROSERA", name: "MUKESH KUMAR", address: "JAIL ROAD ROSERA", contacts: "7979765322" },
  { location: "SAHARSA", name: "NARESH KUMAR DAHLAN", address: "MIRTOLA, NEAR DR B N MISHRA, BIHAR-852201", contacts: "6200408570 / 9431288037" },
  { location: "SAMSTIPUR", name: "ANANT KUMAR TIWARI", address: "ROSERA BYPASS ROAD SANDHYA UTSAV CLUB SAMASTIPUR", contacts: "9798963369" },
  { location: "SIMRAHI", name: "TRIPURARI PRASAD KARN", address: "SIMRAHI BAZAR, DHARAMPATTI, N.H.-27 NEAR LAXMI DHARAM KANTA (SUPAUL)", contacts: "8825270756" },
  { location: "SUPAUL", name: "ANUJ KUMAR", address: "PATEL CHOWK, WARD NO.26, BIHAR-852131", contacts: "9006444568" },
  { location: "TRIVENI GANJ", name: "DHARMENDRA KUMAR", address: "BANSI CHOWK (UNDER DHARMENDRA KUMAR – MADHEPURA)", contacts: "7352321467 / 7903706272" },
],
  
    WestBengalDelivery: [
      { location: "ALIPURDUAR", name: "BABLU SAHA", address: "BF ROAD, PURAN BAZAR, NEAR AMUL FACTORY, ALIPURDUAR, WEST BENGAL-736121", contacts: "GODOWN- 7596022369 / 9932384791" },
      { location: "BAROBISHA", name: "BABLU SAHA", address: "HOWLI PATTI, BAROBISHA, WEST BENGAL-736207", contacts: "8637350261" },
      { location: "COOCHBIHAR", name: "RAJU SHARMA", address: "DURGABARI MORE, SILVER JUBLEE ROAD, WEST BENGAL-736101", contacts: "GODOWN- 7595048484 / 9563210990" },
      { location: "DALKHOLA", name: "PARITOSH BISWAS", address: "MALLICKPUR MORE, DALKHOLA, WEST BENGAL-733201", contacts: "8250860792" },
      { location: "DHUPGURI", name: "DEBOJIT DUTTA", address: "FALLPATTY GODOWN, NEAR JALPAIGURI BUS TERMINUS, WEST BENGAL-735210", contacts: "GODOWN- 7595048482 / 8250434984" },
      { location: "DINHATA", name: "PANKAJ BONIK", address: "STATION ROAD, DINHATA, WEST BENGAL-736135", contacts: "GODOWN- 7595048485 / 8637090996" },
      { location: "FALAKATA", name: "PRABIR GHOSH", address: "SUBHASH PALLY, DIST- ALIPURDUAR, WEST BENGAL-735211", contacts: "7595048483" },
      { location: "ISLAMPUR", name: "CHANDAN CHOWDHURY", address: "PURATAN PALLY, MONDAL GOLA, NEAR COPARATI CINEMA HALL, ISLAMPUR, 733202", contacts: "8617035502" },
      { location: "JALPAIGURI", name: "RAKESH PRASAD", address: "SAMAJ PARA, NEAR RABINDRA BHAWAN, WEST BENGAL-735101", contacts: "GODOWN- 7595048480 / 6294296001" },
      { location: "KALIACHAK", name: "MD MOHIDUL HAQUE", address: "BALIDANGA MORE , NEAR KATHFARA MILL, KALIACHAK-732201", contacts: "9734926680" },
      { location: "KALIAGANJ", name: "UTTAM SAHA", address: "SOUTH AKHANAGAR NETAJI PALLY, WEST BENGAL-733129", contacts: "9434965019" },
      { location: "MAINAGURI", name: "SAMRAT SAHA", address: "SUBASH NAGAR, JALPESH ROAD NEAR SAGARDEEP CLUB, MAINAGURI- 735224", contacts: "9733154414" },
      { location: "MALBAZAR", name: "RATAN BANIK", address: "DAKBANGALA MATH NEAR POSHU HOSPITAL, WEST BENGAL-735221", contacts: "8348361469 / 9475807854" },
      { location: "MALDA", name: "PULAK KR GHOSH", address: "M K ROAD NEAR HDFC BANK, MALDA-732101", contacts: "9775858867 / 7890003512" },
      { location: "MATHABHANGA", name: "MALAY SAHA", address: "SHANI MANDIR MORE NEAR SBI BANK MATHABHANGA", contacts: "GODOWN- 7595048487 / 9932171819" },
      { location: "RAIGANJ", name: "SANKAR SARKAR", address: "NH-34 OPP SMOKE CENTRE, RAIGANJ, WEST BENGAL-733134", contacts: "7890003612" },
      { location: "TUFANGANJ", name: "TAPAN PAUL", address: "C/O PRIYANKA BASTRALAYA , READYMADE PATTI, TUFANGANJ -", contacts: "9434589705 / 9647810383" },
    ],
  
    AssamDelivery: [
  { location: "ALAMGANJ", name: "SAINOOR ALAM", address: "ALAMGANJ BAZAR ALAMGANJ 783339", contacts: "7002345234" },
  { location: "BARPETA ROAD", name: "PRANAB SAHA", address: "MANASHPUR, WARD NO 4, NEAR ELECTRICITY OFFICE, BARPETA ROAD", contacts: "9435087906" },
  { location: "BIJNI", name: "MANIK DEBNATH", address: "UNDER BONGAIGAON MANIK DEBNATH", contacts: "9954358485" },
  { location: "BILASIPARA", name: "DEEPAK DAS", address: "BILASIPARA PURONI BAZAR NEAR COSMO BAZAR COLLEGE ROAD BILASIPARA", contacts: "8638733140" },
  { location: "BONGAIGAON", name: "MANIK DEBNATH", address: "BT ROAD, NEAR KANISHK HOTEL BONGAIGAON - 783380", contacts: "9954358485" },
  { location: "DHEKIAJULI", name: "RAJIB SAHA", address: "MAIN ROAD DHEKIAJULI, NEAR KRISHNA HOTEL DHEKIAJULI-784110", contacts: "8638726404" },
  { location: "DHUBRI", name: "PRITAM GODOWN", address: "KASAIPATTI CHARMAN ROAD WARD NO- 3 DHUBRI - 783381", contacts: "8638522296" },
  { location: "DUDHNAI", name: "", address: "", contacts: "" },
  { location: "FULBARI", name: "ZAKIR HUSSAIN", address: "FULBARI UNDER ZAKIR HUSSAIN HATSINGHMARI", contacts: "8638876093 / 9957551663" },
  { location: "GAIBANDA", name: "EHSAN ALI", address: "GAIBANDA MARKET", contacts: "6002829412" },
  { location: "GOALPARA", name: "RAKESH SHARMA", address: "BURRABAZAR MARWARI THAKURBARI MANDIR GOALPARA -783101", contacts: "7002089858" },
  { location: "HATSINGIMARI", name: "ZAKIR HUSSAIN", address: "KHARUABANDA, HATSINGIMARI- 783135", contacts: "8638876093" },
  { location: "HOJAI", name: "BISWAJEET KUNDU", address: "THAKURBARI ROAD, NEAR SHANTINIKETAN HOSTEL,KRISHNA NAGAR, HOJAI- 782435", contacts: "7002783573" },
  { location: "JORHAT", name: "", address: "", contacts: "" },
  { location: "KRISHNAI", name: "", address: "", contacts: "9957625575" },
  { location: "LAKHIPUR", name: "SHORIFUL ALAM", address: "MUSIC ROAD NEAR HP PETROLPUMP", contacts: "7896553658" },
  { location: "LANKA", name: "BISWAJEET KUNDU", address: "NEAR LAQNKESHWARI MANDIR, LANKA, HOJAI-782446", contacts: "7002783573" },
  { location: "MANKACHAR", name: "ANOWAR HUSSAIN", address: "BEPARIPARA MANKACHAR -783131", contacts: "9957091095" },
  { location: "MOIRABARI", name: "BAPPI DUTTA", address: "UNDER NAWGAON BAPPI DUTTA", contacts: "7002463948" },
  { location: "NAGERBERA", name: "ABDUS SALAM", address: "NEAR NAGERBERA POLICE STATION,NAGERBERA- 781127", contacts: "9101117231" },
  { location: "NAWGAON", name: "BAPPI DUTTA", address: " representative: WARD NO-20, DHING GATE, NEAR JAMME MASJID NAWGAON- 782002", contacts: "7002463948" },
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
          <p className="text-xl md:text-2xl font-light opacity-90">Extensive reach across India with delivery offices and booking hubs</p>
          <div className="mt-6 h-1 w-32 bg-[#E61316] mx-auto rounded-full"></div>
        </motion.div>
      </section>


      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold text-[#25257B] mb-3">Booking Hubs</h2>
            <p className="text-gray-600 mb-10 text-lg">Central locations for material booking and drop-off</p>
            <div className="h-1 w-48 bg-[#25257B] mx-auto mb-10 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(bookingHubs).map(([hubKey, locations]) => (
              <div key={hubKey} className="bg-[#F4F4F8] p-6 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-extrabold text-[#E61316] mb-6 border-b pb-3 border-[#E61316]/30">
                  {hubKey.replace(/([A-Z])/g, ' $1').trim().toUpperCase()}
                </h3>

                <div className="space-y-6">
                  {locations.map((location, locIndex) => (
                    <div key={locIndex} className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                      <p className="text-lg font-bold text-[#25257B] mb-2">{location.title}</p>
                      
                      <div className='mb-3'>
                        <span className="text-sm font-semibold text-gray-500 block">Address:</span>
                        <p className="text-gray-700">{location.address}</p>
                      </div>

                      <div className='mb-3'>
                        <span className="text-sm font-semibold text-gray-500 block">Contact:</span>
                        <ul className='list-disc list-inside space-y-1 ml-4'>
                          {location.contacts.map((contact, contactIndex) => (
                            <li key={contactIndex} className='text-sm text-gray-800'>
                              <span className='font-medium'>{contact.name}:</span> {contact.number}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <span className="text-sm font-semibold text-gray-500 block">Booking Stations:</span>
                        {Array.isArray(location.bookingStations) ? (
                            <p className="text-gray-700 text-sm italic">{location.bookingStations.join(', ')}</p>
                        ) : (
                            <div className='mt-1'>
                                {Object.entries(location.bookingStations).map(([region, stations]) => (
                                    <p key={region} className='text-xs text-gray-600 mt-1'>
                                        <span className='font-semibold text-gray-800'>{region}:</span> {stations.join(', ')}
                                    </p>
                                ))}
                            </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      
      

      {/* --- DELIVERY NETWORK (Existing Section) --- */}
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