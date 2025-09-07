import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between space-y-6 md:space-y-0 md:space-x-8">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3 md:w-1/2">


          <Image
            src="/logoup.svg"
            width={48}
            height={48}
            alt="Logo"
            className="w-32 h-auto fill-red"
          />

          <h2 className="text-lg font-semibold text-white">
            Travel Consult
          </h2>
          <p className="text-sm text-gray-400 max-w-sm">
            Get expert advice on your travel plans and make the most of your
            journey.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-3 md:w-1/2">
          <h2 className=" text-white">Contact Us</h2>
          <p className="text-sm text-gray-400">Email: info@example.com</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Image src="/icons/tiktok.svg" width={16} height={16} alt="tiktok" className=" h-8 w-8 inline-block mr-1" />
              {/* TikTok */}
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Image src="/icons/instagram.svg" width={8} height={8} alt="instagram" className=" h-8 w-8 inline-block mr-1" />
              {/* Instagram */}
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Image src="/icons/facebook.svg" width={8} height={8} alt="facebook" className=" h-8 w-8 inline-block mr-1" />
              {/* Twitter */}
            </a>

          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Free Travel Consult. All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      {/* <div className="mt-2 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Travel. All rights reserved.
        </p>
      </div> */}
    </footer>
  );
};

export default Footer;
