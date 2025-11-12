function ThemeSwitcher({ theme, toggleTheme }) {
  return (
    <div className="theme_container" style={{
      backgroundColor: theme === 'light' ? 'white' : '#333',
      color: theme === 'light' ? 'black' : 'white',
      textAlign: 'end'
    }}>
      <button onClick={toggleTheme}>
        Переключить на {theme === 'light' ? 'темную' : 'светлую'} тему
      </button>
    </div>
  );
}

export default ThemeSwitcher;