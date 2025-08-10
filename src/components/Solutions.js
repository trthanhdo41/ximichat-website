import React from 'react';
import { HiPlay, HiNewspaper, HiVideoCamera, HiChatBubbleLeftRight, HiChatBubbleBottomCenterText } from 'react-icons/hi2';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      icon: HiChatBubbleLeftRight,
      title: 'Chatbot AI CSKH',
      description: 'AI chatbot cho 4 nền tảng: Zalo, Facebook, Telegram, Web với khả năng hiểu và trả lời tự động 24/7',
      features: ['4 kênh chat tích hợp', 'AI trả lời thông minh', 'Dashboard phân tích khách hàng']
    },
    {
      icon: HiChatBubbleBottomCenterText,
      title: 'YouTube Auto Comment',
      description: 'AI phân tích tiêu đề, mô tả và phụ đề video để tự động trả lời bình luận phù hợp với nội dung',
      features: ['Auto reply comment khán giả', 'Comment chính vào video', 'Báo cáo tương tác chi tiết']
    },
    {
      icon: HiNewspaper,
      title: 'AI Auto Post Facebook',
      description: 'Tự động đăng bài từ báo chí và dữ liệu với AI viết caption thông minh',
      features: ['Auto post từ nguồn báo chí', 'AI viết caption', 'Lên lịch đăng bài tự động']
    },
    {
      icon: HiVideoCamera,
      title: 'AI Video Generator',
      description: 'Tự động tạo video marketing chuyên nghiệp với AI từ text và hình ảnh',
      features: ['Tạo video từ text', 'Tự động thêm nhạc nền', 'Tích hợp đa nền tảng']
    }
  ];

  return (
    <section id="solutions" className="solutions section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            Xem AI giải quyết như thế nào
          </h2>
          <p className="section-subtitle">
            XimiChat mang đến giải pháp AI toàn diện, giúp doanh nghiệp tự động hóa hoàn toàn quy trình CSKH
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div key={index} className="solution-card" data-aos="flip-left" data-aos-delay={200 + index * 150}>
                <div className="solution-header">
                  <div className="solution-icon">
                    <IconComponent size={40} />
                  </div>
                  <h3>{solution.title}</h3>
                </div>
              <p className="solution-description">{solution.description}</p>
              <ul className="solution-features">
                {solution.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            );
          })}
        </div>

        <div className="video-demo" data-aos="zoom-in" data-aos-delay="800">
          <h3>Xem XimiChat hoạt động trong thực tế</h3>
          <div className="video-placeholder">
            <div className="play-button">
              <HiPlay size={80} className="play-icon" />
            </div>
            <p>Video Demo: AI tự động trả lời khách hàng</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;