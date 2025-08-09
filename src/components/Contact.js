import React, { useState } from 'react';
import { HiPhone, HiEnvelope, HiMapPin, HiCheckCircle, HiCursorArrowRipple, HiChatBubbleLeftEllipsis, HiRocketLaunch } from 'react-icons/hi2';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'professional',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi form ở đây
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 24h.');
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            Đặt Lịch Tư Vấn Miễn Phí – Chỉ mất 30 giây
          </h2>
          <p className="section-subtitle">
            Để lại thông tin, chúng tôi sẽ liên hệ tư vấn giải pháp AI phù hợp nhất cho doanh nghiệp của bạn
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-section" data-aos="fade-right">
            <div className="form-container">
              <div className="form-header">
                <h3>
                  <HiRocketLaunch size={24} className="form-header-icon" />
                  Bắt đầu chuyển đổi số ngay hôm nay
                </h3>
                <p>Điền thông tin để nhận tư vấn miễn phí và ưu đãi đặc biệt</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Họ và tên *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Nhập họ tên của bạn"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Số điện thoại *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="0xxx xxx xxx"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Tên công ty</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Tên doanh nghiệp của bạn"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Gói dịch vụ quan tâm</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="starter">Starter - 2.99 triệu/tháng</option>
                    <option value="professional">Professional - 4.99 triệu/tháng</option>
                    <option value="enterprise">Enterprise - 9.99 triệu/tháng</option>
                    <option value="lifetime">Lifetime - 199.9 triệu</option>
                    <option value="custom">Tùy chỉnh theo nhu cầu</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Nhu cầu cụ thể</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Mô tả ngắn gọn về nhu cầu CSKH hiện tại và mục tiêu bạn muốn đạt được..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <HiCursorArrowRipple size={20} />
                  Nhận tư vấn miễn phí ngay
                </button>

                <div className="form-note">
                  <p>
                    <HiCheckCircle size={16} />
                    Tư vấn hoàn toàn miễn phí
                  </p>
                  <p>
                    <HiCheckCircle size={16} />
                    Không spam, chỉ liên hệ khi cần thiết
                  </p>
                  <p>
                    <HiCheckCircle size={16} />
                    Phản hồi trong vòng 2 giờ
                  </p>
                </div>
              </form>
            </div>
          </div>

          <div className="contact-info-section" data-aos="fade-left">
            <div className="contact-info">
              <h3>Thông tin liên hệ</h3>
              
              <div className="info-item">
                <div className="info-icon">
                  <HiPhone size={24} />
                </div>
                <div className="info-content">
                  <h4>Hotline</h4>
                  <a href="tel:0888889805">0888 889 805</a>
                  <span>(8:00 - 22:00, hàng ngày)</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <HiEnvelope size={24} />
                </div>
                <div className="info-content">
                  <h4>Email</h4>
                  <a href="mailto:trdo1309@gmail.com">trdo1309@gmail.com</a>
                  <span>Phản hồi trong vòng 2 giờ</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <HiMapPin size={24} />
                </div>
                <div className="info-content">
                  <h4>Địa chỉ</h4>
                  <div className="address-text">
                    <span>Toà BE1 Vinhome Grand Park</span>
                    <span>TP. Thủ Đức, HCM</span>
                  </div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <HiChatBubbleLeftEllipsis size={24} />
                </div>
                <div className="info-content">
                  <h4>Chat trực tiếp</h4>
                  <a href="https://zalo.me/0888889805" target="_blank" rel="noopener noreferrer">
                    Zalo: 0888 889 805
                  </a>
                  <span>Online 24/7</span>
                </div>
              </div>
            </div>



            <div className="map-container">
              <h4>Vị trí văn phòng</h4>
              <div className="map-embed">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.564487371996!2d106.84481422516228!3d10.8446027579322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317521004e66e6e7%3A0x24105ac0e0c61666!2sT%C3%B2a%20BE1%20-%20The%20Beverly%20-%20Vinhomes%20Grand%20Park!5e0!3m2!1sen!2s!4v1754743668097!5m2!1sen!2s" 
                  width="100%" 
                  height="200" 
                  style={{border:0, borderRadius: '10px'}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="XimiChat Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;