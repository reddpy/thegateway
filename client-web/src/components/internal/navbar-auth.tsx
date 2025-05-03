"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const AuthNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div id="navbar" className="w-full fixed top-0 z-50">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1200px] p-4 font-sans">
          <nav
            className={`w-full py-3 px-5 rounded-full backdrop-blur-md shadow-lg transition-all duration-300 
            ${
              scrolled
                ? "bg-white/80 shadow-xl"
                : "bg-white/20 hover:bg-white/30"
            }`}
          >
            <div className="flex items-center justify-between flex-wrap">
              <div className="flex items-center">
                <span className="text-2xl font-bold bg-clip-text text-transparent">
                  <Link href={'/'}>
                  <Image
                    src="/oneocular-svg/LOGO_RB.svg"
                    height={20}
                    width={200}
                    alt="OneOcular"
                  />
                  </Link>
                </span>
              </div>

            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AuthNavbar;
