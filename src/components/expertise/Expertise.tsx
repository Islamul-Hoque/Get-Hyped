'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface CardProps {
    id: string;
    title: string;
    subTitle: string;
    desc: string;
    video: string;
    href: string;
    bg: string;
    color: string;
    badgeBg: string;
    borderColor: string;
    btnBg: string;
    btnText: string;
    i: number;
}

const cards: Omit<CardProps, 'i'>[] = [
    {
        id: '01', title: 'Social strategy', subTitle: 'Slimme strategie. Sterke start.',
        desc: 'We duiken diep in jouw merk, doelgroup en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken.',
        video: 'https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4',
        href: '/expertises/social-strategie',
        bg: '#FFFFFF', color: 'black', badgeBg: '#EAE4D8', borderColor: '#FA5424', btnBg: '#FA5424', btnText: 'white'
    },
    {
        id: '02', title: 'Content creation', subTitle: 'Content die opvalt en raakt.',
        desc: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.',
        video: 'https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4',
        href: '/expertises/content-creatie',
        bg: '#FCB8FA', color: 'black', badgeBg: '#FFFFFF', borderColor: '#FFFFFF', btnBg: '#FFFFFF', btnText: 'black'
    },
    {
        id: '03', title: 'Activation', subTitle: 'Zichtbaar waar en wanneer het telt.',
        desc: 'De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is.',
        video: 'https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4',
        href: '/expertises/activatie',
        bg: '#33C791', color: 'black', badgeBg: '#FFFFFF', borderColor: '#FFFFFF', btnBg: '#FFFFFF', btnText: 'black'
    },
    {
        id: '04', title: 'Data', subTitle: 'Inzichten die impact maken.',
        desc: 'We duiken in de cijfers om te snappen what écht werkt. En sturen jouw content scherp bij.',
        video: 'https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4',
        href: '/expertises/data',
        bg: '#0D8DFF', color: 'white', badgeBg: '#FFFFFF', borderColor: '#FFFFFF', btnBg: '#FFFFFF', btnText: 'black'
    },
]

export default function ExpertiseStack() {
    return (
        <section className="bg-[#FAF4EC] py-20 ">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-y-20">
                {cards.map((card, i) => (<Card key={card.id} {...card} i={i} />))}
            </div>
        </section>
    )
}

