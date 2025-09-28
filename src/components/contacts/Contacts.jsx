import "./Contacts.css";

export default function Contacts() {
  return (
    <div className="boxes-wrapper contacts-wrapper">
      <h1>Contacts</h1>
      <div>
        <label htmlFor="">мой GitHub профиль:</label>
        <a
          href="https://github.com/GrimProg-design"
          target="_blank"
          rel="noopener noreferrer"
          className="links-wrappers contacts-links"
        >
          GitHub
        </a>
      </div>

      <div>
        <label htmlFor="">Мой телеграм:</label>
        <a
          href="https://t.me/grim_gami"
          target="_blank"
          rel="noopener noreferrer"
          className="links-wrappers contacts-links"
        >
          Написать
        </a>
      </div>

      <div>
        <label htmlFor="">Моя почта:</label>
        <a
          href="mailto:vavilovila22@icloud.com?subject=Заказ&body=Здравствуйте!"
          target="_blank"
          rel="noopener noreferrer"
          className="links-wrappers contacts-links"
        >
          Написать на почту
        </a>
      </div>
    </div>
  );
}
