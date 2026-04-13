"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Expertises", href: "/expertises" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-10 py-4 z-50 bg-[#FAF4EC]">
      {/* Logo */}
      <Link href="/" className="w-24 md:w-28 relative z-[60]">
        <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 208 84" fill="none">
          <path d="M207.793 18.4091V68.8219C207.793 77.2049 200.998 84 192.615 84H7.46524C3.34207 84 0 80.6579 0 76.5348V37.5951C0 33.8732 2.69331 30.6933 6.36831 30.0829L186.384 0.251801C197.596 -1.60491 207.793 7.04266 207.793 18.4049" fill="#FAF4EC"></path>
          <path d="M188.876 80.0646H55.9061V25.8317L186.618 5.34814C195.454 3.96521 203.444 10.7945 203.444 19.7408V65.4969C203.444 73.5427 196.922 80.0646 188.876 80.0646Z" fill="black"></path>
          <path d="M71.2635 26.8177V47.2585L67.5415 47.5957V27.3683L59.9312 28.4866V76.7781L67.5415 76.7055V56.478L71.2635 56.2305V76.6714L79.3818 76.5945V25.6226L71.2635 26.8177Z" fill="white"></path>
          <path d="M94.7092 23.3646L92.5452 42.7512L92.4427 44.4116L92.2378 44.4329L92.1354 42.7939L90.0055 24.0561L81.2256 25.3494L87.9482 58.2622V76.5134L96.8391 76.4323V57.75L104.142 21.9731L94.7092 23.3646Z" fill="white"></path>
          <path d="M159.835 25.0207V13.7695L135.377 17.3719V76.0695L159.835 75.839V64.5921L147.179 65.0274V51.2238L159.101 50.4384V39.2854L147.179 40.3695V26.5701L159.835 25.0207Z" fill="white"></path>
          <path d="M120.844 48.8506L116.226 49.2006V29.3018L120.844 28.7256V48.8506ZM105.943 21.7085V76.347L116.149 76.2488V58.5396L120.882 58.2878C127.071 57.9591 131.92 52.8457 131.92 46.6482V31.3805C131.92 24.2695 125.603 18.8146 118.565 19.8518L105.943 21.7128V21.7085Z" fill="white"></path>
          <path d="M182.598 64.7713L176.494 64.9677V21.7768L182.598 21.0128V64.7713ZM162.993 13.3042V75.8091L185.769 75.5957C192.163 75.536 197.315 70.3372 197.315 63.9433V21.7469C197.315 14.636 190.998 9.18108 183.959 10.2183L162.993 13.3085L162.993 13.3042Z" fill="white"></path>
          <path d="M21.5464 80.0646H34.7482V70.4738L27.1336 70.6957V59.8585L34.2873 59.4018V49.8835L27.1336 50.5494V39.7079L34.7482 38.739V29.1481L21.5464 31.214V80.0646Z" fill="black"></path>
          <path d="M36.7714 28.828V38.4829L42.03 37.8128V80.0646H48.3812V37.0061L54.0239 36.289V26.1262L36.7714 28.828Z" fill="black"></path>
          <path d="M14.2348 51.7488V41.2829L8.49394 42.0128V71.5152L14.2348 71.3488V62.6969L10.7092 62.8976V54.5146L19.5616 53.7634V80.0604H14.2391V77.3159L13.3128 78.225C12.1134 79.4031 10.5 80.0604 8.8226 80.0604H7.90491C5.48905 80.0604 3.53418 78.1012 3.53418 75.6896V39.0207C3.53418 36.1524 5.62563 33.7067 8.45978 33.2628L14.5165 32.3152C17.1671 31.9012 19.5659 36.6305 19.5659 36.6305V51.2494L14.2433 51.7445L14.2348 51.7488Z" fill="black"></path>
        </svg>
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex bg-white rounded-[0.7rem] px-1.5 py-1 border border-gray-100">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className="relative group px-4 py-1.5 overflow-hidden rounded-[0.7rem] block">
            <span className="absolute inset-0 bg-white rounded-[0.7rem] overflow-hidden grid">
              <span className="absolute inset-0 w-[120%] h-full bg-[#ff4d4d] origin-right block transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] translate-x-[-10%] translate-y-[100%] rotate-[-12deg] group-hover:translate-y-0 group-hover:rotate-0" style={{ zIndex: 1 }} />
              <span className="absolute inset-0 w-[120%] h-full bg-black origin-right block transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] translate-y-[100%] rotate-[-12deg] delay-[50ms] group-hover:translate-y-0 group-hover:rotate-0" style={{ zIndex: 2 }} />
            </span>
            <span className="relative z-10 font-medium text-sm grid overflow-hidden">
              <span className="block transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-[-120%] group-hover:rotate-[-5deg] opacity-100 group-hover:opacity-0" style={{ gridArea: "1 / 1", transformOrigin: "0 0" }}>{link.name}</span>
              <span className="block transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] translate-y-[120%] rotate-[5deg] group-hover:translate-y-0 group-hover:rotate-0 text-white opacity-0 group-hover:opacity-100" style={{ gridArea: "1 / 1", transformOrigin: "0 0" }}>{link.name}</span>
            </span>
          </Link>
        ))}
      </div>

      {/* CTA Button  */}
      <div className="hidden md:block relative z-[60]">
        <motion.button className="relative group flex items-center justify-center px-1.5 py-1.5 rounded-[0.7rem]" initial="initial" whileHover="hover"
          variants={{ hover: { rotate: -4, transition: { type: "spring", stiffness: 300, damping: 12 } } }}
        >
          <motion.span className="absolute inset-0 bg-[#fcc8f8] rounded-[0.7rem] z-[-1]"
            variants={{ initial: { width: "95%", left: "2.5%" }, hover: { width: "100%", left: "0%", transition: { duration: 0.4, ease: [0.5, 1.25, 0.75, 1.25] } } }}
          />
          <div className="flex items-center gap-2 pl-3 pr-1">
            <motion.span className="text-black font-bold whitespace-nowrap text-sm flex items-center gap-2" variants={{ hover: { rotate: -1, transition: { duration: 0.3 } } }}>
              Get Results
            </motion.span>
            <motion.div className="bg-white p-1.5 rounded-lg flex items-center justify-center" variants={{ initial: { scale: 1, rotate: 0 }, hover: { scale: 1, rotate: -8, transition: { type: "spring", stiffness: 400, damping: 10 } } }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 20 24" fill="none" className="text-[#ff4d4d]" >
                <path d="M17.4906 11.0361C17.1898 10.6437 16.8237 10.3037 16.4837 9.96371C15.6075 9.17906 14.6136 8.61673 13.7766 7.79284C11.8281 5.88352 11.3965 2.73184 12.6389 0.3125C11.3965 0.613283 10.3111 1.29331 9.38256 2.03873C5.99549 4.75886 4.66158 9.55831 6.25704 13.6777C6.30935 13.8085 6.36166 13.9393 6.36166 14.1093C6.36166 14.397 6.16549 14.6585 5.90394 14.7632C5.60316 14.8939 5.2893 14.8155 5.04083 14.6062C4.96661 14.5441 4.90453 14.4687 4.85774 14.3839C3.37998 12.5138 3.14459 9.83294 4.13848 7.68822C1.95453 9.46676 0.764478 12.4746 0.934486 15.3124C1.01295 15.9663 1.09142 16.6202 1.31373 17.274C1.49682 18.0587 1.84991 18.8433 2.24224 19.5365C3.65461 21.7989 6.10011 23.4205 8.72869 23.7474C11.5273 24.1005 14.522 23.5905 16.6667 21.655C19.0599 19.4841 19.8969 16.0055 18.6676 13.0238L18.4976 12.6838C18.223 12.0823 17.4906 11.0361 17.4906 11.0361ZM13.3581 19.2749C12.992 19.5888 12.3904 19.9288 11.9196 20.0596C10.4549 20.5827 8.99024 19.8503 8.12712 18.9872C9.68335 18.621 10.6118 17.4702 10.8865 16.3063C11.1088 15.2601 10.6903 14.397 10.5203 13.39C10.3634 12.4223 10.3895 11.5984 10.7426 10.6961C10.9911 11.193 11.2526 11.6899 11.5665 12.0823C12.5735 13.39 14.1559 13.9654 14.4959 15.744C14.5482 15.9271 14.5743 16.1101 14.5743 16.3063C14.6136 17.3787 14.1428 18.5556 13.3581 19.2749Z" fill="currentColor" />
              </svg>
            </motion.div>
          </div>
        </motion.button>
      </div>

      {/* small screens */}
      <div className="md:hidden relative z-[60]">
        <motion.button onClick={() => setIsOpen(!isOpen)} className="relative group flex items-center justify-center px-1.5 py-1.5 rounded-[0.7rem]" whileTap={{ scale: 0.95 }} initial="initial" whileHover="hover"
          variants={{
            hover: {
              rotate: -4,
              transition: { type: "spring", stiffness: 300, damping: 12 }
            }
          }}
        >
          {/* Animated Background */}
          <motion.span className={`absolute inset-0 rounded-[0.7rem] z-[-1] transition-colors duration-300 ${isOpen ? "bg-white" : "bg-[#fcc8f8]"}`}
            variants={{
              initial: { width: "95%", left: "2.5%" },
              hover: {
                width: "100%",
                left: "0%",
                transition: { duration: 0.4, ease: [0.5, 1.25, 0.75, 1.25] }
              }
            }}
          />

          {/* Hambuger */}
          <motion.div className=" p-2.5 rounded-[0.7rem]  flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" >
            <motion.div className="relative w-5 h-5 flex items-center justify-center" initial={false} animate={isOpen ? "open" : "closed"}  >
              {/* Hambuger Lines */}
              <motion.span variants={{ closed: { opacity: 1, y: -4 }, open: { opacity: 0, y: 0 } }} className="absolute block h-0.5 w-full bg-black rounded-full" />
              <motion.span variants={{ closed: { opacity: 1, y: 4 }, open: { opacity: 0, y: 0 } }} className="absolute block h-0.5 w-full bg-black rounded-full" />

              {/* Close Icon Layers */}
              <motion.span variants={{ closed: { opacity: 0, rotate: 0 }, open: { opacity: 1, rotate: 45 } }} className="absolute block h-0.5 w-full bg-black rounded-full" />
              <motion.span variants={{ closed: { opacity: 0, rotate: 0 }, open: { opacity: 1, rotate: -45 } }} className="absolute block h-0.5 w-full bg-black rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div key="mobile-menu" initial={{ y: "-100vh", rotate: -40, opacity: 0 }} animate={{ y: 0, rotate: 0, opacity: 1 }} exit={{ y: "-100vh", rotate: 10, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
              bounce: 0.7,
              duration: 0.8
            }}
            className="fixed inset-0 bg-[#fcc8f8] z-50 flex flex-col items-center md:hidden m-3 rounded-[0.7rem] px-10 pt-20 pb-10 shadow-2xl overflow-hidden"
          >
            {/* Nav Links  */}
            <div className="grow flex flex-col items-center justify-center gap-2 w-full">
              {navLinks.map((link, i) => (
                <motion.div key={link.name}
                  initial={{ opacity: 0, y: -40, scale: 0.5, rotate: 5 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.4,
                    type: "spring",
                    stiffness: 260,
                    damping: 15,
                    bounce: 0.6
                  }}
                  className="w-full flex justify-center"
                >
                  <Link href={link.href} onClick={() => setIsOpen(false)} className="bg-white block w-fit px-8 py-4 rounded-[1.2rem] text-center text-2xl font-bold text-black shadow-sm hover:scale-105 transition-transform active:scale-95"  >    {link.name}    </Link>
                </motion.div>
              ))}
            </div>

            {/* Get Results Button */}
            <motion.button
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 150 }}
              transition={{
                delay: 0.7,
                duration: 0.6,
                ease: "easeOut"
              }}
              className="bg-black text-white w-fit px-8 py-5 rounded-[1.2rem] flex items-center justify-center gap-3 font-bold text-xl mt-auto mb-4 hover:scale-105 active:scale-95 transition-transform"
            >
              Get Results
              <span className="bg-white p-1 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 20 24" fill="none" className="text-[#ff4d4d]" >
                  <path d="M17.4906 11.0361C17.1898 10.6437 16.8237 10.3037 16.4837 9.96371C15.6075 9.17906 14.6136 8.61673 13.7766 7.79284C11.8281 5.88352 11.3965 2.73184 12.6389 0.3125C11.3965 0.613283 10.3111 1.29331 9.38256 2.03873C5.99549 4.75886 4.66158 9.55831 6.25704 13.6777C6.30935 13.8085 6.36166 13.9393 6.36166 14.1093C6.36166 14.397 6.16549 14.6585 5.90394 14.7632C5.60316 14.8939 5.2893 14.8155 5.04083 14.6062C4.96661 14.5441 4.90453 14.4687 4.85774 14.3839C3.37998 12.5138 3.14459 9.83294 4.13848 7.68822C1.95453 9.46676 0.764478 12.4746 0.934486 15.3124C1.01295 15.9663 1.09142 16.6202 1.31373 17.274C1.49682 18.0587 1.84991 18.8433 2.24224 19.5365C3.65461 21.7989 6.10011 23.4205 8.72869 23.7474C11.5273 24.1005 14.522 23.5905 16.6667 21.655C19.0599 19.4841 19.8969 16.0055 18.6676 13.0238L18.4976 12.6838C18.223 12.0823 17.4906 11.0361 17.4906 11.0361ZM13.3581 19.2749C12.992 19.5888 12.3904 19.9288 11.9196 20.0596C10.4549 20.5827 8.99024 19.8503 8.12712 18.9872C9.68335 18.621 10.6118 17.4702 10.8865 16.3063C11.1088 15.2601 10.6903 14.397 10.5203 13.39C10.3634 12.4223 10.3895 11.5984 10.7426 10.6961C10.9911 11.193 11.2526 11.6899 11.5665 12.0823C12.5735 13.39 14.1559 13.9654 14.4959 15.744C14.5482 15.9271 14.5743 16.1101 14.5743 16.3063C14.6136 17.3787 14.1428 18.5556 13.3581 19.2749Z" fill="currentColor" />
                </svg>
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;




{/* <motion.button
 
  initial={{ opacity: 0, y: 200 }} 
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 100 }}
  transition={{ 
    
    delay: 0.4, 
    duration: 0.7, 
    ease: [0.22, 1, 0.36, 1] 
  }}
  className="bg-black text-white w-fit px-8 py-5 rounded-[1.2rem] flex items-center justify-center gap-3 font-bold text-xl mt-auto mb-4"
>
  Get Results
  <span className="bg-white p-1 rounded-lg">
    
  </span>
</motion.button> */}