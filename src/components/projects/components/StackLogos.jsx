import HTML from "../../../assets/projects/stack/html.png";
import CSS from "../../../assets/projects/stack/css.png";
import JS from "../../../assets/projects/stack/JavaScript.png";
import ReactLogo from "../../../assets/projects/stack/react.png";
import Node from "../../../assets/projects/stack/node.png";
import Express from "../../../assets/projects/stack/expressjs.jpg";
import MongoDB from "../../../assets/projects/stack/mongoDB.png";
import PostgresSQL from "../../../assets/projects/stack/postgesSQL.png";
import GIT from "../../../assets/projects/stack/git.png";

export default function StackLogos() {
    return (
        <div className="stack-inner">
            <div className="logos-wrapper"><img src={HTML} alt="HTML logo" /></div>
            <div className="logos-wrapper"><img src={CSS} alt="CSS logo" /></div>
            <div className="logos-wrapper"><img src={JS} alt="JS logo" /></div>
            <div className="logos-wrapper"><img src={ReactLogo} alt="React logo" /></div>
            <div className="logos-wrapper"><img src={Node} alt="Node logo" /></div>
            <div className="logos-wrapper"><img src={Express} alt="Express logo" /></div>
            <div className="logos-wrapper"><img src={MongoDB} alt="MongoDB logo" /></div>
            <div className="logos-wrapper"><img src={PostgresSQL} alt="Postgres logo" /></div>
            <div className="logos-wrapper"><img src={GIT} alt="GIT logo" /></div>
        </div>
    );
}
