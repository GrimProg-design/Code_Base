import { useState, useRef } from "react";
import "./Settings.css";
import Switch from "./components/Switch";

export default function Settings() {
  const [active, setActive] = useState(0);
  const containerRef = useRef();

  const handleChange = (index) => {
    setActive(index);

    document.body.classList.remove("base", "dark", "light");
    if (index === 0) document.body.classList.add("base");
    if (index === 1) document.body.classList.add("dark");
    if (index === 2) document.body.classList.add("light");

    const boxes = document.querySelectorAll(".boxes-wrapper");
    boxes.forEach((box) => {
      box.classList.remove("base", "dark", "light");
      if (index === 0) box.classList.add("base");
      if (index === 1) box.classList.add("dark");
      if (index === 2) box.classList.add("light");
    });

    const stackD = document.querySelectorAll(".stack-details");
    stackD.forEach((stack) => {
        stack.classList.remove("base", "dark", "light")
        if (index === 0) stack.classList.add("base");
        if (index === 1) stack.classList.add("dark");
        if (index === 2) stack.classList.add("light");
    })

    const links = document.querySelectorAll(".links-wrappers");
    links.forEach((link) => {
        link.classList.remove("base", "dark", "light")
        if (index === 0) link.classList.add("base");
        if (index === 1) link.classList.add("dark");
        if (index === 2) link.classList.add("light");
    })

    const photo = document.querySelector(".photo-wrapper");
    photo.classList.remove("base", "dark", "light")
    if (index === 0) photo.classList.add("base");
    if (index === 1) photo.classList.add("dark");
    if (index === 2) photo.classList.add("light");
  };

  return (
    <div className="boxes-wrapper settings-wrapper" ref={containerRef}>
      <p>Settings</p>
      <div className="switch-wrapper">
        <Switch
          checked={active === 0}
          onChange={() => handleChange(0)}
          mode="base"
          desc="Base Mode"
        />
        <Switch
          checked={active === 1}
          onChange={() => handleChange(1)}
          mode="dark"
          desc="Dark Mode"
        />
        <Switch
          checked={active === 2}
          onChange={() => handleChange(2)}
          mode="light"
          desc="Light Mode"
        />
      </div>
    </div>
  );
}
