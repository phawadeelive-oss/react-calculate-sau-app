import bmr from "./../assets/bmr.png";
import Footer from "../components/Footer";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Bmr() {
  const [weight, setWeight] = useState("0");
  const [height, setHeight] = useState("0");
  const [age, setAge] = useState("0");
  const [gender, setGender] = useState("male");
  const [bmrResult, setBmrResult] = useState("0.00");
  const [bmrStatus, setBmrStatus] = useState("");

  const calculateBmr = (e) => {
    e.preventDefault();

    if (!weight || !height || !age || weight <= 0 || height <= 0 || age <= 0) {
        //V
          Swal.fire({
            icon: "warning",
            title: "คำเตือน",
            text: "กรุณากรอกน้ำหนักส่วนสูงและอายุให้ถูกต้องนะจ๊ะ",
            confirmButtonText: "ตกลง"
          });
          return; //อย่าลืมใส่ return เพื่อหยุดการทำงานของฟังก์ชันถ้าข้อมูลไม่ถูกต้อง
    }

    let bmrValue = 0;
    const w = Number(weight);
    const h = Number(height);
    const a = Number(age);

    if (gender === "male") {
      bmrValue = 66 + 13.7 * w + 5 * h - 6.8 * a; //ชาย
    } else {
      bmrValue = 665 + 9.6 * w + 1.8 * h - 4.7 * a; //หญิง
    }

    const calculatedBmr = bmrValue.toFixed(2);
    setBmrResult(calculatedBmr);

    if (gender === "male") {
      if (bmrValue < 1200) {
        setBmrStatus(
          "อัตราการเผาผลาญต่ำกว่าปกติ (ควรดูแลการทานอาหารและออกกำลังกาย)",
        );
      } else if (bmrValue >= 1200 && bmrValue <= 2000) {
        setBmrStatus("ปกติ (ระบบเผาผลาญอยู่ในเกณฑ์สุขภาพดี)");
      } else {
        setBmrStatus("อัตราการเผาผลาญสูงกว่าค่าเฉลี่ยปกติ");
      }
    } else {
      if (bmrValue < 1000) {
        setBmrStatus(
          "อัตราการเผาผลาญต่ำกว่าปกติ (ควรดูแลการทานอาหารและออกกำลังกาย)",
        );
      } else if (bmrValue >= 1000 && bmrValue <= 1700) {
        setBmrStatus("ปกติ (ระบบเผาผลาญอยู่ในเกณฑ์สุขภาพดี)");
      } else {
        setBmrStatus("อัตราการเผาผลาญสูงกว่าค่าเฉลี่ยปกติ");
      }
    }
  };

  const handleReset = () => {
    setWeight("0");
    setHeight("0");
    setAge("0");
    setGender("male");
    setBmrResult("0.00");
    setBmrStatus("");
  };

  return (
    <>
      <div
        className="w-[50%] border border-gray-200 rounded-2xl
                    shadow-xl mt-20 mx-auto flex flex-col
                    items-center p-10 bg-white"
      >
        <p className="font-kanit font-bold text-2xl">BMR Calculator</p>
        <p className="font-kanit font-bold text-gray-500">คำนวณ BMR</p>
        <img src={bmr} alt="BMR" className="w-20 mt-5" />

        <form onSubmit={calculateBmr} className="w-full mt-10 flex flex-col">
          <label className="font-kanit">ป้อนน้ำหนัก (กิโลกรัม)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="น้ำหนัก"
            className="border border-gray-300 p-2 rounded-md
                       placeholder:font-kanit mt-1"
          />

          <label className="font-kanit mt-3">ป้อนส่วนสูง (เซนติเมตร)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="เช่น 170"
            className="border border-gray-300 p-2 rounded-md
                       placeholder:font-kanit mt-1"
          />

          <label className="font-kanit mt-3">ป้อนอายุ (ปี)</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="เช่น 25"
            className="border border-gray-300 p-2 rounded-md
                       placeholder:font-kanit mt-1"
          />

          <label className="font-kanit mt-3">เพศ:</label>
          <div className="flex gap-6 mt-1 mb-2">
            <label className="font-kanit flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              ชาย
            </label>
            <label className="font-kanit flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
              หญิง
            </label>
          </div>

          <div className="flex gap-3 mt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 p-2 rounded-md
                         text-white font-kanit font-bold cursor-pointer
                         hover:bg-blue-700"
            >
              คำนวณ BMR
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-full bg-red-500 p-2 rounded-md
                         text-white font-kanit font-bold cursor-pointer
                         hover:bg-red-600"
            >
              รีเซ็ต
            </button>
          </div>
        </form>

        <div className="w-full mt-6 text-center">
          <p className="font-kanit text-lg font-bold">
            ค่า BMR ที่คำนวณได้:{" "}
            <span className="text-blue-600">{bmrResult}</span>
          </p>
          {bmrStatus && (
            <p className="font-kanit text-md font-semibold mt-2 text-gray-700">
              สถานะ: {bmrStatus}
            </p>
          )}
        </div>

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
