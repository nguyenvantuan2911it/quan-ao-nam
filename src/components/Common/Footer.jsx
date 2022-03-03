import React from "react";

Footer.propTypes = {};

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__infor">
        <span className="footer__infor-heading">KẾT NỐI VỚI SHOP</span>
        <ul className="footer__infor-list">
          <li className="footer__infor-item"></li>
          <li className="footer__infor-item">Nhận email từ chúng tôi</li>
          <li className="footer__infor-item">
            <input type="text" />{" "}
          </li>
        </ul>
      </div>
      <div className="footer__infor">
        <span className="footer__infor-heading">
          THƯƠNG HIỆU THỜI TRANG NAM 4MEN®
        </span>
        <ul className="footer__infor-list">
          <li className="footer__infor-item">
            Email mua hàng: saleonline@4men.com.vn
          </li>
          <li className="footer__infor-item">Hotline: 0868.444.644</li>
          <li className="footer__infor-item">Tìm địa chỉ CỬA HÀNG gần bạn</li>
        </ul>
      </div>
      <div className="footer__infor">
        <span className="footer__infor-heading">VỀ CHÚNG TÔI</span>
        <ul className="footer__infor-list">
          <li className="footer__infor-item">Giới thiệu 4MEN</li>
          <li className="footer__infor-item">Liên hệ</li>
          <li className="footer__infor-item">Tuyển dụng</li>
          <li className="footer__infor-item">Tin tức 4MEN</li>
        </ul>
      </div>
      <div className="footer__infor">
        <span className="footer__infor-heading">TRỢ GIÚP</span>
        <ul className="footer__infor-list">
          <li className="footer__infor-item">Hướng dẫn mua hàng</li>
          <li className="footer__infor-item">Hướng dẫn chọn size</li>
          <li className="footer__infor-item">Câu hỏi thường gặp</li>
        </ul>
      </div>
      <div className="footer__infor">
        <span className="footer__infor-heading">CHÍNH SÁCH</span>
        <ul className="footer__infor-list">
          <li className="footer__infor-item">Chính sách khách VIP</li>
          <li className="footer__infor-item">Thanh toán - Giao hàng</li>
          <li className="footer__infor-item">Chính sách đổi hàng</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
