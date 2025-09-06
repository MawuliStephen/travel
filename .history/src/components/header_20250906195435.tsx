// import { useNavigate } from 'next';
"use client"
import { useRouter } from 'next/navigation';

import { Button } from "@/components/ui/button";
import { Sheet, SheetTitle , SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import clsx from "clsx";

interface NavHeaderProps {
  variant?: 'default' | 'transparent' | 'hero';
}

const Navheader: React.FC<NavHeaderProps> = ({ variant = 'default' }) => {
  const router = useRouter();

    const handleClick = () => {
    router.push("/dashboard");
  };

  const headerClasses = clsx(
  "fixed top-0 left-0 right-0 z-50 mx-auto max-w-full",
  "rounded-3xl shadow-sm backdrop-blur-md m-4 px-6 py-2", // common modern styles
  {
    "bg-white/50 border border-white/30": variant === 'default',
    "bg-transparent border-none": variant === 'transparent',
    "bg-gradient-to-br from-sky-800 via-sky-200 to-sky-100/80 border border-white/30": variant === 'hero',
  }
);


  return (
<header className={headerClasses}>
  <div className="flex items-center justify-between ">
    <div className="flex items-center gap-6 justify-between">
      <div className="text-xl font-bold">Free</div>
      <nav className="hidden md:flex gap-6 text-sm text-gray-700 font-medium">
        <a href="#features" className="hover:text-sky-600 font-inter">Our offers</a>
        <a href="#pricing" className="hover:text-sky-600 font-inter">Reviews</a>
        <a href="#about" className="hover:text-sky-600 font-inter">About us</a>
      </nav>
    </div>

    <div className="hidden md:block">
      <Button
        variant="outline"
        // className="border-sky-600 text-sky-700 hover:bg-sky-100"
        onClick={handleClick}
      >
        Sign In
      </Button>
    </div>

    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="w-6 h-6 text-sky-700" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className=" p-4 w-64 bg-white text-gray-800">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <div className="mt-8 flex flex-col gap-4 text-lg font-medium">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
            <Button
              variant="outline"
              className="border-dark-600 text-dark-700 hover:bg-dark-100"
              onClick={handleClick}
            >
              Sign In
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</header>

  );
};

export default Navheader;
