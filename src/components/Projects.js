import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

// Custom hook for counting animation
const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * (end - start) + start));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, start, isVisible]);

  return [count, countRef];
};

// CountingNumber component
const CountingNumber = ({ value, suffix = '', prefix = '' }) => {
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const [count, ref] = useCountUp(numericValue, 2000);
  
  return (
    <span ref={ref} className="stat-number">
      {prefix}{count}{suffix}
    </span>
  );
};

const Projects = () => {
  const statsData = [
    { value: '50', suffix: '+', label: 'Dự án hoàn thành' },
    { value: '15', suffix: '+', label: 'Ngành nghề khác nhau' },
    { value: '100', suffix: '%', label: 'Khách hàng hài lòng' },
    { value: '24', suffix: '/7', label: 'Hỗ trợ sau triển khai' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Hệ thống AI CSKH cho chuỗi cửa hàng thời trang',
      category: 'Thời trang & Retail',
      description: 'Tự động hóa chăm sóc khách hàng trên 15 cửa hàng, xử lý 5000+ tin nhắn/ngày',
      area: 'Hồ Chí Minh',
      results: [
        'Tăng 200% hiệu quả CSKH',
        'Giảm 60% chi phí nhân sự',
        'Tăng 150% tỷ lệ chuyển đổi'
      ],
      technologies: ['Zalo OA', 'Facebook Messenger', 'Website Chat'],
      client: 'Fashion Chain ABC'
    },
    {
      id: 2,
      title: 'AI Chatbot cho ngành mỹ phẩm và làm đẹp',
      category: 'Beauty & Cosmetics',
      description: 'Tư vấn sản phẩm làm đẹp thông minh, phân tích da và gợi ý sản phẩm phù hợp',
      area: 'Hà Nội',
      results: [
        'Xử lý 3000+ tư vấn/ngày',
        'Độ chính xác 95%',
        'Tăng 180% doanh thu online'
      ],
      technologies: ['Instagram DM', 'Zalo', 'TikTok Shop'],
      client: 'BeautyWorld Vietnam'
    },
    {
      id: 3,
      title: 'Hệ thống auto reply YouTube cho KOL',
      category: 'Content & Entertainment',
      description: 'Tự động trả lời bình luận YouTube, tăng tương tác và quản lý cộng đồng',
      area: 'Đà Nẵng',
      results: [
        'Xử lý 10000+ comment/ngày',
        'Tăng 300% tương tác',
        'Tiết kiệm 8h/ngày cho creator'
      ],
      technologies: ['YouTube API', 'Auto Comment', 'Sentiment Analysis'],
      client: 'TechReview Channel'
    },
    {
      id: 4,
      title: 'AI CSKH đa nền tảng cho ngành F&B',
      category: 'Food & Beverage',
      description: 'Tích hợp đặt món, tư vấn menu và xử lý khiếu nại thông minh',
      area: 'Cần Thơ',
      results: [
        'Tăng 250% đơn đặt online',
        'Giảm 40% thời gian xử lý',
        'Tăng 90% satisfaction score'
      ],
      technologies: ['Zalo', 'Facebook', 'Telegram', 'App Integration'],
      client: 'Fast Food Chain XYZ'
    }
  ];

  return (
    <section className="projects section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            Các dự án chúng tôi đã thực hiện
          </h2>
          <p className="section-subtitle">
            Những câu chuyện thành công thực tế với các doanh nghiệp đa ngành nghề
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card" 
              data-aos="fade-up" 
              data-aos-delay={200 + index * 150}
            >
              <div className="project-header">
                <div className="project-image">
                  <div className="image-placeholder">
                    <span className="area-label">Khu vực</span>
                    <span className="area-name">{project.area}</span>
                  </div>
                  <div className="project-overlay">
                    <span className="view-details">Xem chi tiết</span>
                  </div>
                </div>
                <div className="project-category">{project.category}</div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-client">
                  <span className="client-label">Khách hàng:</span>
                  <span className="client-name">{project.client}</span>
                </div>

                <div className="project-technologies">
                  <span className="tech-label">Công nghệ:</span>
                  <div className="tech-tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-results">
                  <span className="results-label">Kết quả đạt được:</span>
                  <ul className="results-list">
                    {project.results.map((result, idx) => (
                      <li key={idx}>
                        <span className="check-icon">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-stats" data-aos="fade-up" data-aos-delay="800">
          <div className="stats-container">
            {statsData.map((stat, index) => (
              <div key={index} className="stat-item">
                <CountingNumber 
                  value={stat.value} 
                  suffix={stat.suffix}
                />
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="projects-cta" data-aos="fade-up" data-aos-delay="1000">
          <h3>Dự án tiếp theo sẽ là của bạn?</h3>
          <p>
            Hãy để XimiChat giúp doanh nghiệp của bạn có một câu chuyện thành công tương tự
          </p>
          <a href="tel:0888889805" className="btn btn-primary">
            Bắt đầu dự án của bạn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;