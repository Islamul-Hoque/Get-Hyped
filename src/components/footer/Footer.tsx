// "use client";

// import React, { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// interface FloatingImage {
//   id: number;
//   src: string;
//   x: number;
//   y: number;
//   rotation: number;
//   moveX: number; // মাউসের ডিরেকশন অনুযায়ী মুভমেন্ট
//   moveY: number;
// }

// const images: string[] = [
//   "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg",
//   "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415233f03ab6c1143fa_gh-logo-pink.svg",
//   "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415e192971624995445_gh-logo-green.svg",
//   "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415b3eecf81e4b1d9a7_gh-logo-red.svg"
// ];

// const HeroPart: React.FC = () => {
//   const [floatingImages, setFloatingImages] = useState<FloatingImage[]>([]);
//   const lastMousePos = useRef({ x: 0, y: 0 });

//   const handleMouseMove = (e: React.MouseEvent) => {
//     const { clientX, clientY } = e;

//     const distance = Math.hypot(
//       clientX - lastMousePos.current.x, 
//       clientY - lastMousePos.current.y
//     );

//     // তুমি চেয়েছিলে ডিস্ট্যান্স ৩০০ করতে
//     if (distance > 300) { 
//       // মাউস কোন দিকে যাচ্ছে তা বের করা (Direction Vector)
//       const diffX = clientX - lastMousePos.current.x;
//       const diffY = clientY - lastMousePos.current.y;

//       const newImg: FloatingImage = {
//         id: Date.now(),
//         src: images[Math.floor(Math.random() * images.length)],
//         x: clientX,
//         y: clientY,
//         rotation: Math.random() * 20 - 10,
//         // মাউসের মুভমেন্টের দিকে ৫০ পিক্সেল পুশ করবে
//         moveX: diffX > 0 ? 50 : -50, 
//         moveY: diffY > 0 ? 50 : -50,
//       };

//       setFloatingImages((prev) => [...prev.slice(-5), newImg]);
//       lastMousePos.current = { x: clientX, y: clientY };

//       setTimeout(() => {
//         setFloatingImages((prev) => prev.filter((img) => img.id !== newImg.id));
//       }, 1000);
//     }
//   };

//   return (
//     <div 
//       onMouseMove={handleMouseMove}
//       className="relative h-screen w-full bg-[#FAF4EC] flex items-center justify-center overflow-hidden select-none"
//     >
//       <h1 className="text-[10vw] font-bold text-[#1A1A1A] leading-tight z-0">
//         Let’s Get Hyped!
//       </h1>

//       <AnimatePresence>
//         {floatingImages.map((img) => (
//           <motion.div
//             key={img.id}
//             initial={{ 
//               opacity: 0, 
//               scale: 0.8, 
//               rotate: img.rotation,
//               x: "-50%", 
//               y: "-50%" 
//             }}
//             animate={{ 
//               opacity: 1, 
//               scale: 1,
//               // মাউসের ডিরেকশন অনুযায়ী ইমেজের পজিশন সামান্য মুভ করবে
//               left: [img.x, img.x + img.moveX],
//               top: [img.y, img.y + img.moveY],
//               transition: { 
//                 type: "spring", 
//                 stiffness: 100, 
//                 damping: 20,
//                 duration: 0.6 
//               }
//             }}
//             exit={{ 
//               opacity: 0, 
//               scale: 0.5,
//               transition: { duration: 0.4 } 
//             }}
//             style={{
//               position: "fixed",
//               pointerEvents: "none",
//               zIndex: 50
//             }}
//           >
//             <img 
//               src={img.src} 
//               alt="Brand Logo" 
//               className="w-48 h-auto object-contain" 
//             />
//           </motion.div>
//         ))}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default HeroPart;



// "use client";

// import React, { useState, useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react"; // npm install @gsap/react

// interface FloatingImage {
//   id: number;
//   src: string;
//   x: number;
//   y: number;
//   rotation: number;
//   moveX: number;
//   moveY: number;
// }

// const images: string[] = [
//   "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg",
//   "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415233f03ab6c1143fa_gh-logo-pink.svg",
//   "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415e192971624995445_gh-logo-green.svg",
//   "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415b3eecf81e4b1d9a7_gh-logo-red.svg"
// ];

