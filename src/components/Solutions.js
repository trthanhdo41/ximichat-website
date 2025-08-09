import React from 'react';
import { HiPlay, HiViewColumns, HiCpuChip, HiChatBubbleLeftEllipsis } from 'react-icons/hi2';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      icon: HiChatBubbleLeftEllipsis,
      title: 'AI Chatbot Đa Nền Tảng',
      description: 'Tích hợp trên Zalo, Facebook, Telegram, Website với khả năng hiểu và trả lời tự động',
      features: ['Hiểu ngôn ngữ tự nhiên', 'Trả lời tức thì', 'Học hỏi từ dữ liệu']
    },
    {
      icon: HiPlay,
      title: 'Auto Reply YouTube',
      description: 'AI phân tích tiêu đề, mô tả và phụ đề video để tự động trả lời bình luận phù hợp với nội dung',
      features: ['Phân tích nội dung video', 'Trả lời theo ngữ cảnh video', 'Tăng engagement tự nhiên']
    },
    {
      icon: HiViewColumns,
      title: 'Quản Lý Tập Trung',
      description: 'Dashboard thống nhất để quản lý tất cả các kênh giao tiếp từ một nơi',
      features: ['Giao diện trực quan', 'Báo cáo chi tiết', 'Thống kê realtime']
    },
    {
      icon: HiCpuChip,
      title: 'AI Thông Minh',
      description: 'Công nghệ AI tiên tiến với độ chính xác cao, liên tục học hỏi và cải thiện',
      features: ['Machine Learning', 'NLP Tiếng Việt', 'Tùy chỉnh theo ngành']
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