function Card({ id, title, subTitle, desc, video, href, bg, color, badgeBg, borderColor, btnBg, btnText, i }: CardProps) {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start']
    })

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
    const rotate = useTransform(scrollYProgress, [0, 1], [0, i % 2 === 0 ? -2 : 2])

    return (
        <div ref={container} className="flex  items-center justify-center sticky top-10">
            <motion.div style={{ scale, rotate, backgroundColor: bg, color: color }}
                className="relative w-full rounded-[2.5rem] p-6 md:p-12  flex flex-col gap-6  border border-black/5  overflow-hidden"
            >
                {/* Top Row */}
                <div className="flex justify-between items-start w-full ">
                    <div className='pb-7 md:pb-0'>
                        <Link href={href}>
                            <span style={{ backgroundColor: badgeBg }} className="px-4 py-1.5 rounded-[0.7rem] font-medium text-black cursor-pointer "> Expertise </span>
                        </Link>
                    </div>
                    <span className="text-[3rem] md:text-[5.5rem] font-bold opacity-10 leading-[0.5] select-none mr-4 text-current"> {id} </span>
                </div>

                {/* Bottom Part */}
                <div className="flex justify-between  flex-1 selection:bg-[#000000] selection:text-white">

                    <div className="flex flex-col justify-between py-2">
                        <Link href={href}>
                            <h2 className="text-3xl md:text-[5.2rem] -mt-8 font-semibold tracking-tighter leading-[0.9] cursor-pointer select-none hover:opacity-90 transition-opacity"> {title} </h2>
                        </Link>

                        {/* Mobile Video */}
                        <Link href={href} className="block  md:hidden">
                            <motion.div
                                style={{ borderColor: borderColor }}
                                className="w-[10rem] my-8 aspect-3/4 rounded-[1.1rem] overflow-hidden shadow-2xl border-[8px] relative z-10 bg-black/5 origin-top-left cursor-pointer"
                                initial={{ rotate: -2 }}
                                whileHover={{ rotate: -2, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            >
                                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                                    <source src={video} type="video/mp4" />
                                </video>
                            </motion.div>
                        </Link>

                        <div className="flex flex-col gap-8">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold">{subTitle}</h3>
                                <p className="md:w-[50%] text-[1.2rem] leading-[1.2] font-semibold  "> {desc} </p>
                            </div>

                            {/* Button Link */}
                            <Link href={href}>
                                <motion.button style={{ backgroundColor: btnBg, color: btnText }} className="w-fit relative group flex items-center gap-3 pl-6 pr-1.5 py-1.5 border border-black/10 rounded-2xl font-semibold text-base cursor-pointer overflow-hidden shadow-sm" whileHover="hover"
                                    variants={{
                                        hover: { rotate: -4, transition: { type: "spring", stiffness: 300, damping: 12 } }
                                    }}
                                >
                                    <span className="z-10">Meer over {title.toLowerCase()}</span>
                                    <motion.div className="bg-black text-white rounded-xl p-2 flex items-center justify-center z-10" variants={{ hover: { rotate: -10, scale: 1.1 } }}   >
                                        <ArrowRight size={18} strokeWidth={3} />
                                    </motion.div>
                                </motion.button>
                            </Link>
                        </div>
                    </div>

                    {/* Video */}
                    <Link href={href} className="hidden md:block">
                        <motion.div
                            style={{ borderColor: borderColor }}
                            className="w-full md:max-w-[20rem] md:aspect-3/4 rounded-[1.1rem] overflow-hidden shadow-2xl border-[8px] relative z-10 bg-black/5 origin-top-left cursor-pointer"
                            initial={{ rotate: 4 }}
                            whileHover={{ rotate: 4, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        >
                            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                                <source src={video} type="video/mp4" />
                            </video>
                        </motion.div>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}



// 'use client'
// import { useRef } from 'react'
// import { ArrowRight } from 'lucide-react'
// import Link from 'next/link'
// import gsap from 'gsap'
// import { useGSAP } from '@gsap/react'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'


// gsap.registerPlugin(ScrollTrigger);

// interface CardProps {
//     id: string;
//     title: string;
//     subTitle: string;
//     desc: string;
//     video: string;
//     href: string;
//     bg: string;
//     color: string;
//     badgeBg: string;
//     borderColor: string;
//     btnBg: string;
//     btnText: string;
//     i: number;
// }

// const cards: Omit<CardProps, 'i'>[] = [
//     {
//         id: '01', title: 'Social strategy', subTitle: 'Slimme strategie. Sterke start.',
//         desc: 'We duiken diep in jouw merk, doelgroup en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken.',
//         video: 'https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4',
//         href: '/expertises/social-strategie',
//         bg: '#FFFFFF', color: 'black', badgeBg: '#EAE4D8', borderColor: '#FA5424', btnBg: '#FA5424', btnText: 'white'
//     },
//     {
//         id: '02', title: 'Content creation', subTitle: 'Content die opvalt en raakt.',
//         desc: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.',
//         video: 'https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4',
//         href: '/expertises/content-creatie',
//         bg: '#FCB8FA', color: 'black', badgeBg: '#FFFFFF', borderColor: '#FFFFFF', btnBg: '#FFFFFF', btnText: 'black'
//     },
//     {
//         id: '03', title: 'Activation', subTitle: 'Zichtbaar waar en wanneer het telt.',
//         desc: 'De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is.',
//         video: 'https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4',
//         href: '/expertises/activatie',
//         bg: '#33C791', color: 'black', badgeBg: '#FFFFFF', borderColor: '#FFFFFF', btnBg: '#FFFFFF', btnText: 'black'
//     },
//     {
//         id: '04', title: 'Data', subTitle: 'Inzichten die impact maken.',
//         desc: 'We duiken in de cijfers om te snappen what écht werkt. En sturen jouw content scherp bij.',
//         video: 'https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4',
//         href: '/expertises/data',
//         bg: '#0D8DFF', color: 'white', badgeBg: '#FFFFFF', borderColor: '#FFFFFF', btnBg: '#FFFFFF', btnText: 'black'
//     },
// ]

// export default function ExpertiseStack() {
//     return (
//         <section className="bg-[#FAF4EC] py-20 px-6">
//             <div className="max-w-7xl mx-auto flex flex-col gap-y-[30vh]"> {/* গ্যাপ বাড়িয়ে দেওয়া হয়েছে স্ক্রলিং স্মুথ করতে */}
//                 {cards.map((card, i) => (
//                     <Card key={card.id} {...card} i={i} />
//                 ))}
//             </div>
//         </section>
//     )
// }

// function Card({ id, title, subTitle, desc, video, href, bg, color, badgeBg, borderColor, btnBg, btnText, i }: CardProps) {
//     const containerRef = useRef(null);
//     const cardRef = useRef(null);

//     useGSAP(() => {

//         gsap.to(cardRef.current, {
//             scale: 0.9,
//             rotate: i % 2 === 0 ? -3 : 3,
//             scrollTrigger: {
//                 trigger: containerRef.current,
//                 start: "top top", // যখন কার্ডের মাথা স্ক্রিনের মাথায় পৌঁছাবে
//                 end: "bottom top", // যখন কার্ডের তলা স্ক্রিনের মাথায় পৌঁছাবে
//                 scrub: true, // স্ক্রলিংয়ের সাথে সাথে এনিমেশন হবে
//                 // markers: true, // টেস্টিংয়ের সময় এটি অন করে পজিশন দেখতে পারেন
//             }
//         });
//     }, { scope: containerRef });

//     return (
//         <div ref={containerRef} className="flex items-center justify-center sticky top-10 h-[80vh]">
//             <div 
//                 ref={cardRef}
//                 style={{ backgroundColor: bg, color: color, originY: 0 }} 
//                 className="relative w-full rounded-[2.5rem] p-8 md:p-12 flex flex-col gap-6 shadow-xl border border-black/5 overflow-hidden"
//             >
//                 {/* --- Top Row --- */}
//                 <div className="flex justify-between items-start w-full">
//                     <Link href={href}>
//                         <span style={{ backgroundColor: badgeBg }} className="px-4 py-1.5 rounded-[0.7rem] font-medium text-black cursor-pointer"> Expertise </span>
//                     </Link>
//                     <span className="text-[5.5rem] font-bold opacity-10 leading-[0.5] select-none mr-4 text-current"> {id} </span>
//                 </div>

//                 {/* --- Bottom Part --- */}
//                 <div className="flex justify-between items-end flex-1 selection:bg-black selection:text-white">
//                     <div className="flex flex-col justify-between py-2">
//                         <Link href={href}>
//                             <h2 className="text-3xl md:text-[5.2rem] -mt-8 font-semibold tracking-tighter leading-[0.9] cursor-pointer select-none hover:opacity-90 transition-opacity"> {title} </h2>
//                         </Link>

//                         <div className="flex flex-col gap-8">
//                             <div className="space-y-4">
//                                 <h3 className="text-2xl font-semibold">{subTitle}</h3>
//                                 <p className="md:w-[60%] text-[1.2rem] leading-[1.2] font-semibold"> {desc} </p>
//                             </div>

//                             <Link href={href}>
//                                 <button 
//                                     style={{ backgroundColor: btnBg, color: btnText }} 
//                                     className="w-fit group flex items-center gap-3 pl-6 pr-1.5 py-1.5 border border-black/10 rounded-2xl font-semibold text-base cursor-pointer shadow-sm transition-transform hover:-rotate-3"
//                                 >
//                                     <span className="z-10">Meer over {title.toLowerCase()}</span>
//                                     <div className="bg-black text-white rounded-xl p-2 flex items-center justify-center transition-transform group-hover:-rotate-12 group-hover:scale-110">
//                                         <ArrowRight size={18} strokeWidth={3} />
//                                     </div>
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Video Part */}
//                     <Link href={href} className="block">
//                         <div
//                             style={{ borderColor: borderColor }}
//                             className="w-full md:w-[20rem] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] relative z-10 bg-black/5 rotate-3 transition-transform hover:scale-105"
//                         >
//                             <video autoPlay loop muted playsInline className="w-full h-full object-cover">
//                                 <source src={video} type="video/mp4" />
//                             </video>
//                         </div>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }





















{/* <div className="relative">
        
        <div className="absolute top-0 left-0 w-full -translate-y-[98.5%] text-[#EAE4D8]">
          <svg viewBox="0 0 429 90" fill="none" className="w-full block" preserveAspectRatio="none">
            <path d="M428.625 35.0943V136.589C428.625 152.326 428.625 167.249 428.625 170L1.03513e-06 170C-1.56688e-05 167.148 0.000175319 164.808 0.000175319 159.068V77.9695C0.000175319 70.9826 5.03458 65.0132 11.904 63.8674L388.605 1.00885C409.565 -2.47661 428.625 13.7568 428.625 35.0862" fill="currentColor" />
          </svg>
        </div>

        
        <div className="relative bg-[#EAE4D8] px-10 pt-20 pb-10">
          <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-end gap-16">
            
           
            <div className="w-[300px]">
              <Logo />
            </div>

            
            <div className="flex flex-col items-end gap-10">
             
              <nav className="flex flex-wrap justify-end gap-2">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} className="relative group px-5 py-2 overflow-hidden rounded-[0.7rem] block bg-white">
                    <span className="absolute inset-0 bg-white rounded-[0.7rem] overflow-hidden grid">
                      <span className="absolute inset-0 w-[120%] h-full bg-[#ff4d4d] origin-right block transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] translate-x-[-10%] translate-y-[100%] rotate-[-12deg] group-hover:translate-y-0 group-hover:rotate-0" style={{ zIndex: 1 }} />
                      <span className="absolute inset-0 w-[120%] h-full bg-black origin-right block transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] translate-y-[100%] rotate-[-12deg] delay-[50ms] group-hover:translate-y-0 group-hover:rotate-0" style={{ zIndex: 2 }} />
                    </span>
                    <span className="relative z-10 font-bold text-sm grid overflow-hidden">
                      <span className="block transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-[-120%] group-hover:rotate-[-5deg] opacity-100 group-hover:opacity-0" style={{ gridArea: "1 / 1" }}>{link.name}</span>
                      <span className="block transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] translate-y-[120%] rotate-[5deg] group-hover:translate-y-0 group-hover:rotate-0 text-white opacity-0 group-hover:opacity-100" style={{ gridArea: "1 / 1" }}>{link.name}</span>
                    </span>
                  </Link>
                ))}
              </nav>

              
              <div className="flex flex-col md:flex-row gap-16 text-right items-end">
               
                <div className="flex gap-3">
                  {["ln", "tk", "ig", "yt"].map((s) => (
                    <div key={s} className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-xs uppercase cursor-pointer hover:bg-black hover:text-white transition-all">
                      {s}
                    </div>
                  ))}
                </div>

              
                <div className="flex gap-16">
                  <div className="text-sm">
                    <h4 className="font-bold opacity-40 uppercase tracking-tighter mb-2">Contact</h4>
                    <p className="font-semibold">info@gethyped.nl</p>
                    <p className="font-semibold">+31 6 1533 7496</p>
                  </div>
                  <div className="text-sm">
                    <h4 className="font-bold opacity-40 uppercase tracking-tighter mb-2">Adres</h4>
                    <p className="font-semibold">Beltrumsestraat 6,</p>
                    <p className="font-semibold">7141 AL Groenlo</p>
                  </div>
                </div>
              </div>

             
              <Link href="#" className="text-xs opacity-40 hover:opacity-100 underline underline-offset-4">
                Privacyvoorwaarden
              </Link>
            </div>
          </div>

         
          <div className="max-w-screen-2xl mx-auto flex justify-between mt-16 text-[10px] font-bold opacity-30 uppercase tracking-widest">
            <p>© 2026 Get Hyped</p>
            <p>Design by Dylan</p>
          </div>
        </div>
      </div> */}