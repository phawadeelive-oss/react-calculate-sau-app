import bmi from "./../assets/bmi.png";

export default function Bmi() {
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
        <form className="w-full mt-10 flex flex-col">
          <label className="font-kanit">ป้อนน้ำหนัก (กิโลกร้ม)</label>
          <input
            type="number"
            name=""
            id=""
            placeholder="เช่น 65"
            className="border border-gray-300 p-2 rounded-md
                            placeholder:font-kanit"
          />

          <label className="font-kanit mt-3">ป้อนน้ำสูง (เซนติเมตร)</label>
          <input
            type="number"
            name=""
            id=""
            placeholder="เช่น 170"
            className="border border-gray-300 p-2 rounded-md
                            placeholder:font-kanit"
          />

          <button
            className="w-full bg-blue-600 mt-5 p-2 rounded-md
                            text-white font-kanit font-bold cursor-pointer
                            hover:bg-blue-800"
          >
            คำนวณ BMI
          </button>
          <button
            className="w-full bg-gray-400 mt-3 p-2 rounded-md
                            text-black font-kanit font-bold cursor-pointer
                            hover:bg-gray-500"
          >
            รีเซ็ต
          </button>
        </form>

        {/* ส่วนแสดงผล */}

        {/* ส่วนลิงค์กลับไปหน้าหลัก */}
      </div>
    </>
  );
}
