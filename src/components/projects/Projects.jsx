import "./Projects.css";

import HTML from "../../assets/projects/stack/html.png";
import CSS from "../../assets/projects/stack/css.png";
import JS from "../../assets/projects/stack/JavaScript.png";
import React from "../../assets/projects/stack/react.png";
import Node from "../../assets/projects/stack/node.png";
import Express from "../../assets/projects/stack/expressjs.jpg";
import MongoDB from "../../assets/projects/stack/mongoDB.png";
import PostgresSQL from "../../assets/projects/stack/postgesSQL.png";
import GIT from "../../assets/projects/stack/git.png";

import StackDet from "./components/StackDet";

import { useState } from "react";

export default function Projects() {
  const [over, setOver] = useState(false);

  console.log(over);

  return (
    <div className="boxes-wrapper projects-wrapper">
      <p>Проекты</p>
      <div className="stack-wrapper">
        <p>Стек:</p>
        <div
          className="stack"
          onMouseEnter={() => setOver(true)}
          onMouseLeave={() => setOver(false)}
        >
          <div className="stack-inner">
            <div className="logos-wrapper">
              <img src={HTML} alt="HTML logo" />
            </div>
            <div className="logos-wrapper">
              <img src={CSS} alt="HTML logo" />
            </div>
            <div className="logos-wrapper">
              <img src={JS} alt="HTML logo" />
            </div>
            <div className="logos-wrapper">
              <img src={React} alt="HTML logo" />
            </div>
            <div className="logos-wrapper">
              <img src={Node} alt="HTML logo" />
            </div>
            <div className="logos-wrapper">
              <img src={Express} alt="HTML logo" />
            </div>
            <div className="logos-wrapper">
              <img src={MongoDB} alt="HTML logo" />
            </div>
            <div className="logos-wrapper">
              <img src={PostgresSQL} alt="HTML logo" />
            </div>
            <div className="logos-wrapper">
              <img src={GIT} alt="HTML logo" />
            </div>
          </div>
        </div>

        <div
          className="stack-details"
          style={{ display: over ? "block" : "none" }}
        >
          <p><StackDet/></p>
        </div>
      </div>
    </div>
  );
}
