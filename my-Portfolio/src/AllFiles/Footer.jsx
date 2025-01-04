import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-slate-200 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Abdulla Al GaLib.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;