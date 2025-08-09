import React, { useState } from 'react';
import { HiShieldCheck } from 'react-icons/hi2';
import Counter from './Counter';
import './Pricing.css';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = {
    monthly: [
      {
        name: 'Starter',
        price: '2,990,000',
        period: '/tháng',
        description: 'Phù hợp cho doanh nghiệp nhỏ',
        features: [
          '1 kênh chat (Zalo hoặc Facebook)',
          'Tối đa 1,000 tin nhắn/tháng',
          'AI trả lời cơ bản',
          'Báo cáo cơ bản',
          'Hỗ trợ email'
        ],
        popular: false,
        color: '#4ecdc4'
      },
      {
        name: 'Professional',
        price: '4,990,000',
        period: '/tháng',
        description: 'Giải pháp toàn diện cho SME',
        features: [
          '3 kênh chat (Zalo, FB, Telegram)',
          'Tối đa 5,000 tin nhắn/tháng',
          'AI nâng cao + YouTube auto reply',
          'Dashboard thống kê chi tiết',
          'Tùy chỉnh chatbot theo ngành',
          'Hỗ trợ 24/7'
        ],
        popular: true,
        color: '#00d4ff'
      },
      {
        name: 'Enterprise',
        price: '9,990,000',
        period: '/tháng',
        description: 'Cho doanh nghiệp lớn',
        features: [
          'Không giới hạn kênh chat',
          'Không giới hạn tin nhắn',
          'AI cao cấp + Tích hợp CRM',
          'Báo cáo chi tiết + API',
          'Tùy chỉnh hoàn toàn',
          'Dedicated support manager',
          'Training riêng cho team'
        ],
        popular: false,
        color: '#f39c12'
      }
    ],
    yearly: [
      {
        name: 'Starter',
        price: '29,900,000',
        period: '/năm',
        originalPrice: '35,880,000',
        description: 'Tiết kiệm 17% so với thanh toán hàng tháng',
        features: [
          '1 kênh chat (Zalo hoặc Facebook)',
          'Tối đa 1,000 tin nhắn/tháng',
          'AI trả lời cơ bản',
          'Báo cáo cơ bản',
          'Hỗ trợ email'
        ],
        popular: false,
        color: '#4ecdc4'
      },
      {
        name: 'Professional',
        price: '49,900,000',
        period: '/năm',
        originalPrice: '59,880,000',
        description: 'Tiết kiệm 17% + tặng 1 tháng',
        features: [
          '3 kênh chat (Zalo, FB, Telegram)',
          'Tối đa 5,000 tin nhắn/tháng',
          'AI nâng cao + YouTube auto reply',
          'Dashboard thống kê chi tiết',
          'Tùy chỉnh chatbot theo ngành',
          'Hỗ trợ 24/7'
        ],
        popular: true,
        color: '#00d4ff'
      },
      {
        name: 'Enterprise',
        price: '99,900,000',
        period: '/năm',
        originalPrice: '119,880,000',
        description: 'Tiết kiệm 17% + nhiều ưu đãi',
        features: [
          'Không giới hạn kênh chat',
          'Không giới hạn tin nhắn',
          'AI cao cấp + Tích hợp CRM',
          'Báo cáo chi tiết + API',
          'Tùy chỉnh hoàn toàn',
          'Dedicated support manager',
          'Training riêng cho team'
        ],
        popular: false,
        color: '#f39c12'
      }
    ],
    lifetime: [
      {
        name: 'Lifetime Pro',
        price: '199,900,000',
        period: 'một lần',
        originalPrice: '599,760,000',
        description: 'Sở hữu vĩnh viễn - Tiết kiệm 67%',
        features: [
          'Tất cả tính năng Professional',
          'Sử dụng vĩnh viễn',
          'Cập nhật miễn phí',
          'Không phí gia hạn',
          'Ưu tiên hỗ trợ',
          'Tặng kèm training'
        ],
        popular: true,
        color: '#e74c3c'
      }
    ]
  };

  const currentPlans = pricingPlans[billingCycle];

  const renderPrice = (priceString) => {
    // Extract number from price string (e.g., "2,990,000" -> 2990000)
    const cleanPrice = priceString.replace(/,/g, '');
    const priceNumber = parseInt(cleanPrice);
    
    // Always show full number with comma formatting
    return <Counter end={priceNumber} duration={2500} />;
  };

  const renderOriginalPrice = (priceString) => {
    const cleanPrice = priceString.replace(/,/g, '');
    const priceNumber = parseInt(cleanPrice);
    
    // Always show full number with comma formatting
    return <Counter end={priceNumber} duration={2000} />;
  };

  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Mức giá dịch vụ</h2>
          <p className="section-subtitle">
            Chọn gói phù hợp với quy mô và nhu cầu của doanh nghiệp bạn
          </p>
        </div>

        <div className="billing-toggle" data-aos="fade-up" data-aos-delay="200">
          <button 
            className={billingCycle === 'monthly' ? 'active' : ''}
            onClick={() => setBillingCycle('monthly')}
          >
            Hàng tháng
          </button>
          <button 
            className={billingCycle === 'yearly' ? 'active' : ''}
            onClick={() => setBillingCycle('yearly')}
          >
            Hàng năm
            <span className="save-badge">Tiết kiệm 17%</span>
          </button>
          <button 
            className={billingCycle === 'lifetime' ? 'active' : ''}
            onClick={() => setBillingCycle('lifetime')}
          >
            Vĩnh viễn
            <span className="save-badge">Tiết kiệm 67%</span>
          </button>
        </div>

        <div className="pricing-grid">
          {currentPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              data-aos="zoom-in" 
              data-aos-delay={300 + index * 150}
              style={{'--plan-color': plan.color}}
            >
              {plan.popular && <div className="popular-badge">Phổ biến nhất</div>}
              
              <div className="plan-header">
                <h3>{plan.name}</h3>
                <div className="price-container">
                  {plan.originalPrice && (
                    <span className="original-price">
                      {renderOriginalPrice(plan.originalPrice)}đ
                    </span>
                  )}
                  <span className="price">
                    {renderPrice(plan.price)}đ
                  </span>
                  <span className="period">{plan.period}</span>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>

              <ul className="features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="plan-button">
                {billingCycle === 'lifetime' ? 'Mua ngay' : 'Dùng thử miễn phí 7 ngày'}
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-guarantee" data-aos="fade-up" data-aos-delay="800">
          <h3>
            <HiShieldCheck size={28} />
            Cam kết hoàn tiền 100%
          </h3>
          <p>Nếu không hài lòng trong 30 ngày đầu, chúng tôi hoàn lại 100% chi phí</p>
        </div>

        <div className="pricing-contact" data-aos="fade-up" data-aos-delay="900">
          <h3>Cần tư vấn gói phù hợp?</h3>
          <p>Liên hệ ngay để được tư vấn miễn phí và nhận ưu đãi đặc biệt</p>
          <a href="tel:0888889805" className="btn btn-primary">
            Gọi ngay: 0888 889 805
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;