// const HeroPart: React.FC = () => {
//   const [floatingImages, setFloatingImages] = useState<FloatingImage[]>([]);
//   const lastMousePos = useRef({ x: 0, y: 0 });
//   const containerRef = useRef<HTMLDivElement>(null);

//   const handleMouseMove = (e: React.MouseEvent) => {
//     const { clientX, clientY } = e;

//     const dx = clientX - lastMousePos.current.x;
//     const dy = clientY - lastMousePos.current.y;
//     const distance = Math.hypot(dx, dy);

//     if (distance > 300) { 
//       const id = Date.now();
//       const newImg: FloatingImage = {
//         id,
//         src: images[Math.floor(Math.random() * images.length)],
//         x: clientX,
//         y: clientY,
//         rotation: Math.random() * 20 - 10,
//         moveX: dx > 0 ? 50 : -50, 
//         moveY: dy > 0 ? 50 : -50,
//       };

//       setFloatingImages((prev) => [...prev.slice(-5), newImg]);
//       lastMousePos.current = { x: clientX, y: clientY };
//     }
//   };

//   // GSAP Animation Logic
//   useGSAP(() => {
//     floatingImages.forEach((img) => {
//       const el = document.getElementById(`img-${img.id}`);
//       if (el && !el.dataset.animated) {
//         el.dataset.animated = "true"; // ডাবল অ্যানিমেশন রোধ করতে

//         const tl = gsap.timeline({
//           onComplete: () => {
//             // অ্যানিমেশন শেষ হলে স্টেট থেকে রিমুভ
//             setFloatingImages((prev) => prev.filter((i) => i.id !== img.id));
//           }
//         });

//         // ১. Initial & Animate (একসাথে)
//         tl.fromTo(el, 
//           { 
//             opacity: 0, 
//             scale: 0.8, 
//             rotation: img.rotation,
//             xPercent: -50,
//             yPercent: -50,
//           },
//           {
//             opacity: 1,
//             scale: 1,
//             left: img.x + img.moveX,
//             top: img.y + img.moveY,
//             duration: 0.6,
//             ease: "back.out(1.7)", // ফ্রেমার মোশনের স্প্রিং এর মতো কাজ করবে
//           }
//         )
//         // ২. Exit Animation (১ সেকেন্ড পর শুরু হবে)
//         .to(el, {
//           opacity: 0,
//           scale: 0.5,
//           duration: 0.4,
//           delay: 0.5, // ইমেজটি কতক্ষণ স্ক্রিনে থাকবে
//           ease: "power2.in"
//         });
//       }
//     });
//   }, [floatingImages]);

//   return (
//     <div 
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       className="relative h-screen w-full bg-[#FAF4EC] flex items-center justify-center overflow-hidden select-none"
//     >
//       <h1 className="text-[10vw] font-bold text-[#1A1A1A] leading-tight z-0 pointer-events-none uppercase">
//         Let’s Get Hyped!
//       </h1>

//       {floatingImages.map((img) => (
//         <div
//           key={img.id}
//           id={`img-${img.id}`}
//           className="fixed pointer-events-none z-50 w-48 h-auto"
//           style={{
//             left: img.x,
//             top: img.y,
//             // শুরুতে ইনভিজিবল রাখা যাতে GSAP কন্ট্রোল নিতে পারে
//             opacity: 0,
//           }}
//         >
//           <img 
//             src={img.src} 
//             alt="Logo" 
//             className="w-full h-full object-contain" 
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HeroPart;




// "use client";

// import React, { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image"; // Next.js Image Component

// interface FloatingImage {
//   id: number;
//   src: string;
//   x: number;
//   y: number;
//   rotation: number;
//   targetX: number;
//   targetY: number;
// }

// const images: string[] = [
//   "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg",
//   "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415233f03ab6c1143fa_gh-logo-pink.svg",
//   "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415e192971624995445_gh-logo-green.svg",
//   "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415b3eecf81e4b1d9a7_gh-logo-red.svg"
// ];

// const HeroPart: React.FC = () => {
//   const [floatingImages, setFloatingImages] = useState<FloatingImage[]>([]);
//   const lastMousePos = useRef({ x: 0, y: 0 });

//   const handleMouseMove = (e: React.MouseEvent) => {
//     const { clientX, clientY } = e;

