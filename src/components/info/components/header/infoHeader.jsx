import Buttons from "./Buttons";

export default function InfoHeader() {

  return (
    <div className="info-header-wrapper">
      <h1>Information</h1>
      <nav className="buttons-container">
        <Buttons
          value="О себе"
          path="/about"
        />
        <Buttons
          value="Подробно о навыках"
          path="/more"
        />
      </nav>
    </div>
  );
}
