import React, { useState } from 'react';
import { HiShieldCheck } from 'react-icons/hi2';
import Counter from './Counter';
import './Pricing.css';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = {
    monthly: [
      {
        name: 'Chatbot AI CSKH',
        price: '2,990,000',
        period: '/tháng',
        description: 'AI chatbot cho 4 nền tảng: Zalo, Facebook, Telegram, Web',
        features: [
          '4 kênh chat (Zalo, FB, Telegram, Web)',
          'Không giới hạn tin nhắn',
          'AI trả lời thông minh 24/7',
          'Lưu trữ dữ liệu chat',
          'Dashboard phân tích khách hàng',
          'Theo dõi chốt đơn hàng',
          'Hỗ trợ email',
          'Dùng thử 7 ngày miễn phí'
        ],
        popular: false,
        color: '#4ecdc4'
      },
      {
        name: 'YouTube Auto Comment',
        price: '990,000',
        period: '/tháng',
        description: 'Tự động reply comment khán giả và comment chính vào video',
        features: [
          'Auto reply comment khán giả',
          'Comment chính vào video của mình',
          'Không giới hạn comment',
          'AI thông minh không giới hạn',
          'Báo cáo tương tác chi tiết',
          'Hỗ trợ email',
          'Dùng thử 7 ngày miễn phí'
        ],
        popular: false,
        color: '#ff6b6b'
      },
      {
        name: 'AI Auto Post Facebook',
        price: '799,000',
        period: '/tháng',
        description: 'Tự động đăng bài từ báo chí và dữ liệu',
        features: [
          'Auto post từ nguồn báo chí',
          'Tối đa 100 bài/tháng',
          'AI viết caption thông minh',
          'Lên lịch đăng bài',
          'Báo cáo hiệu suất',
          'Dùng thử 7 ngày miễn phí'
        ],
        popular: false,
        color: '#f39c12'
      },
      {
        name: 'Custom AI Chatbot',
        price: 'Thoả thuận',
        period: '',
        description: 'AI chatbot tùy chỉnh theo yêu cầu riêng của bạn',
        features: [
          'Tùy chỉnh hoàn toàn theo yêu cầu',
          'Tích hợp Zalo, FB, Telegram, Web',
          'AI xử lý logic phức tạp',
          'API và webhook',
          'Báo cáo chi tiết',
          'Hỗ trợ 24/7',
          'Giá cả thoả thuận',
          'Dùng thử 7 ngày miễn phí'
        ],
        popular: false,
        color: '#00d4ff'
      },
      {
        name: 'Thiết kế Website AI',
        price: '500,000 - 3,000,000',
        period: '',
        description: 'Website làm theo yêu cầu với tích hợp AI đầy đủ tính năng',
        features: [
          'Thiết kế theo yêu cầu riêng',
          'Tích hợp AI chatbot tự động',
          'Responsive design đẹp mắt',
          'Tối ưu SEO chuẩn Google',
          'Tích hợp thanh toán online',
          'Quản lý nội dung dễ dàng',
          'Bảo mật SSL, hosting',
          'Hỗ trợ kỹ thuật 24/7'
        ],
        popular: false,
        color: '#9b59b6'
      },
      {
        name: 'AI Video Generator',
        price: 'Thoả thuận',
        period: '',
        description: 'Tự động tạo video marketing chuyên nghiệp với AI - Giá thoả thuận',
        features: [
          'Tạo video từ text và hình ảnh',
          'Chuyển đổi bài viết thành video',
          'Tự động thêm nhạc nền và hiệu ứng',
          'Hỗ trợ đa định dạng video',
          'Tích hợp với YouTube, TikTok, FB',
          'Báo cáo hiệu suất video',
          'Tùy chỉnh brand và style',
          'Giá cả thoả thuận',
          'Dùng thử 7 ngày miễn phí'
        ],
        popular: false,
        color: '#F59E0B'
      }
    ],
    yearly: [
      {
        name: 'Chatbot AI CSKH',
        price: '14,950,000',
        period: '/6 tháng',
        originalPrice: '17,940,000',
        description: 'Tiết kiệm 17% so với thanh toán hàng tháng',
        features: [
          '4 kênh chat (Zalo, FB, Telegram, Web)',
          'Không giới hạn tin nhắn',
          'AI trả lời thông minh 24/7',
          'Lưu trữ dữ liệu chat',
          'Dashboard phân tích khách hàng',
          'Theo dõi chốt đơn hàng',
          'Hỗ trợ email',
          'Dùng thử 7 ngày miễn phí'
        ],
        popular: false,
        color: '#4ecdc4'
      },
      {
        name: 'YouTube Auto Comment',
        price: '4,950,000',
        period: '/6 tháng',
        originalPrice: '5,940,000',
        description: 'Tiết kiệm 17% - Chỉ 825,000đ/tháng',
        features: [
          'Auto reply comment khán giả',
          'Comment chính vào video của mình',
          'Không giới hạn comment',
          'AI thông minh không giới hạn',
          'Báo cáo tương tác chi tiết',
          'Hỗ trợ email',
          'Dùng thử 7 ngày miễn phí'
        ],
        popular: false,
        color: '#ff6b6b'
      },
      {
        name: 'AI Auto Post Facebook',
        price: '3,990,000',
        period: '/6 tháng',
        originalPrice: '4,794,000',
        description: 'Tiết kiệm 17% so với thanh toán hàng tháng',
        features: [
          'Auto post từ nguồn báo chí',
          'Tối đa 100 bài/tháng',
          'AI viết caption thông minh',
          'Lên lịch đăng bài',
          'Báo cáo hiệu suất',
          'Dùng thử 7 ngày miễn phí'
        ],
        popular: false,
        color: '#f39c12'
      },
      {
        name: 'Custom AI Chatbot',
        price: 'Thoả thuận',
        period: '',
        originalPrice: '',
        description: 'AI chatbot tùy chỉnh theo yêu cầu riêng của bạn',
        features: [
          'Tùy chỉnh hoàn toàn theo yêu cầu',
          'Tích hợp Zalo, FB, Telegram, Web',
          'AI xử lý logic phức tạp',
          'API và webhook',
          'Báo cáo chi tiết',
          'Hỗ trợ 24/7',
          'Giá cả thoả thuận',
          'Dùng thử 7 ngày miễn phí'
        ],
        popular: true,
        color: '#00d4ff'
      },
      {
        name: 'Thiết kế Website AI',
        price: '500,000 - 3,000,000',
        period: '',
        originalPrice: '',
        description: 'Website làm theo yêu cầu với tích hợp AI đầy đủ tính năng',
        features: [
          'Thiết kế theo yêu cầu riêng',
          'Tích hợp AI chatbot tự động',
          'Responsive design đẹp mắt',
          'Tối ưu SEO chuẩn Google',
          'Tích hợp thanh toán online',
          'Quản lý nội dung dễ dàng',
          'Bảo mật SSL, hosting',
          'Hỗ trợ kỹ thuật 24/7'
        ],
        popular: false,
        color: '#9b59b6'
      },
      {
        name: 'AI Video Generator',
        price: 'Thoả thuận',
        period: '',
        originalPrice: '',
        description: 'Tự động tạo video marketing chuyên nghiệp với AI - Giá thoả thuận',
        features: [
          'Tạo video từ text và hình ảnh',
          'Chuyển đổi bài viết thành video',
          'Tự động thêm nhạc nền và hiệu ứng',
          'Hỗ trợ đa định dạng video',
          'Tích hợp với YouTube, TikTok, FB',
          'Báo cáo hiệu suất video',
          'Tùy chỉnh brand và style',
          'Giá cả thoả thuận',
          'Dùng thử 7 ngày miễn phí'
        ],
        popular: false,
        color: '#F59E0B'
      },
      {
        name: 'AI Video Generator',
        price: 'Thoả thuận',
        period: '',
        originalPrice: '',
        description: 'Tự động tạo video marketing chuyên nghiệp với AI - Giá thoả thuận',
        features: [
          'Tạo video từ text và hình ảnh',
          'Chuyển đổi bài viết thành video',
          'Tự động thêm nhạc nền và hiệu ứng',
          'Hỗ trợ đa định dạng video',
          'Tích hợp với YouTube, TikTok, FB',
          'Báo cáo hiệu suất video',
          'Tùy chỉnh brand và style',
          'Giá cả thoả thuận',
          'Dùng thử 7 ngày miễn phí'
        ],
        popular: false,
        color: '#F59E0B'
      }
    ],
    lifetime: [
      {
        name: 'Chatbot AI CSKH',
        price: '26,900,000',
        period: '/năm',
        originalPrice: '35,880,000',
        description: 'Tiết kiệm 25% so với thanh toán hàng tháng',
        features: [
          '4 kênh chat (Zalo, FB, Telegram, Web)',
          'Không giới hạn tin nhắn',
          'AI trả lời thông minh 24/7',
          'Lưu trữ dữ liệu chat',
          'Dashboard phân tích khách hàng',
          'Theo dõi chốt đơn hàng',
          'Hỗ trợ email',
          'Dùng thử 7 ngày miễn phí'
        ],
        popular: false,
        color: '#4ecdc4'
      },
      {
        name: 'YouTube Auto Comment',
        price: '8,910,000',
        period: '/năm',
        originalPrice: '11,880,000',
        description: 'Tiết kiệm 25% - Chỉ 742,500đ/tháng',
        features: [
          'Auto reply comment khán giả',
          'Comment chính vào video của mình',
          'Không giới hạn comment',
          'AI thông minh không giới hạn',
          'Báo cáo tương tác chi tiết',
          'Hỗ trợ email',
          'Dùng thử 7 ngày miễn phí'
        ],
        popular: false,
        color: '#ff6b6b'
      },
      {
        name: 'AI Auto Post Facebook',
        price: '7,190,000',
        period: '/năm',
        originalPrice: '9,588,000',
        description: 'Tiết kiệm 25% so với thanh toán hàng tháng',
        features: [
          'Auto post từ nguồn báo chí',
          'Tối đa 100 bài/tháng',
          'AI viết caption thông minh',
          'Lên lịch đăng bài',
          'Báo cáo hiệu suất',
          'Dùng thử 7 ngày miễn phí'
        ],
        popular: false,
        color: '#f39c12'
      },
      {
        name: 'Custom AI Chatbot',
        price: 'Thoả thuận',
        period: '',
        originalPrice: '',
        description: 'AI chatbot tùy chỉnh theo yêu cầu riêng của bạn',
        features: [
          'Tùy chỉnh hoàn toàn theo yêu cầu',
          'Tích hợp Zalo, FB, Telegram, Web',
          'AI xử lý logic phức tạp',
          'API và webhook',
          'Báo cáo chi tiết',
          'Hỗ trợ 24/7',
          'Giá cả thoả thuận',
          'Dùng thử 7 ngày miễn phí'
        ],
        popular: false,
        color: '#00d4ff'
      },
      {
        name: 'Thiết kế Website AI',
        price: '500,000 - 3,000,000',
        period: '',
        originalPrice: '',
        description: 'Website làm theo yêu cầu với tích hợp AI đầy đủ tính năng',
        features: [
          'Thiết kế theo yêu cầu riêng',
          'Tích hợp AI chatbot tự động',
          'Responsive design đẹp mắt',
          'Tối ưu SEO chuẩn Google',
          'Tích hợp thanh toán online',
          'Quản lý nội dung dễ dàng',
          'Bảo mật SSL, hosting',
          'Hỗ trợ kỹ thuật 24/7'
        ],
        popular: false,
        color: '#9b59b6'
      }
    ]
  };

  // Filter plans based on billing cycle
  let currentPlans;
  if (billingCycle === 'monthly') {
    // Show all plans including "Thoả thuận" for monthly
    currentPlans = pricingPlans[billingCycle];
  } else {
    // For 6 months and 1 year, only show plans with fixed prices
    // Hide: Custom AI Chatbot, Thiết kế Website AI, AI Video Generator
    currentPlans = pricingPlans[billingCycle].filter(plan => 
      plan.name !== 'Custom AI Chatbot' && 
      plan.name !== 'Thiết kế Website AI' && 
      plan.name !== 'AI Video Generator'
    );
  }

  const renderPrice = (priceString) => {
    // Handle "Thoả thuận" case
    if (priceString === 'Thoả thuận') {
      return 'Thoả thuận';
    }
    
    // Handle price range case (e.g., "500,000 - 3,000,000")
    if (priceString.includes(' - ')) {
      const [minPrice, maxPrice] = priceString.split(' - ');
      const minNumber = parseInt(minPrice.replace(/,/g, ''));
      const maxNumber = parseInt(maxPrice.replace(/,/g, ''));
      
      return (
        <span className="price-range">
          <span className="price-with-currency"><Counter end={minNumber} duration={2500} />đ</span> - <span className="price-with-currency"><Counter end={maxNumber} duration={2500} />đ</span>
        </span>
      );
    }
    
    // Extract number from price string (e.g., "2,990,000" -> 2990000)
    const cleanPrice = priceString.replace(/,/g, '');
    const priceNumber = parseInt(cleanPrice);
    
    // Always show full number with comma formatting
    return (
      <span className="price-with-currency">
        <Counter end={priceNumber} duration={2500} />đ
      </span>
    );
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
            1 tháng
          </button>
          <button 
            className={billingCycle === 'yearly' ? 'active' : ''}
            onClick={() => setBillingCycle('yearly')}
          >
            6 tháng
            <span className="save-badge">Tiết kiệm 17%</span>
          </button>
          <button 
            className={billingCycle === 'lifetime' ? 'active' : ''}
            onClick={() => setBillingCycle('lifetime')}
          >
            1 năm
            <span className="save-badge">Tiết kiệm 25%</span>
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
                    {renderPrice(plan.price)}
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
                Dùng thử miễn phí 7 ngày
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