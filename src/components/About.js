import React from 'react';
import { HiLightBulb, HiHandThumbUp, HiRocketLaunch, HiMagnifyingGlass, HiCheckCircle, HiUserGroup } from 'react-icons/hi2';
import { HiOfficeBuilding, HiClock, HiChatAlt2, HiSparkles } from 'react-icons/hi';
import Counter from './Counter';
import './About.css';

const About = () => {
  const teamValues = [
    {
      icon: HiMagnifyingGlass,
      title: 'Chuyên Nghiệp',
      description: 'Đội ngũ kỹ sư AI giàu kinh nghiệm, am hiểu sâu về công nghệ và thị trường Việt Nam'
    },
    {
      icon: HiLightBulb,
      title: 'Sáng Tạo',
      description: 'Luôn cập nhật công nghệ mới nhất, tạo ra những giải pháp AI độc đáo và hiệu quả'
    },
    {
      icon: HiHandThumbUp,
      title: 'Tận Tâm',
      description: 'Cam kết hỗ trợ khách hàng 24/7, đồng hành cùng doanh nghiệp phát triển bền vững'
    },
    {
      icon: HiRocketLaunch,
      title: 'Tiên Phong',
      description: 'Dẫn đầu xu hướng AI tự động hóa, mang lại giá trị thực tế cho doanh nghiệp Việt'
    }
  ];

  const achievements = [
    {
      number: '500+',
      label: 'Doanh nghiệp tin tưởng',
      icon: HiOfficeBuilding
    },
    {
      number: '3+',
      label: 'Năm kinh nghiệm AI',
      icon: HiClock
    },
    {
      number: '50M+',
      label: 'Tin nhắn đã xử lý',
      icon: HiChatAlt2
    },
    {
      number: '99.8%',
      label: 'Độ chính xác AI',
      icon: HiSparkles
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <h2 className="section-title">Chúng tôi là...</h2>
            <p className="about-intro">
              <strong>XimiChat</strong> - Đội ngũ chuyên gia AI hàng đầu Việt Nam, 
              chuyên phát triển các giải pháp tự động hóa chăm sóc khách hàng bằng trí tuệ nhân tạo.
            </p>
            
            <div className="about-description">
              <h3>Sứ mệnh của chúng tôi</h3>
              <p>
                Giúp các doanh nghiệp Việt Nam tiếp cận và ứng dụng công nghệ AI một cách 
                dễ dàng, hiệu quả và tiết kiệm chi phí. Chúng tôi tin rằng AI không chỉ 
                dành cho các tập đoàn lớn, mà còn có thể giúp các doanh nghiệp vừa và nhỏ 
                cạnh tranh mạnh mẽ trên thị trường.
              </p>
              
              <h3>Tại sao chọn XimiChat?</h3>
              <ul className="why-choose-us">
                <li>
                  <HiCheckCircle size={20} />
                  Hiểu rõ thị trường và văn hóa Việt Nam
                </li>
                <li>
                  <HiCheckCircle size={20} />
                  Công nghệ AI tiên tiến, được tối ưu cho tiếng Việt
                </li>
                <li>
                  <HiCheckCircle size={20} />
                  Đội ngũ hỗ trợ chuyên nghiệp 24/7
                </li>
                <li>
                  <HiCheckCircle size={20} />
                  Giá cả hợp lý, phù hợp với doanh nghiệp Việt
                </li>
                <li>
                  <HiCheckCircle size={20} />
                  Cam kết chất lượng và hiệu quả
                </li>
              </ul>
            </div>
          </div>

          <div className="about-visual" data-aos="fade-left">
            <div className="team-image">
              <div className="team-placeholder">
                <HiUserGroup size={60} />
                <p>Đội ngũ chuyên gia AI XimiChat</p>
              </div>
            </div>
            
            <div className="achievements-grid">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="achievement-item" data-aos="zoom-in" data-aos-delay={300 + index * 100}>
                    <span className="achievement-icon">
                      <IconComponent size={24} />
                    </span>
                    <span className="achievement-number">
                      {achievement.number === '500+' ? (
                        <Counter end={500} suffix="+" duration={2500} />
                      ) : achievement.number === '3+' ? (
                        <Counter end={3} suffix="+" duration={1500} />
                      ) : achievement.number === '50M+' ? (
                        <Counter end={50} suffix="M+" duration={2200} />
                      ) : achievement.number === '99.8%' ? (
                        <Counter end={99.8} decimals={1} suffix="%" duration={2800} />
                      ) : achievement.number.includes('%') ? (
                        <Counter end={parseInt(achievement.number)} suffix="%" duration={2000} />
                      ) : achievement.number.includes('+') ? (
                        <Counter end={parseInt(achievement.number)} suffix="+" duration={2200} />
                      ) : (
                        achievement.number
                      )}
                    </span>
                    <span className="achievement-label">{achievement.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="team-values" data-aos="fade-up" data-aos-delay="600">
          <h3>Giá trị cốt lõi</h3>
          <div className="values-grid">
            {teamValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="value-card" data-aos="flip-up" data-aos-delay={700 + index * 150}>
                  <div className="value-icon">
                    <IconComponent size={40} />
                  </div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="about-cta" data-aos="fade-up" data-aos-delay="1000">
          <h3>Cùng XimiChat tạo nên sự khác biệt</h3>
          <p>
            Hãy để chúng tôi đồng hành cùng bạn trong hành trình chuyển đổi số, 
            tự động hóa quy trình CSKH và gia tăng hiệu quả kinh doanh.
          </p>
          <div className="cta-buttons">
            <a href="tel:0888889805" className="btn btn-primary">
              Tư vấn miễn phí
            </a>
            <a href="#contact" className="btn btn-secondary">
              Liên hệ ngay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;