export default function Switch({ checked, onChange, mode, desc }) {

  return (
    <div className="container-for-switch">
      <label htmlFor={mode}>{desc}</label>
      <label className="switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          id={mode}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
