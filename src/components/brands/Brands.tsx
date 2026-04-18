"use client";

import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
    { id: 1, src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69241146b4df63c4ca966552_Bullit%20Digital.svg" },
    { id: 2, src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c194e6d1b186563459b107_morssinkhof.svg" },
    { id: 3, src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d88f755388cc2c74ecff_salontopper.svg" },
    { id: 4, src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d880bed5996600cbc586_seesing-flex.svg" },
    { id: 5, src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d86cd6ba384af3c14e58_graafschap-college.svg" },
    { id: 6, src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d85341bf0d7476e56a8c_fides.svg" },
    { id: 7, src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d838fc5735f090bd9843_SRHK.svg" },
    { id: 8, src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d81e72e08110e3fd1a17_knltb.svg" },
    { id: 9, src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684b062ebc242028ca4b3ea1_tho.svg" },
    { id: 10, src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684c05642bf8f5cea7384403_de-talententuin.svg" },
    { id: 11, src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c1952f22281ee50d3620b5_zclv.svg" },
];

const BrandSlider = () => {
    const [isHolding, setIsHolding] = useState(false);

    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            dragFree: true,
            align: "start"
        },
        [
            AutoScroll({
                speed: 1,
                stopOnInteraction: false,
                stopOnMouseEnter: false
            })
        ]
    );

    const rotationValues = [4, -4, 6, -6, 3, -3, 5, -5];

    return (
        <section className="py-24 bg-[#FAF4EC] overflow-hidden">
            <div className=" px-8 mb-16">
                <h2 className="max-w-7xl mx-auto text-[2.5rem] md:text-[4rem] text-[#1A1A1A] font-semibold selection:bg-black selection:text-white leading-[0.93] md:leading-[1.1] ">
                    These brands <br /> got hyped.
                </h2>
            </div>

            <div className="embla pb-16 cursor-grab active:cursor-grabbing"
                ref={emblaRef}
                onMouseDown={() => setIsHolding(true)}
                onMouseUp={() => setIsHolding(false)}
                onMouseLeave={() => setIsHolding(false)}
            >
                <div className="embla__container flex gap-4 pr-10">
                    {brands.map((brand, index) => (
                        <div className="embla__slide flex-none" key={`${brand.id}-${index}`}>
                            <motion.div
                                animate={{
                                    rotate: isHolding ? rotationValues[index % rotationValues.length] : 0
                                }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className=" w-40 h-40  md:w-[16rem] md:h-[16rem] border border-black/50 rounded-[0.9rem] flex items-center justify-center bg-transparent"
                            >
                                <div className="relative w-40 h-40 md:w-full md:h-full flex items-center justify-center pointer-events-none">
                                    <Image src={brand.src} width={260} height={140} className="object-contain" unoptimized alt="Brand" />
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            <div className=" px-8 mt-10">
                <hr className="border-t border-black/50" />
            </div>
        </section>
    );
};

export default BrandSlider;