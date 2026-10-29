import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Car from "./pages/Car";
import Bmr from "./pages/Bmr";
import Bmi from "./pages/Bmi";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car" element={<Car />} />
          <Route path="/bmr" element={<Bmr />} />
          <Route path="/bmi" element={<Bmi />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
