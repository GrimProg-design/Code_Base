import InfoHeader from "./components/header/infoHeader";
import "./Info.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/main/About";
import More from "./components/main/More";
import Learning from "./components/main/Learning";
import Education from "./components/main/Education";

export default function Info() {
  return (
    <BrowserRouter>
      <div className="boxes-wrapper info-wrapper">
        <InfoHeader />
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/more" element={<More/>}/>
            <Route path="/learn" element={<Learning/>}/>
            <Route path="/way" element={<Education/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
