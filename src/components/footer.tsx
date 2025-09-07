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
                          <Image src="icons/tiktok.svg" width={16} height={16} alt="tiktok" className=" h-8 w-8 inline-block mr-1" />
                          {/* TikTok */}
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white">
                          <Image src="icons/instagram.svg" width={8} height={8} alt="instagram" className=" h-8 w-8 inline-block mr-1" />
                          {/* Instagram */}
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white">
                          <Image src="icons/facebook.svg" width={8} height={8} alt="facebook" className=" h-8 w-8 inline-block mr-1" />
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


// import React from 'react'
// import Image from 'next/image'
// const Footer = () => {
//   return (
//     <div className='w-full bg-gray-800 max-auto mx-auto py-4 flex flex-col items-center justify-center space-y-2 '>
//         <div className='flex flex-col sm:flex-row w-full px-4 '>
//             <div className="w-1/2 flex flex-col items-start justify-start space-y-2">
//              <h2 className='text-lg font-semibold text-white'>Free Travel Consult</h2>
//            <Image src="/logo.png"               width={400}
//               height={300} alt="Logo" className="w-32 h-auto mx-auto mb-2" />
//                 {/* Description here */}
//             <div className="w-1/2 flex flex-col items-start justify-start space-y-2">
//               <p className='text-sm text-gray-400'>
//                 Get expert advice on your travel plans and make the most of your journey.
//               </p>
//             </div>
//             </div>

//             <div className="w-1/2 flex flex-col items-start sm:items-end justify-start space-y-2">
//               <h2 className='text-lg font-semibold text-white'>Contact Us</h2>
//               <p className='text-sm text-gray-400'>Email:</p>
//                 social media icons, instagram, facebook, twitter and tiktok
//                 <div className='flex space-x-4'>
//                   <a href="#" className='text-gray-400 hover:text-white'>Instagram</a>
//                   <a href="#" className='text-gray-400 hover:text-white'>Facebook</a>
//                   <a href="#" className='text-gray-400 hover:text-white'>Twitter</a>
//                   <a href="#" className='text-gray-400 hover:text-white'>TikTok</a>
//                 </div>

          
//         </div>
//       <p className='text-sm text-gray-600'>
//         &copy; {new Date().getFullYear()} Travel. All rights reserved.
//       </p>
//     </div>
//   )
// }

// export default Footer