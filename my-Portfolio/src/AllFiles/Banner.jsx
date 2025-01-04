import React, { useEffect } from 'react';
import img from '../assets/mypic.jpg';
import { FaGithub } from "react-icons/fa";
import { MdContactPhone } from 'react-icons/md';
import { FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa6';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true, 
        });
      }, []);
      
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-1 md:gap-12 gap-10 lg:py-32 md:py-16 py-10'>
            <div className="avatar mx-auto">
                <div className="ring-primary ring-offset-base-100 lg:w-72 md:w-60 w-40 rounded-full ring ring-offset-2">
                    <img src={img} alt="Abdulla Al Galib" />
                </div>
            </div>
            <div className='mx-auto lg:pl-0 md:pl-0 pl-10'>
                <h2 className='font-bold lg:text-2xl md:text-2xl text-xl text-white'>Hello!</h2>
                <h2 className='font-bold lg:text-5xl md:text-5xl text-2xl text-white my-4' data-aos="fade-left">
                    I'm Abdulla Al GaLib
                </h2>
                <h2 className='font-bold lg:text-2xl md:text-2xl text-xl text-white' data-aos="fade-right">
                    Full-Stack Web Developer (MERN)
                </h2>
                <button className="px-4 py-2 bg-white text-[#9E31F1] font-bold border-2 border-white rounded-full hover:bg-gradient-to-r hover:from-[#9E31F1] hover:to-[#C82CD9] hover:text-white flex items-center my-4">
                    <a href="#contact">CONTACT ME</a>
                    <span className="p-2 ml-2 rounded-full bg-purple-500 text-white">
                        <MdContactPhone />
                    </span>
                </button>
                <div className='flex gap-4 py-4'>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/galibcse19">
                        <p className='text-3xl text-white hover:text-black'><FaGithub /></p>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/abdulla-al-galib-10614422a/">
                        <p className='text-3xl text-white hover:text-black'><FaLinkedin /></p>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://t.me/galibcse19">
                        <p className='text-3xl text-white hover:text-black'><FaTelegram /></p>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://wa.me/+8801970094739">
                        <p className='text-3xl text-white hover:text-black'><FaWhatsapp /></p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
