import React from 'react';
import { HiHeart, HiShieldCheck, HiCpuChip, HiPhone, HiEnvelope, HiMapPin, HiChatBubbleLeftEllipsis } from 'react-icons/hi2';
import { BsFlag } from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>XimiChat</h3>
              <span>AI Solutions</span>
            </div>
            <p className="footer-description">
              Giải pháp AI thông minh cho chăm sóc khách hàng tự động 24/7. 
              Giúp doanh nghiệp Việt Nam tự động hóa quy trình CSKH và tăng hiệu quả kinh doanh.
            </p>
            <div className="footer-stats">
              <div className="stat">
                <span>500+</span>
                <small>Khách hàng</small>
              </div>
              <div className="stat">
                <span>99%</span>
                <small>Hài lòng</small>
              </div>
              <div className="stat">
                <span>24/7</span>
                <small>Hỗ trợ</small>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Dịch vụ</h4>
            <ul className="footer-links">
              <li><button className="footer-link" onClick={() => scrollToSection('solutions')}>AI Chatbot đa nền tảng</button></li>
              <li><button className="footer-link" onClick={() => scrollToSection('solutions')}>Auto Reply YouTube</button></li>
              <li><button className="footer-link" onClick={() => scrollToSection('solutions')}>Tích hợp Zalo OA</button></li>
              <li><button className="footer-link" onClick={() => scrollToSection('solutions')}>Facebook Messenger</button></li>
              <li><button className="footer-link" onClick={() => scrollToSection('solutions')}>Telegram Bot</button></li>
              <li><button className="footer-link" onClick={() => scrollToSection('pricing')}>Tư vấn giải pháp</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Công ty</h4>
            <ul className="footer-links">
              <li><button className="footer-link" onClick={() => scrollToSection('about')}>Về chúng tôi</button></li>
              <li><button className="footer-link disabled">Tuyển dụng</button></li>
              <li><button className="footer-link disabled">Tin tức</button></li>
              <li><button className="footer-link disabled">Blog AI</button></li>
              <li><button className="footer-link disabled">Chính sách bảo mật</button></li>
              <li><button className="footer-link disabled">Điều khoản sử dụng</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Liên hệ</h4>
            <ul className="footer-links">
              <li>
                <a href="tel:0888889805" className="footer-link">
                  <HiPhone size={16} /> 0888 889 805
                </a>
              </li>
              <li>
                <a href="mailto:trdo1309@gmail.com" className="footer-link">
                  <HiEnvelope size={16} /> trdo1309@gmail.com
                </a>
              </li>
              <li>
                <button className="footer-link">
                  <HiMapPin size={16} /> Toà BE1 Vinhome Grand Park
                </button>
              </li>
              <li>
                <button className="footer-link">
                  <HiMapPin size={16} /> TP. Thủ Đức, HCM
                </button>
              </li>
              <li>
                <a href="https://zalo.me/0888889805" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <HiChatBubbleLeftEllipsis size={16} /> Chat Zalo
                </a>
              </li>
            </ul>
          </div>
        </div>



        <div className="footer-copyright">
          <div className="copyright-text">
            <p>&copy; {currentYear} XimiChat. Bản quyền thuộc về XimiChat AI Solutions.</p>
            <p>
              Thiết kế và phát triển bởi đội ngũ XimiChat với{' '}
              <HiHeart size={16} className="heart-icon" />
              {' '}tại Việt Nam
            </p>
          </div>
          <div className="footer-badges">
            <span className="badge">
              <BsFlag size={16} />
              Made in Vietnam
            </span>
            <span className="badge">
              <HiCpuChip size={16} />
              AI Powered
            </span>
            <span className="badge">
              <HiShieldCheck size={16} />
              Secure & Safe
            </span>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;