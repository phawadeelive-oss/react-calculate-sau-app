import { Link } from "react-router";
import car from "./../assets/car.png";
import Footer from "../components/Footer";
import { useState } from "react";
import Swal from "sweetalert2";


export default function CarInstallment() {
  const [name, setName] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [downPaymentPercent, setDownPaymentPercent] = useState("15");
  const [months, setMonths] = useState("24");
  const [monthlyPayment, setMonthlyPayment] = useState("0.00");

  const calculateInstallment = (e) => {
    e.preventDefault();

    if (!carPrice || !interestRate || carPrice <= 0 || interestRate < 0) {
        Swal.fire({
          icon: "warning",
          title: "คำเตือน",
          text: "กรุณากรอกราคารถและอัตราดอกเบี้ยให้ถูกต้อง",
          confirmButtonText: "ตกลง"
        });
        return;
    }

    const price = Number(carPrice);
    const rate = Number(interestRate) / 100;
    const downPercent = Number(downPaymentPercent) / 100;
    const totalMonths = Number(months);
    const years = totalMonths / 12;

    const downPaymentAmount = price * downPercent;
    const financeAmount = price - downPaymentAmount;
    const totalInterest = financeAmount * rate * years;
    const totalPayment = financeAmount + totalInterest;
    const monthly = totalPayment / totalMonths;

    setMonthlyPayment(
      monthly.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  };

  const handleReset = () => {
    setName("");
    setCarPrice("");
    setInterestRate("");
    setDownPaymentPercent("15");
    setMonths("24");
    setMonthlyPayment("0.00");
  };

  return (
    <>
      <div
        className="w-[50%] border border-gray-200 rounded-2xl
                    shadow-xl mt-20 mx-auto flex flex-col
                    items-center p-10 bg-white"
      >
        {/* หัวข้อและรูปภาพ */}
        <p className="font-kanit font-bold text-2xl">Car Installment Calculator</p>
        <p className="font-kanit font-bold text-gray-500">คำนวณ Car Installment</p>
        <img src={car} alt="Car" className="w-20 mt-5" />

        {/* ฟอร์มกรอกข้อมูล */}
        <form onSubmit={calculateInstallment} className="w-full mt-10 flex flex-col">
          <label className="font-kanit">ชื่อผู้คำนวณ</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="กรอกชื่อผู้คำนวณ"
            className="border border-gray-300 p-2 rounded-md
                       placeholder:font-kanit mt-1"
          />

          <label className="font-kanit mt-3">ราคารถ (บาท)</label>
          <input
            type="number"
            value={carPrice}
            onChange={(e) => setCarPrice(e.target.value)}
            placeholder="เช่น 75,0000"
            className="border border-gray-300 p-2 rounded-md
                       placeholder:font-kanit mt-1"
          />

          <label className="font-kanit mt-3">ดอกเบี้ยต่อปี (%)</label>
          <input
            type="number"
            step="0.01"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="เช่น 3.5"
            className="border border-gray-300 p-2 rounded-md
                       placeholder:font-kanit mt-1"
          />

          <label className="font-kanit mt-3">เงินดาวน์ (%)</label>
          <div className="flex gap-4 mt-1 mb-2 flex-wrap">
            {["15", "20", "25", "30", "35"].map((pct) => (
              <label key={pct} className="font-kanit flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name="downPayment"
                  value={pct}
                  checked={downPaymentPercent === pct}
                  onChange={(e) => setDownPaymentPercent(e.target.value)}
                />
                {pct}%
              </label>
            ))}
          </div>

          <label className="font-kanit mt-3">จำนวนเดือนที่ผ่อน</label>
          <select
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            className="border border-gray-300 p-2 rounded-md font-kanit mt-1 bg-white"
          >
            <option value="24">24 เดือน</option>
            <option value="36">36 เดือน</option>
            <option value="48">48 เดือน</option>
            <option value="60">60 เดือน</option>
            <option value="72">72 เดือน</option>
            <option value="84">84 เดือน</option>
          </select>

          {/* ปุ่มคำนวณและปุ่มล้างข้อมูล */}
          <div className="flex gap-3 mt-5">
            <button
              type="submit"
              className="w-full bg-blue-600 p-2 rounded-md
                         text-white font-kanit font-bold cursor-pointer
                         hover:bg-blue-700"
            >
              คำนวณ
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-full bg-gray-300 p-2 rounded-md
                         text-black font-kanit font-bold cursor-pointer
                         hover:bg-gray-400"
            >
              ล้างข้อมูล
            </button>
          </div>
        </form>

        {/* ส่วนแสดงผลค่างวดต่อเดือน */}
        <div className="w-full mt-6 text-center">
          <p className="font-kanit text-lg font-bold">
            ผ่อนชำระต่อเดือน:{" "}
            <span className="text-blue-600">{monthlyPayment} บาท</span>
          </p>
        </div>

        {/* ลิงก์กลับหน้าหลัก */}
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