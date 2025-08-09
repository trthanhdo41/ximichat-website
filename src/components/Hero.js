import React from 'react';
import { HiPlay, HiSparkles, HiChatBubbleBottomCenterText } from 'react-icons/hi2';
import { RiRobot2Fill } from 'react-icons/ri';
import Counter from './Counter';
import TypeWriter from './TypeWriter';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text" data-aos="fade-right">
            <h1>
              <span className="highlight">XimiChat</span>
              <br />
              Giải pháp AI thông minh
              <br />
              <span className="subtitle">CSKH tự động 24/7</span>
            </h1>
            <p>
              <TypeWriter 
                text="Tự động hóa chăm sóc khách hàng trên Zalo, Facebook, Telegram, Web và YouTube. Tiết kiệm thời gian, tăng hiệu quả kinh doanh với công nghệ AI tiên tiến."
                speed={35}
                delay={1200}
                className="hero-description"
              />
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary pulse" onClick={scrollToContact}>
                Dùng thử miễn phí 7 ngày
              </button>
              <button className="btn btn-secondary">
                Xem demo
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">
                  <Counter end={500} duration={2500} suffix="+" />
                </span>
                <span className="stat-label">Doanh nghiệp tin tùng</span>
              </div>
              <div className="stat">
                <span className="stat-number">
                  <Counter end={24} duration={2000} suffix="/7" />
                </span>
                <span className="stat-label">Hỗ trợ không ngừng</span>
              </div>
              <div className="stat">
                <span className="stat-number">
                  <Counter end={99} duration={2200} suffix="%" />
                </span>
                <span className="stat-label">Độ chính xác</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual" data-aos="fade-left">
            <div className="video-placeholder">
              <div className="play-button">
                <HiPlay size={60} className="play-icon" />
              </div>
              <p>Video giới thiệu XimiChat</p>
            </div>
            
            <div className="floating-elements">
              <div className="chat-bubble bubble-1">
                <HiChatBubbleBottomCenterText className="bubble-icon" />
                <span>Chào bạn!</span>
              </div>
              <div className="chat-bubble bubble-2">
                <RiRobot2Fill className="bubble-icon" />
                <span>AI xử lý...</span>
              </div>
              <div className="chat-bubble bubble-3">
                <HiSparkles className="bubble-icon" />
                <span>Tự động!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;