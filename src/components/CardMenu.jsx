export default function CardMenu({showImg, showTitle,showDetail}) {
  return (
    <div className="w-50 border flex flex-col items-center p-8 border-gray-200 rounded-2xl shadow-2xl ">
      <img src={showImg} alt="รูปนะ" className="w-25" />
      <p className="mt-5 font-kanit text-2xl font-bold">
        {showTitle}
      </p>
      <p className="text-center font-charm">
        {showDetail}
      </p>
    </div>
  )
}