import React, { useEffect, useState } from 'react';
import SharedTitle from './SharedTitle';
import { IoMdMail } from 'react-icons/io';
import { FaLinkedin, FaWhatsapp, FaFacebookSquare } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import { IoSend } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = 'service_5bxum5a'; // Replace with your EmailJS service ID
    const templateID = 'template_vqeu9gf'; // Replace with your EmailJS template ID
    const userID = 'bKYWEqn9s0TFokUYr'; // Replace with your EmailJS user ID

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          console.log('Email sent successfully!', response);
          toast.success('Sending Massage successfully!', { position: "top-center" });
          setFormData({ name: '', email: '', message: '' }); // Reset form fields
        },
        (error) => {
          console.error('Failed to send email:', error);
          toast.error('Error-Massage Not Send!', { position: "top-center" });
        }
      );
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="my-10">
      <SharedTitle title="Contact Me" />
      <div
        data-aos="fade-up"
        className="lg:px-36 md:px-20 px-4 grid lg:grid-cols-2 grid-cols-1 gap-5 p-6 bg-slate-100"
      >
        {/* Contact Form */}
        <div className="p-6 bg-slate-200 rounded">
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered border-[#9E31F1] w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered border-[#9E31F1] w-full my-6"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="textarea border-[#9E31F1] w-full h-32"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-white text-[#9E31F1] font-bold border-2 border-white rounded-full hover:bg-gradient-to-r hover:from-[#9E31F1] hover:to-[#C82CD9] hover:text-white flex items-center my-4"
            >
              SEND MESSAGE
              <span className="p-2 ml-2 rounded-full bg-purple-500 text-white">
                <IoSend />
              </span>
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="p-6 bg-slate-200 rounded">
          {/* Email */}
          <div className="flex items-center mb-4">
            <div className="p-3 border rounded-full bg-[#9E31F1]">
              <p className="text-xl text-white">
                <a href="mailto:mrgalib40@gmail.com">
                  <IoMdMail />
                </a>
              </p>
            </div>
            <div className="font-bold lg:text-xl md:text-xl text-md ml-4 italic text-[#9E31F1]">
              <a href="mailto:mrgalib40@gmail.com">mrgalib40@gmail.com</a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center mb-4">
            <div className="p-3 border rounded-full bg-[#9E31F1]">
              <p className="text-2xl text-white">
                <FaWhatsapp />
              </p>
            </div>
            <div className="font-bold lg:text-xl md:text-xl text-md ml-4 italic text-[#9E31F1]">+8801746-094739</div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center mb-4">
            <div className="p-3 border rounded-full bg-[#9E31F1]">
              <p className="text-2xl text-white">
                <a href="https://www.linkedin.com/in/galibcse19/" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
              </p>
            </div>
            <div className="font-bold lg:text-xl md:text-xl text-md ml-4 italic text-[#9E31F1]">
              <a href="https://www.linkedin.com/in/galibcse19/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Facebook */}
          <div className="flex items-center mb-4">
            <div className="p-3 border rounded-full bg-[#9E31F1]">
              <p className="text-2xl text-white">
                <a href="https://shorturl.at/ZDXju" target="_blank" rel="noreferrer">
                  <FaFacebookSquare />
                </a>
              </p>
            </div>
            <div className="font-bold lg:text-xl md:text-xl text-md ml-4 italic text-[#9E31F1]">
              <a href="https://shorturl.at/ZDXju" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center">
            <div className="p-3 border rounded-full bg-[#9E31F1]">
              <p className="text-2xl text-white">
                <a href="https://shorturl.at/ZOEgI" target="_blank" rel="noreferrer">
                  <CiLocationOn />
                </a>
              </p>
            </div>
            <div className="font-bold lg:text-xl md:text-xl text-md ml-4 italic text-[#9E31F1]">Palbari, Jashore, Khulna</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
