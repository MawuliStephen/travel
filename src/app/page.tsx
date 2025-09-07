"use client";
import Navheader from "@/components/header";
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FAQSection } from "@/components/fqa";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <div>



      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full text-center lg:text-left lg:w-1/2 ">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
            Tour the world <br /> as a student
          </h1>

          <p className="mb-6 text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
            We can all travel the world. You don't need to be rich,
            <br /> you just need to talk to the right connection.
          </p>
          <div className=" md:w-full flex justify-center lg:justify-start">
            <Button
              variant="default"
              className="w-full sm:w-auto"
              onClick={handleClick}
            >
              Get in touch
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="  flex  lg:justify-end">
            <img
              src="/assets/magic.png"
              alt="Travel illustration"
              className="w-full h-auto max-w-sm mx-auto lg:mx-0"
            />
          </div>
        </div>
      </section>

      <div className="h-5" /> {/* Spacer */}

      {/* Social Proof Section */}
      <section className="bg-purple-200 rounded-2xl px-6">
        <div className="flex flex-col items-center text-center gap-6 py-10">
          <p className="text-sm sm:text-base font-medium max-w-xl">
            <b>Mawuli, Akosua, Kwamena and 2K others</b> have started working,
            studying and touring the world. You are next.
          </p>

          <div className="flex -space-x-4">
            <img
              src="/assets/images.jpg"
              alt="Avatar 1"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <img
              src="/assets/ff.jpg"
              alt="Avatar 2"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <img
              src="/assets/sika.jpg"
              alt="Avatar 3"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-800 text-white flex items-center justify-center text-sm italic font-medium">
              +2K
            </div>
          </div>

          <Button variant="default" className="w-full sm:w-auto" onClick={handleClick}>
            Follow our WhatsApp channel
          </Button>
        </div>
      </section>
      <div className="h-4" /> {/* Spacer */}

      {/* Service Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2 sm:px-0">
        {[
          {
            title: "Start Touring the World",
            desc: "Work and pay opportunities in Dubai, Asia, and Europe. Visa cost is fully sponsored. 14 slots available.",
            bg: "bg-amber-100",
            img: "/assets/city.jpg",
          },
          {
            title: "Learn, Work & live Abroad",
            desc: "Scholarships with part-time jobs in Canada and Germany. Applications close in 7 days.",
            bg: "bg-green-200",
            img: "/assets/work.jpg",
          },
          {
            title: "Study Abroad  with  scholarship ",
            desc: "Remote training and relocation support to Europe and the US for junior tech roles.",
            bg: "bg-blue-100",
            img: "/assets/student.jpg",
          },
          {
            title: "Get your Passport or visa issues sorted",
            desc: "Nursing jobs with accommodation support in the UK, Germany, and Saudi Arabia.",
            bg: "bg-purple-100",
            img: "/assets/passport.jpg",
          },
        ].map((card, i) => (
          <Card key={i} className="flex flex-col h-full gap-0 py-0 overflow-hidden hover:shadow-lg transition">
            <Image
              src={card.img}
              alt={card.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className={`${card.bg} px-4 py-3 flex-grow flex flex-col`}>
              <CardTitle className="text-lg font-semibold mb-2">{card.title}</CardTitle>
              <CardDescription className="text-sm flex-grow">
                {card.desc}
              </CardDescription>
            </div>
          </Card>
        ))}
      </section>

      <div className="h-12" /> {/* Spacer */}

      {/* Services List Section */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
            Our services <br /> includes;
          </h1>

          <div className="space-y-4">
            {[
              { label: "Visa Processing", icon: "/assets/magic.png" },
              { label: "Travel Consultancy", icon: "/assets/consulting.png" },
              { label: "Flight Ticket Booking", icon: "/assets/tickets.png" },
              { label: "Tour Guide Services", icon: "/assets/tour-guide.png" },
              { label: "Accommodation Arrangements", icon: "/assets/hotel.png" },
            ].map((service, i) => (
              <div key={i} className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
                <img src="/icons/check.svg" alt="check" className="w-10 h-10" />
                {/* <img src={service.icon} alt={service.label} className="w-8 h-8 rounded" /> */}
                <span className="text-sm tracking-[-.01em] font-medium">{service.label}</span>
              </div>
            ))}
          </div>

          <Button variant="secondary" className="mt-6 w-full sm:w-auto" onClick={handleClick}>
            View all services
          </Button>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src="/assets/magic.png"
            alt="Travel illustration"
            className="w-full h-auto max-w-sm mx-auto md:mx-0"
          />
        </div>
      </section>


      <div className="h-4  pb-4" /> {/* Spacer */}

      {/* Steps Cards Section */}

      <div className="flex justify-center">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-0 mt-12 max-w-5xl w-full">
          {[
            {
              title: "Step one",
              desc: "Tell us about your travel plans. We will guide you on the best options available.",
              bg: "bg-purple-200",
              img: "/assets/magic.png",
            },
            {
              title: "Step two",
              desc: "We will help you process your visa and other travel documents at no cost.",
              bg: "bg-purple-200",
              img: "/assets/magic.png",
            },
            {
              title: "Step three",
              desc: "Pay and take off to your dream destination. It's that simple.",
              bg: "bg-purple-200",
              img: "/assets/magic.png",
            },
          ].map((card, i) => (
            <Card
              key={i}
              className={`${card.bg} flex flex-col pt-3 pb-0 h-full w-full gap-0 overflow-hidden hover:shadow-lg transition`}
            >
              <div className="px-6 py-3 flex-grow flex flex-col">
                <CardTitle className="text-lg uppercase font-semibold mb-2">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-sm flex-grow">
                  {card.desc}
                </CardDescription>

                <Image
                  src={card.img}
                  alt={card.title}
                  width={150}
                  height={400}
                  className="w-full bg-white rounded-4xl h-78 object-contain"
                />
              </div>
            </Card>
          ))}
        </section>
      </div>


      <div className="h-12" /> {/* Spacer */}


      {/* Services List Section */}


      <FAQSection />

    </div>
  );
}


