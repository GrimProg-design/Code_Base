import "./Projects.css";
import { useState } from "react";

import StackDet from "./components/StackDet";
import StackLogos from "./components/StackLogos";
import MyProjects from "./components/MyProjects";

export default function Projects() {
  const [over, setOver] = useState(false);

  return (
    <div className="boxes-wrapper projects-wrapper">
      <p>Projects</p>
      <div className="stack-wrapper">
        <p>Stack:</p>
        <div
          className="stack"
          onMouseEnter={() => setOver(true)}
          onMouseLeave={() => setOver(false)}
        >
          <StackLogos />
        </div>

        <div
          className="stack-details"
          style={{ display: over ? "block" : "none" }}
        >
          <StackDet />
        </div>
        <p id="para">My projects:</p>
        <div>
            <MyProjects/>
        </div>
      </div>
    </div>
  );
}
