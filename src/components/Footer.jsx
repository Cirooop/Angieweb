import './Footer.css';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="caja-footer">
      <div className="footer">
        <div className="info-box">
          <div className="info">
            <p className="aboutus">About Us</p>
            <div className="divider"></div>
            <p className="contact">Contact</p>
          </div>
        </div>
        <div className="social">
          <a href="#"  className="social-icon">
            <FaInstagram />
          </a>
          <a href="#"  className="social-icon">
            <FaTwitter />
          </a>
          <a href="#"  className="social-icon">
            <FaYoutube />
          </a>
        </div>
      </div>
      <div className="rights">
        <p>© 2024 Your Company. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
