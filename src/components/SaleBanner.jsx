import React from 'react';

function SaleBanner() {
  return (
    <section className="relative h-16">
      <div className="absolute top-0 mx-auto flex w-full items-center justify-center bg-[#2C1755] py-4">
        <p className="md:mx-auto text-center text-[#E4CBAA] font-extrabold">
          <a
            href="https://book.squareup.com/appointments/9sa73pd3r58ged/location/LX4S95WG88DY2/services/LQLL6ZTIB5HN5O75TBUYZPGE"
            className="font-extrabold hover:underline"
          >
            🌟 Women Big Box Braids — Only $100! Limited Time. Book Your Spot Now!
          </a>
        </p>
      </div>
    </section>
  );
}

export default SaleBanner;