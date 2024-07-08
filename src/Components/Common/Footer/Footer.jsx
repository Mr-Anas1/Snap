import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-about footer-box">
                    <div className="footer-about-logo">SNAP.CO</div>
                    <div className="footer-about-description">We have clothes that suits your style and which you’re proud to wear. From women to men.</div>
                    <div className="footer-about-social-icons">
                        <FaFacebook className='icon' />
                        <BsInstagram className='icon' />
                        <FaGithub className='icon' />
                        <FaSquareXTwitter className='icon' />
                    </div>
                </div>

                <div className="footer-section-company footer-box">
                    <div className="footer-link-heading">COMPANY</div>
                    <div className="footer-link">About</div>
                    <div className="footer-link">Features</div>
                    <div className="footer-link">Work</div>
                    <div className="footer-link">Careers</div>
                </div>

                <div className="footer-section-help footer-box">
                    <div className="footer-link-heading">HELP</div>
                    <div className="footer-link">Customer support</div>
                    <div className="footer-link">Delivery details</div>
                    <div className="footer-link">Terms and Conditions</div>
                    <div className="footer-link">Privacy policy</div>
                </div>

                <div className="footer-section-faq footer-box">
                    <div className="footer-link-heading">FAQ</div>
                    <div className="footer-link">Account</div>
                    <div className="footer-link">Manage Delivery</div>
                    <div className="footer-link">Orders</div>
                    <div className="footer-link">Payments</div>
                </div>

                <div className="footer-section-Resource footer-box">
                    <div className="footer-link-heading">RESOURCES</div>
                    <div className="footer-link">Free E-books</div>
                    <div className="footer-link">Development tutorial</div>
                    <div className="footer-link">How to blog</div>
                    <div className="footer-link">Youtube playlist</div>
                </div>
            </div>

            <div className="footer-line"></div>

            <div className="footer-copyright">Snap.co © 2024</div>

            <div className="footer-newsletter">
                <div className="footer-newsletter-content">
                    <div className="footer-newsletter-title">
                        STAY UPTO DATE ABOUT OUR LATEST OFFER
                    </div>

                    <div className="footer-newsletter-input">
                        <input type="email" className='footer-newsletter-input-email' placeholder= 'Enter your email address'/>
                        <button className='footer-newsletter-button'>Subscribe to newsletter</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer