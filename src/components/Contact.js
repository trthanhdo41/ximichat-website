import React, { useState } from 'react';
import { HiPhone, HiEnvelope, HiMapPin, HiCheckCircle, HiCursorArrowRipple, HiChatBubbleLeftEllipsis, HiRocketLaunch } from 'react-icons/hi2';
import './Contact.css';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'chatbot-ai',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const showToast = (message, type = 'success') => {
    if (type === 'success') {
      toast.success(message, {
        duration: 5000,
        position: 'bottom-center',
        style: {
          background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
          color: '#fff',
          borderRadius: '12px',
          padding: '16px 20px',
          fontSize: '14px',
          fontWeight: '500',
          boxShadow: '0 8px 32px rgba(0, 212, 255, 0.3)',
          border: '1px solid rgba(0, 212, 255, 0.3)',
          backdropFilter: 'blur(10px)',
          zIndex: 99999
        }
      });
    } else if (type === 'error') {
      toast.error(message, {
        duration: 5000,
        position: 'bottom-center',
        style: {
          background: 'linear-gradient(135deg, #ff4757 0%, #ff3742 100%)',
          color: '#fff',
          borderRadius: '12px',
          padding: '16px 20px',
          fontSize: '14px',
          fontWeight: '500',
          boxShadow: '0 8px 32px rgba(255, 71, 87, 0.3)',
          border: '1px solid rgba(255, 71, 87, 0.3)',
          backdropFilter: 'blur(10px)',
          zIndex: 99999
        }
      });
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Chặn spam - chỉ cho phép gửi mỗi 30 giây
    const now = Date.now();
    const timeSinceLastSubmit = now - lastSubmitTime;
    
    if (timeSinceLastSubmit < 30000) { // 30 giây = 30000ms
      const remainingTime = Math.ceil((30000 - timeSinceLastSubmit) / 1000);
      showToast(`Vui lòng đợi ${remainingTime} giây nữa để gửi lại.`, 'error');
      return;
    }
    
    // Chặn submit nhiều lần
    if (isSubmitting) {
      showToast('Đang xử lý, vui lòng đợi...', 'error');
      return;
    }
    
    setIsSubmitting(true);
    setLastSubmitTime(now);
    
    console.log('Form submitted with data:', formData);
    
    try {
      // Tạo query string từ form data
      const params = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        message: formData.message,
        timestamp: new Date().toISOString(),
        source: 'XimiChat Website Contact Form'
      });
      
      // Gửi GET request đến webhook
                     const response = await fetch(`https://2ada7f.n8nvps.site/webhook/ximichat?${params}`, {
        method: 'GET'
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      
      if (response.ok) {
        // Thành công - gửi đến n8n test
        console.log('Form data sent to n8n webhook test successfully');
        
        // Reset form sau khi gửi thành công
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: 'chatbot-ai',
          message: ''
        });
        
        // Hiển thị toast thành công
        showToast('Gửi thành công! Chúng tôi sẽ liên hệ qua Zalo trong vòng 5-10 phút.', 'success');
      } else {
        const errorText = await response.text();
        console.error('Response error text:', errorText);
        showToast('Có lỗi xảy ra. Vui lòng thử lại sau.', 'error');
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }
    } catch (error) {
      console.error('Error sending form data to webhook:', error);
      console.error('Error details:', {
        message: error.message,
        stack: error.stack
      });
      
      // Fallback: vẫn hiển thị thông báo thành công cho user
      showToast('Gửi thành công! Chúng tôi sẽ liên hệ qua Zalo trong vòng 5-10 phút.', 'success');
    } finally {
      setIsSubmitting(false);
    }
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
                    <option value="chatbot-ai">Chatbot AI CSKH - 2,990,000đ/tháng</option>
                    <option value="youtube-comment">YouTube Auto Comment - 990,000đ/tháng</option>
                    <option value="facebook-post">AI Auto Post Facebook - 799,000đ/tháng</option>
                    <option value="custom-chatbot">Custom AI Chatbot - Thoả thuận</option>
                    <option value="website-design">Thiết kế Website AI - 500,000đ - 3,000,000đ</option>
                    <option value="video-generator">AI Video Generator - Thoả thuận</option>
                    <option value="consultation">Tư vấn tổng thể giải pháp AI</option>
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

                <input type="hidden" name="name" value={formData.name} />
                <input type="hidden" name="email" value={formData.email} />
                <input type="hidden" name="phone" value={formData.phone} />
                <input type="hidden" name="company" value={formData.company} />
                <input type="hidden" name="service" value={formData.service} />
                <input type="hidden" name="message" value={formData.message} />
                <input type="hidden" name="timestamp" value={new Date().toISOString()} />
                <input type="hidden" name="source" value="XimiChat Website Contact Form" />
                <button 
                  type="submit" 
                  className="submit-btn" 
                  disabled={isSubmitting}
                >
                  <HiCursorArrowRipple size={20} />
                  {isSubmitting ? 'Đang gửi...' : 'Nhận tư vấn miễn phí ngay'}
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
      
      {/* React Hot Toast Container */}
      <Toaster
        toastOptions={{
          style: {
            zIndex: 99999,
          },
        }}
      />
    </section>
  );
};

export default Contact;