import React, { useState } from 'react';
import { HiPhone, HiChatBubbleLeftEllipsis } from 'react-icons/hi2';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'XimiChat có thể giúp tôi tiết kiệm bao nhiêu thời gian?',
      answer: 'XimiChat có thể xử lý tự động 80-90% các câu hỏi thường gặp của khách hàng, giúp bạn tiết kiệm 6-8 giờ làm việc mỗi ngày. Điều này có nghĩa là bạn có thể tập trung vào các công việc quan trọng khác như phát triển sản phẩm, marketing hay quản lý kinh doanh.'
    },
    {
      question: 'Làm sao để tích hợp AI vào hệ thống của tôi?',
      answer: 'Quá trình tích hợp XimiChat rất đơn giản và chỉ mất 3-5 ngày. Đội ngũ kỹ thuật của chúng tôi sẽ hỗ trợ bạn từ A-Z: (1) Phân tích nhu cầu và thiết kế kịch bản chat, (2) Tích hợp API vào các nền tảng Zalo, Facebook, Telegram, Website, (3) Test và tinh chỉnh, (4) Đào tạo sử dụng và bàn giao. Bạn không cần có kiến thức kỹ thuật gì cả!'
    },
    {
      question: 'Mức giá của XimiChat như thế nào?',
      answer: 'XimiChat có 3 gói chính: Starter (2.99 triệu/tháng) phù hợp doanh nghiệp nhỏ, Professional (4.99 triệu/tháng) cho SME, và Enterprise (9.99 triệu/tháng) cho doanh nghiệp lớn. Chúng tôi cũng có gói Lifetime (199.9 triệu - một lần) giúp tiết kiệm 67% chi phí dài hạn. Tất cả gói đều có dùng thử miễn phí 7 ngày và cam kết hoàn tiền 100% nếu không hài lòng.'
    },
    {
      question: 'Tôi có thể dùng thử miễn phí không?',
      answer: 'Có! XimiChat cung cấp gói dùng thử miễn phí 7 ngày đầy đủ tính năng. Bạn sẽ được hỗ trợ setup, tích hợp và đào tạo hoàn toàn miễn phí trong thời gian này. Không cần thẻ tín dụng, không ràng buộc. Sau 7 ngày, nếu hài lòng, bạn có thể chọn gói phù hợp. Nếu không, chúng tôi sẽ ngừng dịch vụ mà không thu phí gì.'
    },
    {
      question: 'AI có thể thay thế hoàn toàn nhân viên không?',
      answer: 'XimiChat được thiết kế để hỗ trợ và tăng cường năng lực nhân viên chứ không thay thế hoàn toàn. AI sẽ xử lý 80-90% câu hỏi đơn giản, còn nhân viên sẽ tập trung vào các vấn đề phức tạp, tư vấn chuyên sâu và xây dựng mối quan hệ khách hàng. Kết quả là team CSKH của bạn sẽ hiệu quả hơn 3-5 lần mà vẫn đảm bảo yếu tố con người trong dịch vụ.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            Câu hỏi thường gặp về dịch vụ tự động hóa AI
          </h2>
          <p className="section-subtitle">
            Những thắc mắc phổ biến và câu trả lời chi tiết về XimiChat
          </p>
        </div>

        <div className="faq-container" data-aos="fade-up" data-aos-delay="200">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              data-aos="fade-up" 
              data-aos-delay={300 + index * 100}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <div className="faq-icon">
                  <span className={`icon ${activeIndex === index ? 'rotate' : ''}`}>+</span>
                </div>
              </button>
              
              {/* Method 1: CSS-based animation */}
              <div className="faq-answer">
                <div className="faq-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
              
              {/* Method 2: React conditional render (backup) */}
              {activeIndex === index && (
                <div className="faq-answer-backup" style={{
                  padding: '0 30px 30px 30px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'rgba(255, 0, 0, 0.1)', // Red tint để debug
                  display: 'none' // Ẩn đi, chỉ dùng khi cần
                }}>
                  <p style={{
                    color: '#bbb',
                    lineHeight: 1.7,
                    margin: '20px 0 0 0',
                    fontSize: '1rem'
                  }}>
                    BACKUP: {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-cta" data-aos="fade-up" data-aos-delay="800">
          <h3>Vẫn còn thắc mắc?</h3>
          <p>
            Đội ngũ chuyên gia XimiChat luôn sẵn sàng tư vấn và giải đáp mọi câu hỏi của bạn
          </p>
          <div className="contact-options">
            <a href="tel:0888889805" className="btn btn-primary">
              <HiPhone size={20} />
              Gọi ngay: 0888 889 805
            </a>
            <a href="https://zalo.me/0888889805" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <HiChatBubbleLeftEllipsis size={20} />
              Chat Zalo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;