//     const dx = clientX - lastMousePos.current.x;
//     const dy = clientY - lastMousePos.current.y;
//     const distance = Math.hypot(dx, dy);

//     if (distance > 300) { 
//       const id = Date.now();

//       // X axis এ স্লাইড করার স্ট্রেংথ
//       const xOffset = 180; 
//       const yOffset = 60; 

//       const newImg: FloatingImage = {
//         id,
//         src: images[Math.floor(Math.random() * images.length)],
//         x: clientX,
//         y: clientY,
//         rotation: Math.random() * 30 - 15,
//         targetX: clientX + (dx > 0 ? xOffset : -xOffset),
//         targetY: clientY + (dy > 0 ? yOffset : -yOffset),
//       };

//       setFloatingImages((prev) => [...prev.slice(-6), newImg]);
//       lastMousePos.current = { x: clientX, y: clientY };

//       setTimeout(() => {
//         setFloatingImages((prev) => prev.filter((img) => img.id !== id));
//       }, 5000); // ভেসে থাকার জন্য একটু বেশি সময়
//     }
//   };

//   return (
//     <div 
//       onMouseMove={handleMouseMove}
//       className="relative h-screen w-full bg-[#FAF4EC] flex items-center justify-center overflow-hidden select-none"
//     >
//       <h1 className="text-[10vw] font-bold text-[#1A1A1A] leading-tight z-0 pointer-events-none">
//         LET'S FLOAT!
//       </h1>

//       <AnimatePresence>
//         {floatingImages.map((img) => (
//           <motion.div
//             key={img.id}
//             initial={{ 
//               opacity: 0, 
//               scale: 0.2,
//               left: img.x,
//               top: img.y,
//               rotate: img.rotation - 10,
//               x: "-50%", 
//               y: "-50%" 
//             }}
//             animate={{ 
//               opacity: 1, 
//               scale: 1,
//               left: img.targetX,
//               top: img.targetY,
//               rotate: img.rotation,
//               // Anti-gravity দুলুনি যোগ করা হয়েছে এখানে
//               y: ["-50%", "-65%", "-50%", "-35%", "-50%"], 
//               transition: { 
//                 left: { type: "spring", stiffness: 35, damping: 12 },
//                 top: { type: "spring", stiffness: 35, damping: 12 },
//                 // দুলুনির জন্য লুপ এনিমেশন
//                 y: { 
//                   duration: 4, 
//                   repeat: Infinity, 
//                   ease: "easeInOut" 
//                 },
//                 opacity: { duration: 0.6 }
//               }
//             }}
//             exit={{ 
//               opacity: 0, 
//               scale: 0,
//               transition: { duration: 0.8, delay: 2.5 } 
//             }}
//             style={{
//               position: "fixed",
//               pointerEvents: "none",
//               zIndex: 50
//             }}
//           >
//             <div className="relative w-64 h-32">
//               <Image 
//                 src={img.src} 
//                 alt="Brand Logo" 
//                 fill
//                 className="object-contain drop-shadow-2xl" 
//                 sizes="256px"
//                 priority
//               />
//             </div>
//           </motion.div>
//         ))}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default HeroPart;



// "use client";

// import React, { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";


// interface FloatingImage {
//     id: number;
//     src: string;
//     x: number;
//     y: number;
//     rotation: number;
//     targetX: number;
//     targetY: number;
// }


// const images: string[] = [
//     "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg",
//     "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415233f03ab6c1143fa_gh-logo-pink.svg",
//     "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415e192971624995445_gh-logo-green.svg",
//     "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415b3eecf81e4b1d9a7_gh-logo-red.svg"
// ];

// const HeroPart: React.FC = () => {
//     const [floatingImages, setFloatingImages] = useState<FloatingImage[]>([]);
//     const lastMousePos = useRef({ x: 0, y: 0 });

//     const handleMouseMove = (e: React.MouseEvent) => {
//         const { clientX, clientY } = e;
//         const dx = clientX - lastMousePos.current.x;
//         const dy = clientY - lastMousePos.current.y;
//         const distance = Math.hypot(dx, dy);

//         if (distance > 300) {
//             const id = Date.now();
//             const xOffset = 180;
//             const yOffset = 60;

