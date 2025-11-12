import "./App.css";
import UserCard from "./components/userCard";
import Header from "./components/Header";
import Counter from "./components/Counter";
import { useState } from "react";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

function App() {
  const [theme, setTheme] = useState("light");
  const [currentView, setCurrentView] = useState("team"); // состояние для текущего вида

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Функция для навигации
  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  // Функция для рендеринга контента в зависимости от currentView
  const renderContent = () => {
    switch (currentView) {
      case "counter":
        return <Counter theme={theme} />;
      case "todo":
        return <TodoList theme={theme} />;
      case "form":
        return <Form theme={theme} />;
      case "team":
      default:
        return (
          <>
            <h1>Наша удивительная команда 👥</h1>
            <div className="user_container">
              <UserCard
                name="Oliver"
                age={38}
                occupation="Frontend"
                isOnline={true}
                rating={3}
                theme={theme}
              />
              <UserCard
                name="Claudia"
                age={25}
                occupation="Designer"
                isOnline={false}
                rating={5}
                theme={theme}
              />
              <UserCard
                name="Donald"
                age={50}
                occupation="Backend"
                isOnline={false}
                rating={4}
                theme={theme}
              />
              <UserCard
                name="Mark"
                age={43}
                occupation="Creative"
                isOnline={false}
                rating={3}
                theme={theme}
              />
            </div>
          </>
        );
    }
  };

  return (
    <div className={`app ${theme}`}>
      {/* Передаем функцию навигации в Header */}
      <Header theme={theme} toggleTheme={toggleTheme} onNavigate={handleNavigate} />
      
      {/* Рендерим контент в зависимости от currentView */}
      {renderContent()}
    </div>
  );
}

export default App;