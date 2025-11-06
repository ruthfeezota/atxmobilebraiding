import React from 'react';
import Navbar from '../components/Navbar';
import { Contact } from '../components/contact';
import Smallergallery from '../components/Smallergallery';


export const SanMarcos = (props) => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
    
      <title>Hair Braiding in San Marcos MA | Austin Mobile Hair Braiding: Mobile Hair Braiding San Marcos | Austin Mobile Hair Braiding MA</title>
      <meta
        name="description"
        content="Austin Mobile Hair Braiding MA: Your premier mobile hair braiding salon in San Marcos, MA. Specializing in box braids, knotless braids, Senegalese twists, and more. Expert African hair braiding services brought directly to you in San Marcos. Book your appointment today for top-rated braids in San Marcos!"
      />
      <meta
        name="keywords"
        content="hair braiding San Marcos MA, mobile hair braiding San Marcos MA, African hair braiding San Marcos MA, box braids San Marcos MA, knotless braids San Marcos MA, Senegalese twists San Marcos MA, feed in braids San Marcos MA, boho braids San Marcos MA, braiding salon San Marcos MA, braids near me San Marcos MA, kids braids San Marcos MA, black hair salons San Marcos MA, natural hair salon San Marcos MA, braiding services San Marcos MA, best braiding salons San Marcos MA, braiding shops San Marcos MA, cheap hair braiding San Marcos MA, lemonade braids San Marcos MA, hair braiding shops San Marcos MA, African braiding salons San Marcos MA"
      />
          <link rel="canonical" href="https://www.atxmobilebraiding.com/San Marcos" />

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
                Top-Rated Hair Braiding & Mobile Salon in San Marcos, MA
                <span className="ml-2 animate-ping inline-block rounded-full h-2 w-2 bg-white"></span>
              </h1>
              <p className="text-1xl md:text-3xl mb-8 font-semibold">
                Austin Mobile Hair Braiding brings expert African hair braiding directly to you in San Marcos, MA!
              </p>
              <p className="text-base md:text-lg mb-8 text-gray-200 hidden">
                Searching for "box braids San Marcos MA," "knotless braids near me in San Marcos," or "African hair braiding in San Marcos"?
                Our skilled team delivers stunning results right to your doorstep. We offer a wide range of styles,
                including Senegalese twists, feed-in braids, and trendy boho braids, providing the ultimate convenience
                of a mobile hair salon across San Marcos.
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
      <Smallergallery />
      <Contact />
    </main>
  );
};

export default SanMarcos;
