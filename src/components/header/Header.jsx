import "./Header.css"

export default function Header() {
  return (
    <div className="boxes-wrapper header-wrapper">
      <h1>Code_Base</h1>
      <p className="header-description">
        Личный веб-портал, где собрана вся информация обо мне как разработчике.
        Здесь можно найти:  
        <strong> проекты, навыки, опыт, контакты</strong> и краткая информация обо мне.
        Ознакомиться с моими работами, изучить технологии, которыми я владею, и связаться со мной напрямую.
      </p>
    </div>
  )
}