// "use client";
// import Navheader from "@/components/header";
// import { useRouter } from 'next/navigation';
// import {
//   Card,
//   CardAction,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"

// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// export default function Home() {
//     const router = useRouter();
  
//       const handleClick = () => {
//       router.push("/contact");
//     };
//   return (
//     // <div className="px-4 max-auto  font-sans grid grid-rows-[20px_1fr_20px] items-center  min-h-screen p-8 pb-20 gap-16 sm:p-20">

//     <div className="max-auto max-w-7xl font-sans  min-h-screen p-8 pb-20 gap-16 sm:p-10">
//       <Navheader />
//       <main className="sm:mt-10 mt-20">
//         <div className="flex flex-col md:flex-row items-center gap-6  ">
//           <div className="w-full md:w-1/2">
//             <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-left leading-[1.1] mb-6">
//               Tour the world <br /> as a student
//             </h1>

//             <p className="mb-6 text-base sm:text-lg  max-w-xl">We can all travel the world, you don't need to be rich, <br /> you just need to talk to the right connection</p>

//             <Button variant="default"
//               className=" "
//               onClick={handleClick}
//             >
//               Get in touch
//             </Button>
//           </div>

//           <div className="w-full md:w-1/2">
//             {/* Replace with your image */}
//             <img src="/assets/magic.png" alt="Travel illustration" className="w-auto h-auto" />
//           </div>
//         </div>

//         <div className="bg-purple-50 h-[500px] sm:h-[700px] rounded-2xl flex items-center justify-center px-6">
//           <div className="flex flex-col items-center text-center gap-6 py-10">

//             <p className="text-base sm:text-lg font-medium max-w-xl">
//               <b>Mawuli, Akosua, Kwamena and 2K others</b> have started working, studying and touring the world. You are next.
//             </p>

//             <div className="flex -space-x-4">
//               <img src="/assets/images.jpg" alt="Avatar 1" className="w-12 h-12 rounded-full border-2 border-white" />
//               <img src="/assets/ff.jpg" alt="Avatar 2" className="w-12 h-12 rounded-full border-2 border-white" />
//               <img src="/assets/magic.png" alt="Avatar 3" className="w-12 h-12 rounded-full border-2 border-white" />
//               {/* <img src="/assets/avatar4.png" alt="Avatar 4" className="w-12 h-12 rounded-full border-2 border-white" /> */}
//               <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-800 text-white flex items-center justify-center text-sm italic font-medium">
//                 +2K
//               </div>
//             </div>

//             <Button variant="default" onClick={handleClick}>
//               Follow our WhatsApp channel
//             </Button>

//           </div>
//         </div>

//         {/* Third section */}

// <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-4">
//   {/* Card 1 */}
//   <Card className="flex flex-col h-full overflow-hidden">
//     <Image 
//       src="/assets/magic.png" 
//       alt="Travel illustration" 
//       width={500} 
//       height={300} 
//       className="w-full h-48 object-cover"
//     />
//     <div className="bg-amber-100 px-4 py-3 flex-grow flex flex-col">
//       <CardTitle className="text-lg font-semibold mb-2">Start Touring the World</CardTitle>
//       <CardDescription className="text-sm flex-grow">
//         Work and pay opportunities in Dubai, Asia, and Europe. Visa cost is fully sponsored. 14 slots available.
//       </CardDescription>
//     </div>
//   </Card>

