import { Link } from "react-router";
import bmi from "./../assets/bmi.png";
import Footer from "../components/Footer";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Bmi() {
  //สร้าง state ด้วย useState

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiValue, setBmiValue] = useState('0.00');
  const [bmiStatus, setBmiStatus] = useState('');

  //ฟังก์ชันคำนวณค่า BMI 
  const calculateBmi = (e) => {
    e.preventDefault();

    //V
    if (!weight || !height || weight <= 0 || height <= 0) {
      Swal.fire({
        icon: "warning",
        title: "คำเตือน",
        text: "กรุณากรอกน้ำหนักและส่วนสูงให้ถูกต้องนะจ๊ะ",
        confirmButtonText: "ตกลง"
      });
      return; //อย่าลืมใส่ return เพื่อหยุดการทำงานของฟังก์ชันถ้าข้อมูลไม่ถูกต้อง
    }

    const w = Number(weight);
    const h = Number(height);
    const bmiResult = w /((h/100)**2)
    setBmiValue(bmiResult.toFixed(2));

    if (bmiValue < 18.5) {
      setBmiStatus("น้ำหนักน้อย / ผอม");
    } else if (bmiValue >= 18.5 && bmiValue <= 22.9) {
      setBmiStatus("ปกติ (สุขภาพดี)");
    } else if (bmiValue >= 23.0 && bmiValue <= 24.9) {
      setBmiStatus("ท้วม / น้ำหนักเกิน");
    } else if (bmiValue >= 25.0 && bmiValue <= 29.9) {
      setBmiStatus("อ้วน / อ้วนระดับ 1");
    } else {
      setBmiStatus("อ้วนมาก / อ้วนระดับ 2");
    }
  };

  // 3. ฟังก์ชันรีเซ็ตค่า
  const handleReset = () => {
    setWeight('');
    setHeight('');
    setBmiValue('0.00');
    setBmiStatus('');
  };

  return (
    <>
      <div
        className="w-[50%] border border-gray-200 rounded-2xl
                  shadow-xl mt-20 mx-auto flex flex-col
                  items-center p-10"
      >
        {/* แสดงรูปและชื่อหน้าจอ */}
        <p className="font-kanit font-bold text-2xl">BMI Calculator</p>
        <p className="font-kanit font-bold text-gray-500">คำนวณ BMI</p>
        <img src={bmi} alt="BMI" className="w-20 mt-5" />

        {/* ส่วนของฟอร์ม สำหรับป้อน เลือก คลิก */}
        <form onSubmit={calculateBmi} className="w-full mt-10 flex flex-col">
          <label className="font-kanit">ป้อนน้ำหนัก (กิโลกรัม)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="เช่น 65"
            className="border border-gray-300 p-2 rounded-md
                       placeholder:font-kanit"
          />

          <label className="font-kanit mt-3">ป้อนส่วนสูง (เซนติเมตร)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="เช่น 170"
            className="border border-gray-300 p-2 rounded-md
                       placeholder:font-kanit"
          />

          <button
            onClick={calculateBmi}
            className="w-full bg-blue-600 mt-5 p-2 rounded-md
                       text-white font-kanit font-bold cursor-pointer
                       hover:bg-blue-800"
          >
            คำนวณ BMI
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="w-full bg-gray-400 mt-3 p-2 rounded-md
                       text-black font-kanit font-bold cursor-pointer
                       hover:bg-gray-500"
          >
            รีเซ็ต
          </button>
        </form>

        {/* ส่วนแสดงผล */}

        <div className="w-full mt-6 text-center">
          <p className="font-kanit text-lg font-bold">
            ค่า BMI ที่คำนวณได้:{" "}
            <span className="text-blue-600">{bmiValue}</span>
          </p>
          {bmiStatus && (
            <p className="font-kanit text-md font-semibold mt-2 text-gray-700">
              สถานะ: {bmiStatus}
            </p>
          )}
        </div>

        {/* ส่วนลิงค์กลับไปหน้าหลัก */}
        <a
          href="/"
          className="w-full bg-gray-200 mt-5 p-2 rounded-md
                     text-black font-kanit font-bold text-center
                     hover:bg-gray-300 block"
        >
          กลับหน้าหลัก
        </a>
        {/* แสดงส่วน Footer */}
        <Footer />
      </div>
    </>
  );
}
