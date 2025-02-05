import React, { useEffect } from 'react';
import SharedTitle from './SharedTitle';

import project1 from "../assets/service.png"
import project2 from "../assets/MoviePortal1.png"
import project3 from "../assets/gagethaven.png"
import project4 from "../assets/eco.png"
import pet1 from '../assets/pet2.png'
import pet2 from '../assets/pet1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
 

const Projects = () => {
     useEffect(() => {
                    AOS.init({
                      duration: 1000, 
                      once: true, 
                    });
                  }, []);
    return (
        <div className='my-10'>
            <SharedTitle title={"My Projects"}></SharedTitle>
             <div className='lg:mx-36 md:mx-20 mx-4'>
                <div data-aos="fade-up" className='grid lg:grid-cols-2 grid-cols-1 p-6 gap-5 bg-slate-200 rounded mb-4'>
                    <div>
                    <img className='mb-4' src={pet1} alt="" />
                    <img src={pet2} alt="" />
                    </div>
                    <div>
                    <h3 className='text-[#9E31F1] font-bold text-2xl'>Pet Adoption System</h3>
                    <h2 className='text-[#9E31F1] font-bold text-xl my-2'>Features:</h2>
                    <ul className='list-disc my-4 ml-6'>
                        <li>API Endpoints: Provides well-structured routes for managing campaigns, users, and donations.</li>
                        <li>Role-Based Access Control (RBAC): Differentiates between regular users and admins.</li>
                        <li>CRUD Functionality: Supports create, read, update, and delete operations for campaigns and users.</li>
                        <li>Authentication Middleware: Verifies user tokens for secure access to protected routes.</li>
                        <li>Campaign Management: Handles pause/unpause and editing of donation campaigns.</li>
                        <li>Admin Management: Allows role assignment with the "Make Admin" functionality.</li>
                        <li>Database Optimization: Efficiently handles queries and indexing with MongoDB.</li>
                        <li>Error Handling: Implements structured error responses for invalid requests.</li>
                        <li>CORS Integration: Ensures smooth communication between the client and server across origins.</li>
                        <li>Environment Configuration: Uses .env for managing sensitive data like API keys and database credentials.</li>
                    </ul>
                    <h2><span className='text-[#9E31F1] font-bold text-xl mt-4'>Tools:</span> React.js, TailwindCSS, Express.js, MongoDB, React Router, Firebase</h2>
                    <div className='flex lg:gap-5 md:gap-5 gap-1 my-4'>
                        <button className="px-4 py-2 bg-white font-bold border-2 border-white rounded hover:bg-gradient-to-r hover:from-[#9E31F1] hover:to-[#C82CD9] text-[#9E31F1] hover:text-white flex items-center">
                            <a href="https://pet-adoption-ba487.web.app/" className="flex items-center" target="_blank" >Live Site</a>
                        </button>
                        <button className="px-4 py-2 bg-white font-bold border-2 border-white rounded hover:bg-gradient-to-r hover:from-[#9E31F1] hover:to-[#C82CD9] text-[#9E31F1] hover:text-white flex items-center">
                            <a href="https://github.com/galibcse19/Pet-Adoption-Client" className="flex items-center" target="_blank" >Client Repo</a>
                        </button>
                        <button className="px-4 py-2 bg-white font-bold border-2 border-white rounded hover:bg-gradient-to-r hover:from-[#9E31F1] hover:to-[#C82CD9] text-[#9E31F1] hover:text-white flex items-center">
                            <a href="https://github.com/galibcse19/Pet-Adoption-Server" className="flex items-center" target="_blank" >Server Repo</a>
                        </button>
                    </div>
                    </div>
                </div>
                <div data-aos="fade-up" className='grid lg:grid-cols-2 grid-cols-1 p-6 gap-5 bg-slate-200 rounded'>
                    <img src={project1} alt="" />
                    <div>
                    <h3 className='text-[#9E31F1] font-bold text-2xl'>Service Review System</h3>
                    <h2 className='text-[#9E31F1] font-bold text-xl my-2'>Features:</h2>
                    <ul className='list-disc my-4 ml-6'>
                        <li>CRUD Operations: Users can add, update, and delete services.</li>
                        <li>Real-time Data Fetching: Data is fetched and updated automatically using TanStack Query (React Query).</li>
                        <li>Authentication: Implemented session-based authentication to protect certain operations (e.g., adding, updating, deleting services).</li>
                        <li>Error Handling: Display appropriate messages when data is loading or if an error occurs during fetching.</li>
                        <li>Authentication: Session-based authentication with JWT tokens </li>
                        <li>REST API: Provides a RESTful API for the frontend to interact with.</li>
                        <li>Log out functionality ensures user sessions can be securely terminated.</li>
                    </ul>
                    <h2><span className='text-[#9E31F1] font-bold text-xl mt-4'>Tools:</span> React.js, TailwindCSS, Express.js, MongoDB, React Router, Firebase</h2>
                    <div className='flex lg:gap-5 md:gap-5 gap-1 my-4'>
                        <button className="px-4 py-2 bg-white font-bold border-2 border-white rounded hover:bg-gradient-to-r hover:from-[#9E31F1] hover:to-[#C82CD9] text-[#9E31F1] hover:text-white flex items-center">
                            <a href="https://service-review-6a808.web.app/" className="flex items-center" target="_blank" >Live Site</a>
                        </button>
                        <button className="px-4 py-2 bg-white font-bold border-2 border-white rounded hover:bg-gradient-to-r hover:from-[#9E31F1] hover:to-[#C82CD9] text-[#9E31F1] hover:text-white flex items-center">
                            <a href="https://github.com/galibcse19/Service-Review-System-Client?tab=readme-ov-file" className="flex items-center" target="_blank" >Client Repo</a>
                        </button>
                        <button className="px-4 py-2 bg-white font-bold border-2 border-white rounded hover:bg-gradient-to-r hover:from-[#9E31F1] hover:to-[#C82CD9] text-[#9E31F1] hover:text-white flex items-center">
                            <a href="https://github.com/galibcse19/Service-Review-System-server" className="flex items-center" target="_blank" >Server Repo</a>
                        </button>
                    </div>
                    </div>
                </div>
                
                <div data-aos="fade-up" className='grid lg:grid-cols-2 grid-cols-1 p-6 gap-5 my-4 bg-slate-200 rounded'>
                    <img src={project2} alt="" />
                    <div>
                    <h3 className='text-[#9E31F1] font-bold text-2xl'>Movie Portal</h3>
                    <h2 className='text-[#9E31F1] font-bold text-xl my-2'>Features:</h2>
                    <ul className='list-disc my-4 ml-6'>
                        <li>CRUD Operations: Users can add, update, and delete services.</li>
                        <li>Allows users to switch between dark and light modes.</li>
                        <li>Advanced search with real-time suggestions.</li>
                        <li>Fully optimized for mobile, tablet, and desktop devices.</li>
                        <li>Communicates with a secure backend for data fetching and submission.</li>
                        <li>REST API: Provides a RESTful API for the frontend to interact with.</li>
                        <li>Log out functionality ensures user sessions can be securely terminated.</li>
                    </ul>
                    <h2><span className='text-[#9E31F1] font-bold text-xl mt-4'>Tools:</span> React.js, TailwindCSS, Express.js, MongoDB, React Router, Firebase</h2>
                    <div className='flex lg:gap-5 md:gap-5 gap-1 my-4'>
                        <button className="px-4 py-2 bg-white font-bold border-2 border-white rounded hover:bg-gradient-to-r hover:from-[#9E31F1] hover:to-[#C82CD9] text-[#9E31F1] hover:text-white flex items-center">
                            <a href="https://movie-portal-785fd.web.app/" className="flex items-center" target="_blank" >Live Site</a>
                        </button>
                        <button className="px-4 py-2 bg-white font-bold border-2 border-white rounded hover:bg-gradient-to-r hover:from-[#9E31F1] hover:to-[#C82CD9] text-[#9E31F1] hover:text-white flex items-center">
                            <a href="https://github.com/galibcse19/Movie-Portal-Client?tab=readme-ov-file" className="flex items-center" target="_blank" >Client Repo</a>
                        </button>
                        <button className="px-4 py-2 bg-white font-bold border-2 border-white rounded hover:bg-gradient-to-r hover:from-[#9E31F1] hover:to-[#C82CD9] text-[#9E31F1] hover:text-white flex items-center">
                            <a href="https://github.com/galibcse19/movie-portal-server" className="flex items-center" target="_blank" >Server Repo</a>
                        </button>
                    </div>
                    </div>
                </div>
                
                <div data-aos="fade-up" className='grid lg:grid-cols-2 grid-cols-1 p-6 gap-5 my-4 bg-slate-200 rounded'>
                    <img src={project3} alt="" />
                    <div>
                    <h3 className='text-[#9E31F1] font-bold text-2xl'>Gadget Heaven</h3>
                    <h2 className='text-[#9E31F1] font-bold text-xl my-2'>Features:</h2>
                    <ul className='list-disc my-4 ml-6'>
                        <li>React Components: React components are reusable, self-contained pieces of UI. You’re creating components (e.g., ProductItem, Cart, Wishlist) to build a modular interface.</li>
                        <li>Context API (createContext and useContext): The Context API is used to share data globally across components without prop drilling. By creating contexts like CartContext, you can make wishlist, cartItems, and totalPrice available to all components that need them, improving accessibility and code readability.</li>
                        <li>Toasts for Notifications: You’re using react-toastify to show toast notifications, which provide feedback to the user. This adds to the user experience by confirming actions, like successfully adding an item to the wishlist.</li>
                        <li>Conditional Styling: You’re conditionally setting class names based on states, such as changing button colors when an item is in the wishlist or cart. This enhances user experience by providing visual feedback based on interactions.</li>
                    </ul>
                    <h2><span className='text-[#9E31F1] font-bold text-xl mt-4'>Tools:</span> React.js, TailwindCSS, React Router, Firebase, DaisyUI</h2>
                    <div className='flex gap-5 my-4'>
                        <button className="px-4 py-2 bg-white font-bold border-2 border-white rounded hover:bg-gradient-to-r hover:from-[#9E31F1] hover:to-[#C82CD9] text-[#9E31F1] hover:text-white flex items-center">
                            <a href="https://gedget-heaven.netlify.app/" className="flex items-center" target="_blank" >Live Site</a>
                        </button>
                        <button className="px-4 py-2 bg-white font-bold border-2 border-white rounded hover:bg-gradient-to-r hover:from-[#9E31F1] hover:to-[#C82CD9] text-[#9E31F1] hover:text-white flex items-center">
                            <a href="https://github.com/galibcse19/gedget-heaven?tab=readme-ov-file" className="flex items-center" target="_blank" >Repository</a>
                        </button>
                    </div>
                    </div>
                </div>

                <div data-aos="fade-up" className='grid lg:grid-cols-2 grid-cols-1 p-6 gap-5 my-4 bg-slate-200 rounded'>
                    <img src={project4} alt="" />
                    <div>
                    <h3 className='text-[#9E31F1] font-bold text-2xl'>Eco-Adventure Experiences (Wildlife Safaris )</h3>
                    <h2 className='text-[#9E31F1] font-bold text-xl my-2'>Features:</h2>
                    <ul className='list-disc my-4 ml-6 text-justify'>
                       <li>User registration and login system using Firebase Authentication. Password reset functionality for better user experience. Profile updates, including name and photo, dynamically reflected in the navigation bar.</li>
                       <li>Navbar updates in real-time with user information (profile picture and name) after login or profile update without requiring a page reload.</li>
                       <li>Smooth animations when sections become visible while scrolling, creating a modern and visually appealing design.</li>
                       <li>Fully responsive design with layouts optimized for mobile, tablet, and desktop views. Tailwind CSS ensures a clean and consistent UI across devices.</li>
                       <li>Firebase used for backend services like Authentication and Profile management.</li>
                       <li>Log out functionality ensures user sessions can be securely terminated.</li>
                    </ul>
                    <h2><span className='text-[#9E31F1] font-bold text-xl mt-4'>Tools:</span> React.js, TailwindCSS,MongoDB, Express.js, Node.js, React Router, Firebase, DaisyUI</h2>
                    <div className='flex gap-5 my-4'>
                        <button className="px-4 py-2 bg-white font-bold border-2 border-white rounded hover:bg-gradient-to-r hover:from-[#9E31F1] hover:to-[#C82CD9] text-[#9E31F1] hover:text-white flex items-center">
                            <a href="https://eco-adventure-wildlife-safaris.netlify.app/" className="flex items-center" target="_blank" >Live Site</a>
                        </button>
                        <button className="px-4 py-2 bg-white font-bold border-2 border-white rounded hover:bg-gradient-to-r hover:from-[#9E31F1] hover:to-[#C82CD9] text-[#9E31F1] hover:text-white flex items-center">
                            <a href="https://github.com/galibcse19/Eco-Adventure-Experiences?tab=readme-ov-file" className="flex items-center" target="_blank" >Repository</a>
                        </button>
                         
                    </div>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Projects;