//   {/* Card 2 */}
//   <Card className="flex flex-col h-full overflow-hidden">
//     <Image 
//       src="/assets/images.jpg" 
//       alt="Travel illustration" 
//       width={500} 
//       height={300} 
//       className="w-full h-48 object-cover"
//     />
//     <div className="bg-green-100 px-4 py-3 flex-grow flex flex-col">
//       <CardTitle className="text-lg font-semibold mb-2">Learn and Work Abroad</CardTitle>
//       <CardDescription className="text-sm flex-grow">
//         Scholarships with part-time jobs in Canada and Germany. Applications close in 7 days.
//       </CardDescription>
//     </div>
//   </Card>

//   {/* Card 3 */}
//   <Card className="flex flex-col h-full overflow-hidden">
//     <Image 
//       src="/assets/ff.jpg" 
//       alt="Travel illustration" 
//       width={500} 
//       height={300} 
//       className="w-full h-48 object-cover"
//     />
//     <div className="bg-blue-100 px-4 py-3 flex-grow flex flex-col">
//       <CardTitle className="text-lg font-semibold mb-2">Build a Career in Tech</CardTitle>
//       <CardDescription className="text-sm flex-grow">
//         Remote training and relocation support to Europe and the US for junior tech roles.
//       </CardDescription>
//     </div>
//   </Card>

//   {/* Card 4 */}
//   <Card className="flex flex-col h-full overflow-hidden">
//     <Image 
//       src="/assets/avatar4.png" 
//       alt="Travel illustration" 
//       width={500} 
//       height={300} 
//       className="w-full h-48 object-cover"
//     />
//     <div className="bg-purple-100 px-4 py-3 flex-grow flex flex-col">
//       <CardTitle className="text-lg font-semibold mb-2">Healthcare & Nursing Jobs</CardTitle>
//       <CardDescription className="text-sm flex-grow">
//         Nursing jobs with accommodation support in the UK, Germany, and Saudi Arabia.
//       </CardDescription>
//     </div>
//   </Card>
// </div>




//         {/* Fourth section */}

//         <div className="flex flex-col md:flex-row-reverse items-center gap-6  ">
//           <div className="w-full md:w-1/2">
//   <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-left leading-[1.1] mb-6">
//     Thinking of what we got? Here are our services
//   </h1>

//   <div className="space-y-4">
//     {/* Service 1 */}
//     <div className="flex items-center gap-3">
//       <img src="/icons/check.png" alt="check" className="w-5 h-5" />
//       <img src="/assets/visa.png" alt="Visa" className="w-8 h-8 rounded" />
//       <span className="text-sm tracking-[-.01em] font-medium">Visa Processing</span>
//     </div>

//     {/* Service 2 */}
//     <div className="flex items-center gap-3">
//       <img src="/icons/check.png" alt="check" className="w-5 h-5" />
//       <img src="/assets/consulting.png" alt="Consultancy" className="w-8 h-8 rounded" />
//       <span className="text-sm tracking-[-.01em] font-medium">Travel Consultancy</span>
//     </div>

//     {/* Service 3 */}
//     <div className="flex items-center gap-3">
//       <img src="/icons/check.png" alt="check" className="w-5 h-5" />
//       <img src="/assets/tickets.png" alt="Flight Booking" className="w-8 h-8 rounded" />
//       <span className="text-sm tracking-[-.01em] font-medium">Flight Ticket Booking</span>
//     </div>

//     {/* Service 4 */}
//     <div className="flex items-center gap-3">
//       <img src="/icons/check.png" alt="check" className="w-5 h-5" />
//       <img src="/assets/tour-guide.png" alt="Tour Guide" className="w-8 h-8 rounded" />
//       <span className="text-sm tracking-[-.01em] font-medium">Tour Guide Services</span>
//     </div>

//     {/* Service 5 */}
//     <div className="flex items-center gap-3">
//       <img src="/icons/check.png" alt="check" className="w-5 h-5" />
//       <img src="/assets/hotel.png" alt="Accommodation" className="w-8 h-8 rounded" />
//       <span className="text-sm tracking-[-.01em] font-medium">Accommodation Arrangements</span>
//     </div>
//   </div>

//   <Button
//     variant="secondary"
//     className="mt-6"
//     onClick={handleClick}
//   >
//     View all services
//   </Button>
// </div>


//           <div className="w-full md:w-1/2">
//             {/* Replace with your image */}
//             <img src="/assets/magic.png" alt="Travel illustration" className="w-auto h-auto" />
//           </div>
//         </div>
     
//       </main>

//     </div>
//   );
// }
