import React, { useState, useEffect } from "react";
import { Header } from "../components/header";
import { Features } from "../components/features";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Gallery } from "../components/gallery";
import { Testimonials } from "../components/testimonials";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import Navbar from "../components/Navbar";
import SaleBanner from "../components/SaleBanner";
import EmailPopup from "../components/EmailPopUp"
import Remu from "../components/Remu";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


function Home() {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-[#F4F3E1]">
    <title>Home Page | Austin Mobile Hair Braiding RI: Expert Hair Braiding | Austin RI, Pflugerville TX, East Austin RI, Pawtucket RI, Austin TX, and Woonsocket RI, Boston MA </title>
            <meta
                name="description"
                content="Austin's top braiding salon! Expert hair braiding, box braids, Senegalese twists, & more. Servicing Austin, pflugerville, & surrounding RI areas. Book now! Austin Mobile Hair Braiding - Mobile Hair Braiding"
            />
            <meta
                name="keywords"
                content= "hair braiding near me Austin RI, boho braids near me Austin RI, african braiding salons near me Austin RI, box braids Austin RI, braids Austin RI,  feed in braids Austin RI,  african hair braiding Austin RI, black hair salons near me Austin RI, natural hair salon Austin RI,  african hair braiding near me Austin RI,braiding salons near me Austin RI, braiding shops near me Austin RI,  hair braiding shops near me Austin RI, braiding salon Austin RI, cheap hair braiding salons near me Austin RI,  senegalese twist hair Austin RI, hair braiding near me Pflugerville TX,  knotless box braids near me Pflugerville TX,  african braiding salons near me Pflugerville TX, box braids Pflugerville TX, braids Pflugerville TX,  feed in braids Pflugerville TX, african hair braiding Pflugerville TX,  black hair salons near me Pflugerville TX, natural hair salon Pflugerville TX, african hair braiding near me Pflugerville TX, braiding salons near me Pflugerville TX, braiding shops near me Pflugerville TX, hair braiding shops near me Pflugerville TX, braiding salon Pflugerville TX,  cheap hair braiding salons near me Pflugerville TX, senegalese twist hair Pflugerville TX, Boho braids near me, hair braiding Austin ri, hair braiding rhode island, box braids rhode island, hair braiding near me, african hair braiding near me, braiding salon near me, braiding salons near me, hair braiding salon near me, braiding shops near me, cheap hair braiding salons near me, braiding shop near me, african hair braiding salon near me, braiding salons, braiding shops, african braiding salon near me, african hair braiding salons near me, african braiding salons near me, braids shops near me, hair braiding services, best braiding salons in Austin ri, braids near me, box braids near me, african braiding near me, braiding hair near me, hair braiding shops near me, african braiding shops near me, braiding hair colors, xpression braiding hair colors, hair salons that do box braids near me, african hair braiding salon, aisha hair braiding, african hair braiding shops near me, box braids price list, african hair braiding price list, african braiding salons prices near me, african hair braiding shops, lemonade braids small, african hair braiding shop, kids hair braiding near me, black kids hair braiding near me, kids braids near me, african hair braiding near me, black kids hairstyles gallery, back to school hair specials, kids hair braiding Austin RI, mobile hair braiding Rhode Island, Rumi K-Pop braids for kids, Demon Hunters braids kids RI, children’s braiding service Austin, kids braid stylist near me, birthday party braids Rhode Island, party braiding service Austin, mobile braid party RI, in-home hair braiding for kids, Austin kids party braids, pflugerville kids braiding service, Austin kids braids near me, kids festival braids Rhode Island, temporary color braids for kids, tinsel braids Rhode Island, clip-in braid extensions for kids, box braids kids Rhode Island, feed-in braids for kids, knotless braids for kids Austin, halo braids children, twist braids kids Rhode Island, mobile hair braiding for parties, pop-up braid service Rhode Island, African hair braiding kids RI, kids hair stylist Rhode Island, professional braid artists Rhode Island, at-home braid appointments, Rumi K-Pop braid party, Demon Hunter braids party service, K-Pop braids for children Austin, themed braids for birthday party, Austin kids braiding events, temporary colored braids for kids, tinsel extensions for children, mobile festival braid service, pop-up braid event Rhode Island, kids hair braiding near me, party braid stylist Rhode Island, mobile braid artist pflugerville, Rumi Demon Hunter hair braiding, creative braids for kids Rhode Island, Austin birthday hair stylist, party-ready braids kids, themed hair braiding Rhode Island, K-Pop inspired braids for kids, Austin children’s hair salon, kids hair styling at home RI, mobile kids braid party Rhode Island, special event braids for kids"
            />

    <div>
        <link rel="canonical" href="https://www.atxmobilebraiding.com/" />
         <SaleBanner/>
         <Navbar/>
         <Header data={landingPageData.Header} />
         <Features data={landingPageData.Features} />
         <Gallery data={landingPageData.Gallery} />
         <Remu/>
         <About data={landingPageData.About} />
         {/* <ServiceAreas/> */}
         <Services data={landingPageData.Services} />
         <Testimonials data={landingPageData.Testimonials} />
         <Contact data={landingPageData.Contact} />
         <EmailPopup/>
     
       </div>
       </main>
  )
}

export default Home