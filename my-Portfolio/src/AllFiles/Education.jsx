import React, { useEffect } from 'react';
import SharedTitle from './SharedTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
    useEffect(() => {
                AOS.init({
                  duration: 1000, 
                  once: true, 
                });
              }, []);
    return (
        <div className='mb-20'>
            <SharedTitle title={"Academic Qualification"}></SharedTitle>
            <div data-aos="fade-up" className='lg:px-36 md:px-20 px-4'>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                    </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic text-[#9E31F1]">2019 - Present</time>
                    <div className="text-lg font-black text-[#9E31F1]">BSc in Computer Science and Engineering</div>
                    Jashore University of Science and Technology
                    <h3>Jashore-7408, Khulna</h3>
                    <h3>CGPA: 3.40 / 4 (Up to 7 semesters)</h3>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                    </svg>
                    </div>
                    <div className="timeline-end md:mb-10">
                    <time className="font-mono italic text-[#9E31F1]">2017-19</time>
                    <div className="text-lg font-black text-[#9E31F1]">Higher Secondary Certificate</div>
                     Bangladesh Noubahini School and College Khulna
                     <h3>Sailor's Colony, Goalkhali, GPO, Khulna</h3>
                     <h3>GPA: 4.92/5.00 (Science)</h3>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                    </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic text-[#9E31F1]">2012-16</time>
                    <div className="text-lg font-black text-[#9E31F1]">Secondary School Certificate</div>
                    keshabpur pilot school and college
                    <h2>Keshabpur, Jashore, Khulna</h2>
                    <h2>GPA: 4.86/5.00 (Science)</h2>
                    </div>
                    <hr />
                </li>
                
            </ul>
            </div>
        </div>
    );
};

export default Education;