//             const newImg: FloatingImage = {
//                 id,
//                 src: images[Math.floor(Math.random() * images.length)],
//                 x: clientX,
//                 y: clientY,
//                 rotation: Math.random() * 30 - 15,
//                 targetX: clientX + (dx > 0 ? xOffset : -xOffset),
//                 targetY: clientY + (dy > 0 ? yOffset : -yOffset),
//             };

//             setFloatingImages((prev) => [...prev.slice(-6), newImg]);
//             lastMousePos.current = { x: clientX, y: clientY };

//             setTimeout(() => {
//                 setFloatingImages((prev) => prev.filter((img) => img.id !== id));
//             }, 1500);
//         }
//     };

//     return (
//        <div className="flex flex-col">
        

// {/* Part-1 */}
        // <div
        //     onMouseMove={handleMouseMove}
        //     className="relative h-screen w-full bg-[#FAF4EC] flex items-center justify-center overflow-hidden select-none border-t-2 border-b-2 border-black"
        // >
        //     <div className="flex flex-col items-center">
        //         <h1 className="text-[6.23rem] mb-8 font-bold text-[#1A1A1A] leading-tight z-0 pointer-events-none">
        //             Let’s Get Hyped!
        //         </h1>

        //         <div className="flex gap-5 justify-center items-center">
        //             <motion.button className="relative group flex items-center gap-3 pl-5 pr-1 py-1 border border-black rounded-[0.7rem] font-bold text-base cursor-pointer bg-transparent overflow-hidden" initial="initial" whileHover="hover"
        //                     variants={{
        //                         hover: {
        //                             rotate: -4,
        //                             transition: { type: "spring", stiffness: 300, damping: 12 }
        //                         }
        //                     }}
        //                 >
        //                     <motion.span className="text-black " variants={{ hover: { rotate: -1, transition: { duration: 0.3 } } }}  >
        //                         Mail ons direct
        //                     </motion.span>
        //                     <motion.div className="bg-black text-white rounded-[0.65rem] p-2 flex items-center justify-center"
        //                         variants={{
        //                             initial: { scale: 1, rotate: 0 },
        //                             hover: { scale: 1, rotate: -8, transition: { type: "spring", stiffness: 400, damping: 10 } }
        //                         }}
        //                     >
        //                         {/* <ArrowRight size={18} strokeWidth={2.5} /> */}
        //                         <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" viewBox="0 0 22 17" fill="none" className="icon-12px"     >
        //                             <path d="M2.78843 16.5955C2.21806 16.5955 1.72996 16.3926 1.32413 15.9868C0.918306 15.581 0.715047 15.0925 0.714355 14.5214V2.077C0.714355 1.50663 0.917615 1.01853 1.32413 0.612707C1.73065 0.20688 2.21875 0.00362105 2.78843 0.00292969H19.381C19.9514 0.00292969 20.4398 0.206189 20.8464 0.612707C21.2529 1.01923 21.4558 1.50732 21.4551 2.077V14.5214C21.4551 15.0918 21.2522 15.5803 20.8464 15.9868C20.4405 16.3933 19.9521 16.5962 19.381 16.5955H2.78843ZM11.0847 9.15478C11.1711 9.15478 11.2621 9.14165 11.3575 9.11537C11.4529 9.0891 11.5434 9.05039 11.6292 8.99923L18.9662 4.41034C19.1045 4.32392 19.2082 4.21607 19.2773 4.08678C19.3465 3.9575 19.381 3.81473 19.381 3.65849C19.381 3.31281 19.2341 3.05355 18.9403 2.88071C18.6465 2.70787 18.344 2.71651 18.0329 2.90663L11.0847 7.26219L4.13658 2.90663C3.82547 2.71651 3.523 2.71236 3.22917 2.89419C2.93534 3.07602 2.78843 3.33078 2.78843 3.65849C2.78843 3.83132 2.823 3.98273 2.89213 4.11271C2.96127 4.24268 3.06497 4.34189 3.20324 4.41034L10.5403 8.99923C10.6267 9.05108 10.7176 9.09014 10.813 9.11641C10.9084 9.14268 10.999 9.15547 11.0847 9.15478Z" fill="currentColor" />
        //                         </svg>

        //                     </motion.div>
        //                 </motion.button>
        //                 <motion.button className="relative bg-[#FA5424]  text-white group flex items-center justify-center px-1.5 py-1.5 rounded-[0.7rem]" initial="initial" whileHover="hover"
        //                     variants={{ hover: { rotate: -4, transition: { type: "spring", stiffness: 300, damping: 12 } } }}
        //                 >
        //                     <motion.span
        //                         className="absolute inset-0  rounded-[0.7rem] z-[-1]"
        //                         variants={{
        //                             initial: { width: "95%", left: "2.5%" },
        //                             hover: {
        //                                 width: "100%",
        //                                 left: "0%",
        //                                 transition: { duration: 0.4, ease: [0.5, 1.25, 0.75, 1.25] }
        //                             }
        //                         }}
        //                     />

        //                     <div className="flex items-center gap-2 pl-3 pr-1">
        //                         <motion.span className="text-white font-bold whitespace-nowrap text-sm flex items-center gap-2" variants={{ hover: { rotate: -1, transition: { duration: 0.3 } } }}>
        //                             Get Results
        //                         </motion.span>
        //                         <motion.div className="bg-white p-1.5 rounded-lg flex items-center justify-center" variants={{ initial: { scale: 1, rotate: 0 }, hover: { scale: 1, rotate: -8, transition: { type: "spring", stiffness: 400, damping: 10 } } }}>
        //                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 20 24" fill="none" className="text-[#ff4d4d]" >
        //                                 <path d="M17.4906 11.0361C17.1898 10.6437 16.8237 10.3037 16.4837 9.96371C15.6075 9.17906 14.6136 8.61673 13.7766 7.79284C11.8281 5.88352 11.3965 2.73184 12.6389 0.3125C11.3965 0.613283 10.3111 1.29331 9.38256 2.03873C5.99549 4.75886 4.66158 9.55831 6.25704 13.6777C6.30935 13.8085 6.36166 13.9393 6.36166 14.1093C6.36166 14.397 6.16549 14.6585 5.90394 14.7632C5.60316 14.8939 5.2893 14.8155 5.04083 14.6062C4.96661 14.5441 4.90453 14.4687 4.85774 14.3839C3.37998 12.5138 3.14459 9.83294 4.13848 7.68822C1.95453 9.46676 0.764478 12.4746 0.934486 15.3124C1.01295 15.9663 1.09142 16.6202 1.31373 17.274C1.49682 18.0587 1.84991 18.8433 2.24224 19.5365C3.65461 21.7989 6.10011 23.4205 8.72869 23.7474C11.5273 24.1005 14.522 23.5905 16.6667 21.655C19.0599 19.4841 19.8969 16.0055 18.6676 13.0238L18.4976 12.6838C18.223 12.0823 17.4906 11.0361 17.4906 11.0361ZM13.3581 19.2749C12.992 19.5888 12.3904 19.9288 11.9196 20.0596C10.4549 20.5827 8.99024 19.8503 8.12712 18.9872C9.68335 18.621 10.6118 17.4702 10.8865 16.3063C11.1088 15.2601 10.6903 14.397 10.5203 13.39C10.3634 12.4223 10.3895 11.5984 10.7426 10.6961C10.9911 11.193 11.2526 11.6899 11.5665 12.0823C12.5735 13.39 14.1559 13.9654 14.4959 15.744C14.5482 15.9271 14.5743 16.1101 14.5743 16.3063C14.6136 17.3787 14.1428 18.5556 13.3581 19.2749Z" fill="currentColor" />
        //                             </svg>
        //                         </motion.div>
        //                     </div>
        //                 </motion.button>
        //         </div>
        //     </div>

        //     <AnimatePresence>
        //         {floatingImages.map((img) => (
        //             <motion.div
        //                 key={img.id}
        //                 initial={{
        //                     opacity: 0,
        //                     scale: 0.2,
        //                     left: img.x,
        //                     top: img.y,
        //                     rotate: img.rotation - 10,
        //                     x: "-50%",
        //                     y: "-50%"
        //                 }}
        //                 animate={{
        //                     opacity: 1,
        //                     scale: 1,
        //                     left: img.targetX,
        //                     top: img.targetY,
        //                     rotate: img.rotation,
        //                     transition: {
        //                         left: { type: "spring", stiffness: 35, damping: 12 },
        //                         top: { type: "spring", stiffness: 35, damping: 12 },
        //                         opacity: { duration: 0.6 }
        //                     }
        //                 }}
        //                 exit={{
        //                     opacity: 0,
        //                     scale: 0,
        //                     transition: { duration: 0.4, delay: 0.5 }
        //                 }}
        //                 style={{
                            
        //                     position: "absolute", 
        //                     pointerEvents: "none",
        //                     zIndex: 50
        //                 }}
        //             >
        //                 <div className="relative w-64 h-32">
        //                     <Image
        //                         src={img.src}
        //                         alt="Brand Logo"
        //                         fill
        //                         className="object-contain drop-shadow-2xl"
        //                         sizes="256px"
        //                         priority
        //                     />
        //                 </div>
        //             </motion.div>
        //         ))}
        //     </AnimatePresence>
        // </div>
