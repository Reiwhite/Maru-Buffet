// Homepage.js
import React from 'react';
import './Home.css'
import img1 from '../images/v9_4.png';
import img2 from '../images/v9_5.png';
import img3 from '../images/v9_6.png';

function Homepage() {
  return (
    <div className="Homepage">
      <div className="container text-center my-4">
        <div className="row">
          <div className="col-md-4">
            <img src={img1} className="img-fluid rounded-circle" alt="ซุปชาบู"/>
            <p>น้ำซุปไก่</p>
          </div>
          <div className="col-md-4">
            <img src={img2} className="img-fluid rounded-circle" alt="ซุปชาบู"/>
            <p>น้ำซุปต้มยำ</p>
          </div>
          <div className="col-md-4">
            <img src={img3} className="img-fluid rounded-circle" alt="ซุปชาบู"/>
            <p>ซุปชาบู</p>
          </div>
        </div>
      </div>

      <div className="container text-center my-4">
        <img src="sauces.jpg" className="img-fluid" alt="น้ำจิ้ม"/>
        <p className="mt-3">น้ำจิ้มหลากหลายรสชาติให้เลือก</p>
      </div>

      <div className="container text-center my-4">
        <h4>คำอธิบายเกี่ยวกับร้าน</h4>
        <p>คัดสรรน้ำซุปที่อร่อยที่สุด พร้อมน้ำจิ้มที่เข้ากันกับชาบูทุกเมนู</p>
      </div>

    </div>
  );
}

export default Homepage;
