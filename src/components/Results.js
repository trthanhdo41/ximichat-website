import React, { useState, useEffect } from 'react';
import { HiArrowTrendingUp, HiBolt, HiCurrencyDollar, HiFaceSmile } from 'react-icons/hi2';
import Counter from './Counter';
import './Results.css';

const Results = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: 'Anh Minh Hoàng',
      position: 'CEO, Fashion Store ABC',
      avatar: '👨‍💼',
      content: 'XimiChat đã giúp shop thời trang của tôi tăng 200% doanh thu. AI trả lời khách hàng cực nhanh và chính xác, không bao giờ bỏ lỡ đơn hàng nào!',
      results: {
        sales: '+200%',
        response: '< 3s',
        satisfaction: '98%'
      },
      industry: 'Thời trang'
    },
    {
      name: 'Chị Lan Phương',
      position: 'Marketing Manager, BeautyWorld',
      avatar: '👩‍💼',
      content: 'Từ khi dùng XimiChat, team CSKH của tôi giảm từ 5 người xuống 2 người nhưng hiệu quả lại tăng gấp đôi. Tiết kiệm được 15 triệu/tháng chi phí nhân sự.',
      results: {
        cost: '-60%',
        efficiency: '+100%',
        team: '3 người'
      },
      industry: 'Mỹ phẩm'
    },
    {
      name: 'Anh Thanh Tùng',
      position: 'Founder, TechGadget',
      avatar: '👨‍💻',
      content: 'AI của XimiChat hiểu rõ sản phẩm công nghệ, tư vấn khách hàng chuyên nghiệp như nhân viên kinh nghiệm. Tỷ lệ chuyển đổi tăng 150%!',
      results: {
        conversion: '+150%',
        orders: '+300%',
        revenue: '+250%'
      },
      industry: 'Công nghệ'
    },
    {
      name: 'Chị Mai Linh',
      position: 'Giám đốc, Nhà hàng Sài Gòn',
      avatar: '👩‍🍳',
      content: 'XimiChat giúp nhà hàng của tôi nhận đặt bàn 24/7, tự động xử lý menu và phục vụ khách hàng tiếng Anh. Doanh thu cuối tuần tăng 180%!',
      results: {
        bookings: '+400%',
        weekend: '+180%',
        rating: '4.9★'
      },
      industry: 'Nhà hàng'
    },
    {
      name: 'Anh Đức Minh',
      position: 'CEO, EduSmart Academy',
      avatar: '👨‍🎓',
      content: 'Với XimiChat, học viên được tư vấn khóa học phù hợp ngay lập tức. Tỷ lệ đăng ký khóa học online tăng 320%, tiết kiệm 80% thời gian tư vấn.',
      results: {
        enrollment: '+320%',
        consultation: '-80%',
        retention: '95%'
      },
      industry: 'Giáo dục'
    }
  ];

  // Auto-scroll testimonials every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial(prev => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length, isPaused]);

  const handleDotClick = (index) => {
    setActiveTestimonial(index);
    setIsPaused(true);
    // Resume auto-scroll after 10 seconds
    setTimeout(() => setIsPaused(false), 10000);
  };

  // Function to render metric value with Counter
  const renderMetricValue = (value, key, testimonialIndex) => {
    // Handle different value formats
    if (value.includes('+') && value.includes('%')) {
      // +200%, +150%, etc.
      const num = parseInt(value.replace(/[+%]/g, ''));
      return <Counter key={`${testimonialIndex}-${key}-${value}`} end={num} suffix="%" prefix="+" duration={2000} />;
    } else if (value.includes('-') && value.includes('%')) {
      // -60%, -80%, etc.
      const num = parseInt(value.replace(/[-%]/g, ''));
      return <Counter key={`${testimonialIndex}-${key}-${value}`} end={num} suffix="%" prefix="-" duration={2000} />;
    } else if (value.includes('%') && !value.includes('+') && !value.includes('-')) {
      // 98%, 95%, etc.
      const num = parseFloat(value.replace('%', ''));
      return <Counter key={`${testimonialIndex}-${key}-${value}`} end={num} suffix="%" duration={2000} decimals={num % 1 !== 0 ? 1 : 0} />;
    } else if (value.includes('★')) {
      // 4.9★
      const num = parseFloat(value.replace('★', ''));
      return <Counter key={`${testimonialIndex}-${key}-${value}`} end={num} suffix="★" duration={1800} decimals={1} />;
    } else if (value.includes('< ')) {
      // < 3s
      const num = parseInt(value.replace(/[< s]/g, ''));
      return (
        <>
          &lt; <Counter key={`${testimonialIndex}-${key}-${value}`} end={num} suffix="s" duration={1500} />
        </>
      );
    } else if (value.includes(' người')) {
      // 3 người
      const num = parseInt(value.replace(' người', ''));
      return <Counter key={`${testimonialIndex}-${key}-${value}`} end={num} suffix=" người" duration={1500} />;
    } else {
      // Fallback to original value
      return value;
    }
  };

  const stats = [
    {
      icon: HiArrowTrendingUp,
      value: '250%',
      numberValue: 250,
      suffix: '%',
      label: 'Tăng trung bình doanh thu',
      color: '#4caf50'
    },
    {
      icon: HiBolt,
      value: '2.5s',
      numberValue: 2.5,
      decimals: 1,
      suffix: 's',
      label: 'Thời gian phản hồi trung bình',
      color: '#2196f3'
    },
    {
      icon: HiCurrencyDollar,
      value: '70%',
      numberValue: 70,
      suffix: '%',
      label: 'Tiết kiệm chi phí CSKH',
      color: '#ff9800'
    },
    {
      icon: HiFaceSmile,
      value: '97%',
      numberValue: 97,
      suffix: '%',
      label: 'Khách hàng hài lòng',
      color: '#e91e63'
    }
  ];

  return (
    <section className="results section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            Kết quả thực tế từ khách hàng của chúng tôi
          </h2>
          <p className="section-subtitle">
            Những con số ấn tượng và câu chuyện thành công thực tế từ các doanh nghiệp đã tin tưởng XimiChat
          </p>
        </div>

        <div className="results-stats" data-aos="fade-up" data-aos-delay="200">
          <div className="stats-grid">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index} 
                  className="stat-card" 
                  data-aos="zoom-in" 
                  data-aos-delay={300 + index * 100}
                  style={{'--stat-color': stat.color}}
                >
                  <div className="stat-icon">
                    <IconComponent size={48} />
                  </div>
                  <div className="stat-value">
                    <Counter 
                      end={stat.numberValue} 
                      duration={2500} 
                      suffix={stat.suffix || ''} 
                      decimals={stat.decimals || 0}
                    />
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="testimonials-section" data-aos="fade-up" data-aos-delay="600">
          <h3>Feedback từ khách hàng</h3>
          
          <div 
            className="testimonial-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="testimonial-nav">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`nav-dot ${index === activeTestimonial ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>

            <div className="testimonial-content">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`testimonial-item ${index === activeTestimonial ? 'active' : ''}`}
                >
                  <div className="testimonial-card">
                    <div className="testimonial-header">
                      <div className="customer-info">
                        <div className="customer-avatar">{testimonial.avatar}</div>
                        <div className="customer-details">
                          <h4>{testimonial.name}</h4>
                          <p>{testimonial.position}</p>
                          <span className="industry-tag">{testimonial.industry}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="testimonial-body">
                      <blockquote>"{testimonial.content}"</blockquote>
                      
                      <div className="results-metrics">
                        {Object.entries(testimonial.results).map(([key, value]) => (
                          <div key={key} className="metric">
                            <span className="metric-value">
                              {index === activeTestimonial ? renderMetricValue(value, key, `${index}-${activeTestimonial}`) : value}
                            </span>
                            <span className="metric-label">
                              {key === 'sales' && 'Doanh thu'}
                              {key === 'response' && 'Phản hồi'}
                              {key === 'satisfaction' && 'Hài lòng'}
                              {key === 'cost' && 'Chi phí'}
                              {key === 'efficiency' && 'Hiệu quả'}
                              {key === 'team' && 'Nhân sự'}
                              {key === 'conversion' && 'Chuyển đổi'}
                              {key === 'orders' && 'Đơn hàng'}
                              {key === 'revenue' && 'Doanh thu'}
                              {key === 'bookings' && 'Đặt bàn'}
                              {key === 'weekend' && 'Cuối tuần'}
                              {key === 'rating' && 'Đánh giá'}
                              {key === 'enrollment' && 'Đăng ký'}
                              {key === 'consultation' && 'Tư vấn'}
                              {key === 'retention' && 'Giữ chân'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="success-cta" data-aos="fade-up" data-aos-delay="800">
          <h3>Bạn cũng muốn có kết quả tương tự?</h3>
          <p>Hãy để XimiChat giúp doanh nghiệp của bạn đạt được những con số ấn tượng như vậy</p>
          <a href="tel:0888889805" className="btn btn-primary">
            Bắt đầu thành công của bạn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Results;