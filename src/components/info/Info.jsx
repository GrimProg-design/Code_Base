import InfoHeader from "./components/header/infoHeader";
import "./Info.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/main/About";
import More from "./components/main/More";

export default function Info() {
  return (
    <BrowserRouter>
      <div className="boxes-wrapper info-wrapper">
        <InfoHeader />
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/more" element={<More/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