//         {/* Part-2 */}
//         <div >
//                 <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1860 986" fill="none" className="footer-bg-svg">
//                     <path

//                         d="M1859.06 34.8264V349.463C1859.06 365.199 1859.06 380.122 1859.06 385.962L0.642595 385.955C0.642578 383.021 0.642769 379.682 0.642769 371.941V290.843C0.642769 283.856 5.67717 277.887 12.5466 276.741L1819.04 0.740997C1840 -2.74446 1859.06 13.489 1859.06 34.8184"
//                         fill="#EAE4D8"
//                     />
//                 </svg>
//             </div>
//     </div>
//     );
// };

// export default HeroPart;

"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence,useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import FooterBadge from "./footerBadge/FooterBadge";
import Logo2 from '../logo/Logo2';
import RightContent from './RightContent';
import CTAButton from "./CTAButton";

interface FloatingImage {
    id: number;
    src: string;
    x: number;
    y: number;
    rotation: number;
    targetX: number;
    targetY: number;
}

const images: string[] = [
    "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg",
    "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415233f03ab6c1143fa_gh-logo-pink.svg",
    "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415e192971624995445_gh-logo-green.svg",
    "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415b3eecf81e4b1d9a7_gh-logo-red.svg"
];

const HeroPart: React.FC = () => {
    
    const { scrollYProgress } = useScroll();
    const rotate = useTransform(scrollYProgress, [0, 1], [-120, -20]);


    const [floatingImages, setFloatingImages] = useState<FloatingImage[]>([]);
    const lastMousePos = useRef({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const dx = clientX - lastMousePos.current.x;
        const dy = clientY - lastMousePos.current.y;
        const distance = Math.hypot(dx, dy);

        if (distance > 300) {
            const id = Date.now();
            const xOffset = 180;
            const yOffset = 60;

            const newImg: FloatingImage = {
                id,
                src: images[Math.floor(Math.random() * images.length)],
                x: clientX,
                y: clientY,
                rotation: Math.random() * 30 - 15,
                targetX: clientX + (dx > 0 ? xOffset : -xOffset),
                targetY: clientY + (dy > 0 ? yOffset : -yOffset),
            };

            setFloatingImages((prev) => [...prev.slice(-6), newImg]);
            lastMousePos.current = { x: clientX, y: clientY };

            setTimeout(() => {
                setFloatingImages((prev) => prev.filter((img) => img.id !== id));
            }, 1500);
        }
    };

    return (
        <div className="relative flex flex-col  w-full bg-[#FAF4EC] overflow-hidden">
        <div className="">
            <div  onMouseMove={handleMouseMove}  className="relative  w-full flex flex-col items-center justify-center select-none border-b-2 border-black overflow-hidden" >
                {/* Part-1: Hero Section */}
                <div className="flex flex-col  pt-30 mt-20  items-center z-10">
                    <h1 className="text-[4.5rem] mb-8 font-bold text-[#1A1A1A] leading-tight pointer-events-none">   Let’s Get Hyped!  </h1>

                    {/* CTA Button */}
                    {/* <CTAButton /> */}
                    {/* Floating Images Animation */}
                    <AnimatePresence>
                    {floatingImages.map((img) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, scale: 0.2, left: img.x, top: img.y, rotate: img.rotation - 10, x: "-50%", y: "-50%" }}
                            animate={{ opacity: 1, scale: 1, left: img.targetX, top: img.targetY, rotate: img.rotation, transition: { left: { type: "spring", stiffness: 35, damping: 12 }, top: { type: "spring", stiffness: 35, damping: 12 }, opacity: { duration: 0.6 } } }}
                            exit={{ opacity: 0, scale: 0, transition: { duration: 0.4, delay: 0.5 } }}
                            style={{ position: "absolute", pointerEvents: "none", zIndex: 50 }}
                        >
                            <div className="relative w-64 h-32">
                                <Image src={img.src} alt="Brand Logo" fill className="object-contain drop-shadow-2xl" sizes="256px" priority />
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Part-2: absolute svg Footer Section */}
            <div className="relative  w-full">
            {/* MD Background SVG  */}
            <div className="absolute px-4 inset-0 w-full h-full pointer-events-none z-10">
                <svg viewBox="0 0 1860 386" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full  block object-cover" preserveAspectRatio="none" >
                    <path fill="#EAE4D8" d="M1859.06 34.8264V349.463C1859.06 365.199 1859.06 380.122 1859.06 385.962L0.642595 385.955C0.642578 383.021 0.642769 379.682 0.642769 371.941V290.843C0.642769 283.856 5.67717 277.887 12.5466 276.741L1819.04 0.740997C1840 -2.74446 1859.06 13.489 1859.06 34.8184" />
                </svg>
            </div>
            

            {/* Footer Badge */}
            <motion.div className="absolute hidden md:block top-0 right-[11%] -translate-y-1/2 z-30" initial={{ rotate: 0, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} style={{ rotate }}  >
                <FooterBadge />
            </motion.div>

            {/* Main Content */}
            <div className="relative pt-18 z-10 ">
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end gap-8 px-6">
                    {/* Left Content */}
                    <div className="w-full md:w-[16rem] flex justify-center md:justify-start items-center md:items-end pt-8 md:pt-0">
                        <Logo2 />
                    </div>

                    {/* Right Content */}
                    <RightContent />
                </div>
            </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default HeroPart;



{/* --- Part-2: Absolute Footer Section --- */}
            {/* <div className="relative w-full  mt-auto">
              <div className="absolute bottom-0 bg-#EAE4D8! left-0 w-full ">
                <BottomFooter  />
              </div>

            </div> */}


// import React from 'react';
// import BottomFooter from './BottomFooter';

// const Footer = () => {
//   return (
//     <div>
//       <BottomFooter />
//     </div>
//   );
// };

// export default Footer;






//  <div className="flex flex-col">
//             <div
//                 onMouseMove={handleMouseMove}
//                 className="relative h-screen w-full bg-[#FAF4EC] flex items-center justify-center overflow-hidden select-none"
//             >
//                 <div className="flex flex-col ">

//                     <h1 className="text-[6.23rem] mb-8 font-bold  text-[#1A1A1A] leading-tight z-0 pointer-events-none">
//                         Let’s Get Hyped!
//                     </h1>
//                     <div className="flex gap-5 justify-center items-center">


                        
//                     </div>
//                 </div>

//                 <AnimatePresence>
//                     {floatingImages.map((img) => (
//                         <motion.div
//                             key={img.id}
//                             initial={{
//                                 opacity: 0,
//                                 scale: 0.2,
//                                 left: img.x,
//                                 top: img.y,
//                                 rotate: img.rotation - 10,
//                                 x: "-50%",
//                                 y: "-50%"
//                             }}
//                             animate={{
//                                 opacity: 1,
//                                 scale: 1,
//                                 left: img.targetX,
//                                 top: img.targetY,
//                                 rotate: img.rotation,
//                                 transition: {
//                                     left: { type: "spring", stiffness: 35, damping: 12 },
//                                     top: { type: "spring", stiffness: 35, damping: 12 },
//                                     opacity: { duration: 0.6 }
//                                 }
//                             }}
//                             exit={{
//                                 opacity: 0,
//                                 scale: 0,
//                                 transition: { duration: 0.4, delay: 0.5 }
//                             }}
//                             style={{
//                                 position: "fixed",
//                                 pointerEvents: "none",
//                                 zIndex: 50
//                             }}
//                         >
//                             <div className="relative w-64 h-32">
//                                 <Image
//                                     src={img.src}
//                                     alt="Brand Logo"
//                                     fill
//                                     className="object-contain drop-shadow-2xl"
//                                     sizes="256px"
//                                     priority
//                                 />
//                             </div>
//                         </motion.div>
//                     ))}
//                 </AnimatePresence>
//             </div>

//         </div>