import "./Form.css";
import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Функция валидации
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Имя обязательно";
    } else if (formData.name.length < 2) {
      newErrors.name = "Имя должно быть не менее 2 символов";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email обязателен";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Некорректный email";
    }

    if (!formData.password) {
      newErrors.password = "Пароль обязателен";
    } else if (formData.password.length < 6) {
      newErrors.password = "Пароль должен быть не менее 6 символов";
    }

    return newErrors;
  };

  // Обработчик изменения полей
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Валидация при изменении (опционально)
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      // Имитация отправки на сервер
      setTimeout(() => {
        alert("Форма успешно отправлена!");
        setIsSubmitting(false);
        setFormData({ name: "", email: "", password: "" });
      }, 1000);
    } else {
      setErrors(formErrors);
    }
  };

  // Проверка валидности формы
  const isFormValid =
    Object.keys(errors).length === 0 &&
    formData.name &&
    formData.email &&
    formData.password;

  return (
    <div className="registration-form">
      <h2>Регистрация</h2>
      <form className="form_container" onSubmit={handleSubmit}>
        {/* Поле имени */}
        <div className="form-group">
          <label>Имя: &nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        {/* Поле email */}
        <div className="form-group">
          <label>Email:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        {/* Поле пароля */}
        <div className="form-group">
          <label>Пароль:  </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "error" : ""}
          />
          {errors.password && (
            <span className="error-text">{errors.password}</span>
          )}
        </div>

        <button className="submit_btn" type="submit" disabled={!isFormValid || isSubmitting}>
          {isSubmitting ? "Отправка..." : "Зарегистрироваться"}
        </button>
      </form>
    </div>
  );
}

export default Form;

