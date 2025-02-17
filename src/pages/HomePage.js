import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ ใช้เพื่อนำทาง
import './Home.css';
import img1 from '../images/v9_4.png';
import img2 from '../images/v9_5.png';
import img3 from '../images/v9_6.png';
import imgb2 from '../images/v9_12.png';
import NJ1 from '../images/v9_14.png';
import NJ2 from '../images/v9_15.png';
import NJ3 from '../images/v9_16.png';
import NJ4 from '../images/v9_17.png';
import NJ5 from '../images/v9_18.png';
import NJ6 from '../images/v9_20.png';

function Homepage() {
  const navigate = useNavigate(); // ✅ ใช้สำหรับนำทาง

  // ฟังก์ชันนำทางไปยัง MenuPage
  const goToMenu = () => {
    navigate('/menu');
  };

  return (
    <div className="Homepage">
      {/* ส่วนของแถบสีขาว */}
      <div className="box">
        <div className="soup-container">
          <div className="soup-item" onClick={goToMenu} style={{ cursor: 'pointer' }}>
            <img src={img1} className="img-fluid rounded-circle" alt="ซุปชาบู" />
            <p>น้ำซุปไก่</p>
          </div>
          <div className="soup-item" onClick={goToMenu} style={{ cursor: 'pointer' }}>
            <img src={img2} className="img-fluid rounded-circle" alt="ซุปชาบู" />
            <p>น้ำซุปต้มยำ</p>
          </div>
          <div className="soup-item" onClick={goToMenu} style={{ cursor: 'pointer' }}>
            <img src={img3} className="img-fluid rounded-circle" alt="ซุปชาบู" />
            <p>ซุปชาบู</p>
          </div>
        </div>
      </div>

      <div className="bg2">
        <center>
          <img src={imgb2} className="img-fluid" alt="..." />
        </center>
      </div>

      {/* ส่วนของน้ำจิ้ม */}
      <div className="box2">
        <div className="soup-item">
          <img src={NJ1} className="img-fluid rounded-circle" alt="#" />
          <p>น้ำจิ้มสุกกี้</p>
        </div>

        <div className="soup-item">
          <img src={NJ2} className="img-fluid rounded-circle" alt="#" />
          <p>น้ำจิ้มสุกกี้</p>
        </div>

        <div className="soup-item">
          <img src={NJ3} className="img-fluid rounded-circle" alt="#" />
          <p>น้ำจิ้มสุกกี้</p>
        </div>

        <div className="soup-item">
          <img src={NJ4} className="img-fluid rounded-circle" alt="#" />
          <p>น้ำจิ้มงา</p>
        </div>

        <div className="soup-item">
          <img src={NJ5} className="img-fluid rounded-circle" alt="#" />
          <p>น้ำจิ้มสุกกี้</p>
        </div>

        <div className="soup-item">
          <img src={NJ6} className="img-fluid rounded-circle" alt="#" />
          <p>น้ำจิ้มสุกกี้</p>
        </div>
      </div>

      {/* คำอธิบายเกี่ยวกับร้าน */}
      <div className="footer">
        <div className="content-section">
          <h4>คำอธิบายเกี่ยวกับร้าน</h4>
          <p>คัดสรรน้ำซุปที่อร่อยที่สุด พร้อมน้ำจิ้มที่เข้ากันกับชาบูทุกเมนู</p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
