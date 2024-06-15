"use client";

import Image from 'next/image';
import React from 'react';
import LogoIMG from '@/public/logo.jpg';
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const {ref} = useSectionInView("Home", 0.5);
  const {setActiveSection, setTimeOfLastClick }
  = useActiveSectionContext();

  return (
      <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
        <div className='flex items-center justify-center'>
          <div className='relative'>
            <motion.div 
              initial={{opacity: 0, scale: 0}}
              animate={{opacity: 1, scale: 1}}
              transition={{
                type: "tween",
                duration: 0.2,
              }}>
              <Image src={LogoIMG} alt='My Logo' width='192' height='192' quality='95' priority={true} className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl' />
            </motion.div>
            <motion.span className="absolute bottom-0 right-0 text-4xl"
              initial={{opacity: 0, scale: 0}}
              animate={{opacity: 1, scale: 1}}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.5,
              }}>🧁</motion.span>
          </div>
        </div>
        <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl'
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}>
          <span className="font-bold">Welcome, I'm  Sir Cupcake.</span> I'm a{" "}
          <span className="font-bold">pro dragonslayer and adventurer</span> with{" "}
          <span className="font-bold">5 years</span> of experience. I enjoy
          killing <span className="italic">dragons & demons</span>. My current goal is to{" "}
          <span className="underline">become a hero of the realm</span>.
        </motion.h1>
        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          transition={{
            delay: 0.1,
            }}>
          <Link href="#contact" 
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          >Hit me up here<BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' /></Link>

          <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack' href='/CV.pdf' download={true}>Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' /></a>
          
          <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack' href="https://www.linkedin.com/" target='_blank'>
            <BsLinkedin />
          </a>
          
          <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer bborderBlack' href='https://www.instagram.com/' target="_blank"> 
            <FaInstagram />
          
          </a>
        </motion.div>
      </section>
      )
}
