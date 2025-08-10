import React, { useState } from 'react';
import { HiPhone, HiChatBubbleLeftEllipsis } from 'react-icons/hi2';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'XimiChat có thể giúp tôi tiết kiệm bao nhiêu thời gian?',
      answer: 'XimiChat có thể xử lý tự động 80-90% các câu hỏi thường gặp của khách hàng, giúp bạn tiết kiệm 6-8 giờ làm việc mỗi ngày. Điều này có nghĩa là bạn có thể tập trung vào các công việc quan trọng khác như phát triển sản phẩm, marketing hay quản lý kinh doanh. Theo thống kê từ 500+ khách hàng, trung bình mỗi doanh nghiệp tiết kiệm được 80% thời gian CSKH và tăng hiệu quả làm việc lên 300%.'
    },
    {
      question: 'Làm sao để tích hợp AI vào hệ thống của tôi?',
      answer: 'Quá trình tích hợp XimiChat rất đơn giản và chỉ mất 3-5 ngày. Đội ngũ kỹ thuật của chúng tôi sẽ hỗ trợ bạn từ A-Z: (1) Phân tích nhu cầu và thiết kế kịch bản chat, (2) Tích hợp API vào các nền tảng Zalo, Facebook, Telegram, Website, (3) Test và tinh chỉnh, (4) Đào tạo sử dụng và bàn giao. Bạn không cần có kiến thức kỹ thuật gì cả! Chúng tôi đã tích hợp thành công với 50+ hệ thống khác nhau bao gồm Shopify, WooCommerce, Magento, và các hệ thống CRM phổ biến.'
    },
    {
      question: 'Mức giá của XimiChat như thế nào?',
      answer: 'XimiChat có 3 gói chính: Starter (2.99 triệu/tháng) phù hợp doanh nghiệp nhỏ, Professional (4.99 triệu/tháng) cho SME, và Enterprise (9.99 triệu/tháng) cho doanh nghiệp lớn. Chúng tôi cũng có gói Lifetime (199.9 triệu - một lần) giúp tiết kiệm 67% chi phí dài hạn. Tất cả gói đều có dùng thử miễn phí 7 ngày và cam kết hoàn tiền 100% nếu không hài lòng. So với chi phí nhân sự CSKH truyền thống (15-25 triệu/tháng), XimiChat giúp tiết kiệm 60-80% chi phí vận hành.'
    },
    {
      question: 'Tôi có thể dùng thử miễn phí không?',
      answer: 'Có! XimiChat cung cấp gói dùng thử miễn phí 7 ngày đầy đủ tính năng. Bạn sẽ được hỗ trợ setup, tích hợp và đào tạo hoàn toàn miễn phí trong thời gian này. Không cần thẻ tín dụng, không ràng buộc. Sau 7 ngày, nếu hài lòng, bạn có thể chọn gói phù hợp. Nếu không, chúng tôi sẽ ngừng dịch vụ mà không thu phí gì. 95% khách hàng dùng thử đã quyết định sử dụng lâu dài sau khi trải nghiệm hiệu quả thực tế.'
    },
    {
      question: 'AI có thể thay thế hoàn toàn nhân viên không?',
      answer: 'XimiChat được thiết kế để hỗ trợ và tăng cường năng lực nhân viên chứ không thay thế hoàn toàn. AI sẽ xử lý 80-90% câu hỏi đơn giản, còn nhân viên sẽ tập trung vào các vấn đề phức tạp, tư vấn chuyên sâu và xây dựng mối quan hệ khách hàng. Kết quả là team CSKH của bạn sẽ hiệu quả hơn 3-5 lần mà vẫn đảm bảo yếu tố con người trong dịch vụ. Theo khảo sát, 87% khách hàng hài lòng hơn khi được phục vụ bởi sự kết hợp giữa AI và nhân viên.'
    },
    {
      question: 'Độ chính xác của AI XimiChat là bao nhiêu?',
      answer: 'XimiChat đạt độ chính xác 99.8% trong việc hiểu và trả lời câu hỏi khách hàng. AI được train với database hơn 10 triệu câu hỏi và câu trả lời từ 500+ doanh nghiệp thuộc 15+ ngành nghề khác nhau. Hệ thống sử dụng công nghệ NLP tiên tiến và machine learning để liên tục cải thiện độ chính xác. Khi gặp câu hỏi phức tạp, AI sẽ tự động chuyển cho nhân viên xử lý, đảm bảo 100% khách hàng được phục vụ tốt nhất.'
    },
    {
      question: 'XimiChat có hỗ trợ đa ngôn ngữ không?',
      answer: 'Có! XimiChat hỗ trợ 15+ ngôn ngữ bao gồm tiếng Việt, tiếng Anh, tiếng Trung, tiếng Nhật, tiếng Hàn và các ngôn ngữ châu Âu. Điều này đặc biệt hữu ích cho các doanh nghiệp xuất nhập khẩu, du lịch hoặc có khách hàng quốc tế. AI có thể tự động nhận diện ngôn ngữ của khách hàng và trả lời phù hợp. Chúng tôi đã triển khai thành công cho 50+ doanh nghiệp đa quốc gia với độ chính xác ngôn ngữ đạt 98%.'
    },
    {
      question: 'Làm sao để đo lường hiệu quả của XimiChat?',
      answer: 'XimiChat cung cấp dashboard phân tích chi tiết với hơn 50+ chỉ số KPI quan trọng: thời gian phản hồi, tỷ lệ chuyển đổi, mức độ hài lòng khách hàng, số lượng tin nhắn xử lý, chi phí tiết kiệm được. Bạn có thể theo dõi hiệu quả theo thời gian thực và nhận báo cáo tự động hàng tuần/tháng. Chúng tôi cũng cung cấp công cụ A/B testing để so sánh hiệu quả trước và sau khi triển khai AI. Trung bình khách hàng thấy cải thiện rõ rệt sau 2-4 tuần sử dụng.'
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