import React from 'react';
import Navbar from '../components/Navbar';
import { Contact } from '../components/contact';
import Smallergallery from '../components/Smallergallery';

export const Pflugerville = (props) => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <title>Hair Braiding in Pflugerville TX | Austin Mobile Hair Braiding: Mobile Hair Braiding pflugerville | Austin Mobile Hair Braiding RI</title>
      <meta
        name="description"
        content="Austin Mobile Hair Braiding RI: Your premier mobile hair braiding salon in pflugerville, RI. Specializing in box braids, knotless braids, Senegalese twists, and more. Expert African hair braiding services brought directly to you in pflugerville. Book your appointment today for top-rated braids in pflugerville!"
      />
      <meta
        name="keywords"
        content="hair braiding Pflugerville TX, mobile hair braiding Pflugerville TX, African hair braiding Pflugerville TX, box braids Pflugerville TX, knotless braids Pflugerville TX, Senegalese twists Pflugerville TX, feed in braids Pflugerville TX, boho braids Pflugerville TX, braiding salon Pflugerville TX, braids near me Pflugerville TX, kids braids Pflugerville TX, black hair salons Pflugerville TX, natural hair salon Pflugerville TX, braiding services Pflugerville TX, best braiding salons Pflugerville TX, braiding shops Pflugerville TX, cheap hair braiding Pflugerville TX, lemonade braids Pflugerville TX, hair braiding shops Pflugerville TX, African braiding salons Pflugerville TX"
      />
      <a
        href="https://app.squareup.com/appointments/book/9sa73pd3r58ged/LX4S95WG88DY2/start"
        className="fixed bottom-6 right-6 bg-[#73C2F4] text-white hover:text-white hover:bg-sky-600 font-semibold py-4 px-8 rounded-full shadow-lg z-50 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book Now
      </a>
      <Navbar />
      <header id="header">
        <div className="relative">
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full object-cover z-0 h-full"
            alt="Video of Austin Mobile Hair Braiding's Hair Braider Braiding Client's Hair"
          >
            <source src="../img/LizStyle.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-black opacity-30 z-10 h-full"></div>
          <div className="relative z-20 py-20 md:py-32 lg:py-40 xl:py-48 px-6 md:px-10 lg:px-20 xl:px-32 text-center text-white">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 italic">
                Top-Rated Hair Braiding & Mobile Salon in pflugerville, RI
                <span className="ml-2 animate-ping inline-block rounded-full h-2 w-2 bg-white"></span>
              </h1>
              <p className="text-1xl md:text-3xl mb-8 font-semibold">
                Austin Mobile Hair Braiding brings expert African hair braiding directly to you in pflugerville, RI!
              </p>
              <p className="text-base md:text-lg mb-8 text-gray-200 hidden">
                Searching for "box braids Pflugerville TX," "knotless braids near me in pflugerville," or "African hair braiding in pflugerville"?
                Our skilled team delivers stunning results right to your doorstep. We offer a wide range of styles,
                including Senegalese twists, feed-in braids, and trendy boho braids, providing the ultimate convenience
                of a mobile hair salon across pflugerville.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="https://app.squareup.com/appointments/book/9sa73pd3r58ged/LX4S95WG88DY2/start"
                className="inline-block bg-[#73C2F4] text-white hover:bg-sky-600 hover:text-white font-semibold py-5 px-10 rounded-full text-lg transition duration-300 uppercase"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Braids Now
              </a>
            </div>
          </div>
        </div>
      </header>
          <link rel="canonical" href="https://www.atxmobilebraiding.com/pflugerville" />
      <Smallergallery />
      <Contact />
    </main>
  );
};

export default Pflugerville;
