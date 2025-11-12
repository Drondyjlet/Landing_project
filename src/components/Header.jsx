import "./Header.css";

function Header({ theme, toggleTheme, onNavigate }) {

  const headerClassName = `header_container ${theme === 'dark' ? 'header_dark' : ''}`;

  // Обработчик для ссылок
  const handleLinkClick = (e, view) => {
    e.preventDefault(); // предотвращаем переход по ссылке
    onNavigate(view);
  };

  return (
    <div className={headerClassName}>
      <ul className="header_list">
        <li className="header_title">
          <h2>React Учебный сайт</h2>
        </li>
        <li className="header_list_element">
          <a 
            className="header_link" 
            href="#team"
            onClick={(e) => handleLinkClick(e, "team")}
          >
            Команда
          </a>
        </li>
        <li className="header_list_element">
          <a 
            className="header_link" 
            href="#counter"
            onClick={(e) => handleLinkClick(e, "counter")}
          >
            Счетчик
          </a>
        </li>
        <li className="header_list_element">
          <a 
            className="header_link" 
            href="#todo"
            onClick={(e) => handleLinkClick(e, "todo")}
          >
            Список дел
          </a>
        </li>
        <li className="header_list_element">
          <a 
            className="header_link" 
            href="#form"
            onClick={(e) => handleLinkClick(e, "form")}
          >
            Форма
          </a>
        </li>
        <li className="header_list_element">
          <button 
            className="theme-toggle-btn"
            onClick={toggleTheme}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </li>
      </ul>
      <form action=""></form>
    </div>
  );
}

export default Header;

