import React from "react";

const Footer = () => {
  return (
    <footer
      className="
      bg-gradient-to-br
      from-slate-900
      via-slate-800
      to-violet-700
      text-white
      py-16
      px-6
      lg:px-20
    "
    >
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-3xl font-bold">
            LuxeSalon
          </h2>
        </div>

        <div>
          <h3 className="font-semibold mb-3">
            Company
          </h3>

          <p>About</p>
          <p>Contact</p>
          <p>Careers</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">
            Services
          </h3>

          <p>Hair</p>
          <p>Spa</p>
          <p>Makeup</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">
            Support
          </h3>

          <p>Help Center</p>
          <p>Privacy Policy</p>
        </div>
      </div>

      <div className="mt-12 border-t border-white/20 pt-6">
        © 2025 LuxeSalon
      </div>
    </footer>
  );
};

export default Footer;