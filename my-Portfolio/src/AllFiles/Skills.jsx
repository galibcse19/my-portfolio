import React, { useEffect } from 'react';
import SharedTitle from './SharedTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {
                    AOS.init({
                      duration: 1000, 
                      once: true, 
                    });
                  }, []);
    return (
        <div className='my-10'>
            <SharedTitle title={"Professional Skills"}></SharedTitle>
            <div data-aos="fade-up" className='lg:px-36 md:px-20 px-4 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 p-6'>
                <div>
                    <h2 className="font-black text-xl mb-6 text-[#9E31F1]">Programming Languages</h2>
                    <h3 className='font-bold my-2 text-gray-500'>JAVASCRIPT</h3>
                    <h3 className='font-bold text-gray-500'>PYTHON</h3>
                    <h3 className='font-bold my-2 text-gray-500'>C</h3>
                    <h3 className='font-bold text-gray-500'>CPP</h3>
                    <h3 className='font-bold my-2 text-gray-500'>JAVA</h3>
                </div>
                <div>
                    <h2 className="font-black text-xl mb-6 text-[#9E31F1]">Frontend</h2>
                    <h3 className='font-bold my-2 text-gray-500'>HTML</h3>
                    <h3 className='font-bold text-gray-500'>CSS</h3>
                    <h3 className='font-bold my-2 text-gray-500'>TAILWINDCSS</h3>
                    <h3 className='font-bold text-gray-500'>REACT.JS</h3>
                    <h3 className='font-bold my-2 text-gray-500'>NEXT.JS</h3>
                </div>
                <div>
                    <h2 className="font-black text-xl mb-6 text-[#9E31F1]">Backend</h2>
                    <h3 className='font-bold my-2 text-gray-500'>NODE.JS</h3>
                    <h3 className='font-bold text-gray-500'>EXPRESS.JS</h3>
                    <h3 className='font-bold my-2 text-gray-500'>REST APIs</h3>
                </div>
                <div>
                    <h2 className="font-black text-xl mb-6 text-[#9E31F1]">Databases</h2>
                    <h3 className='font-bold my-2 text-gray-500'>MONGODB</h3>
                    <h3 className='font-bold text-gray-500'>MYSQL</h3>
                </div>
                <div>
                    <h2 className="font-black text-xl mb-6 text-[#9E31F1]">Machine Learning</h2>
                    <h3 className='font-bold my-2 text-gray-500'>PYTORCH</h3>
                    <h3 className='font-bold text-gray-500'>SCIKIT</h3>
                    <h3 className='font-bold my-2 text-gray-500'>PANDAS</h3>
                    <h3 className='font-bold text-gray-500'>NUMPY</h3>
                </div>    
                <div>
                    <h2 className="font-black text-xl mb-6 text-[#9E31F1]">Tools</h2>
                    <h3 className='font-bold my-2 text-gray-500'>GIT</h3>
                    <h3 className='font-bold text-gray-500'>GITHUB</h3>
                    <h3 className='font-bold my-2 text-gray-500'>FIREBASE</h3>
                </div>
            </div>
        </div>
    );
};

export default Skills;