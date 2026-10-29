import calculate from "./../assets/calculate.png";
import CardMenu from "./../components/CardMenu";
import bmi from "./../assets/bmi.png";
import bmr from "./../assets/bmr.png";
import car from "./../assets/car.png";
import { Link } from "react-router";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col items-center mt-20">
        {/* แสดงรูป */}
        <img src={calculate} alt="calculate" className="w-30" />

        {/* แสดงชื่อเว็บ */}
        <p className="font-kanit text-3xl font-bold mt-10">
          เครื่องมือคำนวณออนไลน์
        </p>
        <p className="font-itim text-gray-600 text-xl">
          เลือกการคำนวณที่คุณต้องการจากรายการด้านล่าง
        </p>

        {/* แสดงปุ่ม 3 ปุ่ม วางเรียงแนวนอน*/}
        <div className="flex gap-10 mt-15">
          <Link to="/bmi">
            <CardMenu
              showImg={bmi}
              showTitle="BMI (ดัชนีมวลกาย)"
              showDetail="คำนวณความสมดุของน้ำหนักส่วนสูง"
            />
          </Link>
          <Link to="/bmr">
            <CardMenu
              showImg={bmr}
              showTitle="BMR (อัตราเผาผลาญ)"
              showDetail="คำนวณการเผาพลาญที่ร่างกายต้องการ"
            />
          </Link>
          <Link to="/car">
            <CardMenu
              showImg={car}
              showTitle="CAR (คำนวณเงินผ่อน)"
              showDetail="คำนวณเงินผ่อนรถยนต์-รถเครื่อง"
            />
          </Link>
        </div>

        {/* แสดงส่วน Footer */}
        <Footer />
      </div>
    </>
  );
}
