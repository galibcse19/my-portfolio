import React, { useEffect } from 'react';
import SharedTitle from './SharedTitle';
import { FaDownload } from 'react-icons/fa6';
import img from '../assets/me1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
    useEffect(() => {
            AOS.init({
              duration: 1000, 
              once: true, 
            });
          }, []);
    return (
        <div className='my-10'>
             <SharedTitle title={"About Me"}></SharedTitle>
             <div className='lg:mx-36 md:mx-20 mx-4 grid lg:grid-cols-3 grid-cols-1 gap-8 p-4'>
                <div data-aos="fade-up" className='col-span-2'>
                    <p className='text-justify font-semibold text-gray-500 text-md'>I am an eager and driven undergraduate student, a full-stack developer with a passion for crafting innovative web solutions using the powerful MERN stack. My technical toolbox is filled with tools like HTML, CSS, Tailwind, JavaScript, React.js, Node.js, Express.js, and MongoDB, which I use to build dynamic, responsive, and scalable applications. One of my proudest creations is Language Oasis, a groundbreaking online language learning platform that boasts seamless authentication, a visually captivating frontend, integrated payment solutions, and intuitive admin controls. My journey as a developer is fueled by a thirst for knowledge, a sharp analytical mind, and a natural flair for leadership, allowing me to guide teams toward success. While I am a quick study, highly logical, and deeply committed, I sometimes find myself being a bit too direct, occasionally impatient, and often reluctant to turn down requests for help.</p>
                    <div className='lg:flex md:flex gap-10 py-8'>
                        <div className='text-center'>
                            <h2 className='text-4xl font-black text-[#9E31F1]'>01+</h2>
                            <h2 className='font-semibold text-lg text-gray-500'>Years experience</h2>
                        </div>
                        <div className='text-center lg:my-1 md:my-1 my-6'>
                            <h2 className='text-4xl font-black text-[#9E31F1]'>25+</h2>
                            <h2 className='font-semibold text-lg text-gray-500'>Completed Projects</h2>
                        </div>
                        <div className='text-center'>
                            <h2 className='text-4xl font-black text-[#9E31F1]'>00+</h2>
                            <h2 className='font-semibold text-lg text-gray-500'>Companies Work </h2>
                        </div>
                    </div>
                     <button className="px-4 py-2 bg-white text-[#9E31F1] font-bold border-2 border-[#9E31F1] rounded-full hover:bg-gradient-to-r hover:from-[#9E31F1] hover:to-[#C82CD9] hover:text-white flex items-center "><a  href="https://drive.google.com/file/d/1IjG779LqJrl6jwPWk0t1rBWTGmePK28z/view?usp=sharing"
                        className="flex items-center"
                        target='_blank'
                        download>
                     DOWNLOAD RESUME <span className="p-2 ml-2 rounded-full bg-purple-500 text-white"><FaDownload /></span></a></button>
                </div>
                <div data-aos="fade-up" className='p-4'>
                    <img className='w-72 border rounded-xl' src={img}  alt="" />
                </div>
             </div>
        </div>
    );
};

export default AboutMe;