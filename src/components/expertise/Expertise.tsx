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
    progress: any;
    range: [number, number];
    targetScale: number;
}

const cards = [
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
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    return (
        <section ref={container} className="bg-[#FAF4EC] pb-20">
            <div className="max-w-7xl mx-auto px-6">
                {cards.map((card, i) => {
                    const targetScale = 1 - ((cards.length - i) * 0.09);
                    return (
                        <Card key={card.id}  {...card} i={i} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />
                    )
                })}
            </div>
        </section>
    )
}

function Card({ id, title, subTitle, desc, video, href, bg, color, badgeBg, borderColor, btnBg, btnText, i, progress, range, targetScale }: CardProps) {
    const container = useRef(null)
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{
                    scale,
                    backgroundColor: bg,
                    color: color,
                    top: 15
                    // top: `calc(-5vh + ${i * 25}px)` 
                }}
                className="relative w-full rounded-[2.5rem] p-6 md:p-12 flex flex-col gap-6 border border-black/5 overflow-hidden shadow-xl"
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
                <div className="flex flex-col md:flex-row justify-between flex-1 selection:bg-[#000000] selection:text-white">
                    <div className="flex flex-col justify-between py-2">
                        <Link href={href}>
                            <h2 className="text-3xl md:text-[5.2rem] md:-mt-8 font-semibold tracking-tighter leading-[0.9] cursor-pointer select-none hover:opacity-90 transition-opacity"> {title} </h2>
                        </Link>

                        {/* Mobile Video */}
                        <Link href={href} className="block md:hidden">
                            <div
                                style={{ borderColor: borderColor }}
                                className="w-[10rem] my-8 aspect-[3/4] rounded-[1.1rem] overflow-hidden shadow-2xl border-[8px] relative z-10 bg-black/5 rotate-[-2deg]"
                            >
                                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                                    <source src={video} type="video/mp4" />
                                </video>
                            </div>
                        </Link>

                        <div className="flex flex-col gap-8">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold">{subTitle}</h3>
                                <p className="md:w-[80%] text-[1.2rem] leading-[1.2] font-semibold opacity-80"> {desc} </p>
                            </div>

                            <Link href={href}>
                                <motion.button
                                    style={{ backgroundColor: btnBg, color: btnText }}
                                    className="w-fit flex items-center gap-3 pl-6 pr-1.5 py-1.5 border border-black/10 rounded-2xl font-semibold text-base cursor-pointer shadow-sm"
                                    whileHover={{ rotate: -4, scale: 1.05 }}
                                >
                                    <span>Meer over {title.toLowerCase()}</span>
                                    <div className="bg-black text-white rounded-xl p-2 flex items-center justify-center">
                                        <ArrowRight size={18} strokeWidth={3} />
                                    </div>
                                </motion.button>
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Video */}
                    <Link href={href} className="hidden md:block self-center">
                        <motion.div
                            style={{ borderColor: borderColor }}
                            className="md:w-[20rem] md:aspect-[3/4] rounded-[1.1rem] overflow-hidden shadow-2xl border-[8px] relative z-10 bg-black/5 origin-center"
                            initial={{ rotate: 4 }}
                            whileHover={{ rotate: 0, scale: 1.05 }}
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