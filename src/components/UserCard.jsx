import "./UserCard.css";

function UserCard({ 
  name, 
  age, 
  occupation, 
  isOnline = false, 
  rating = 0,
  theme = "light"
}) {
  const handleContact = () => {
    alert(`Contacting ${name}...`);
  };

  const cardClassName = `user_card ${theme === 'dark' ? 'user_card-dark' : ''}`;
  

  return (
    <div className={cardClassName}>
      <img
        src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`}
        alt="User avatar"
        className="user-avatar"
      />
      <span className={`status ${isOnline ? "online" : "offline"}`}></span>
      <div className="user_info">
        <h2 className="user_name">{name}</h2>
        <p className="user_age">Возраст: {age}</p>
        <p className="user_occupation">Занятие: {occupation}</p>
      </div>
      <div className="rating">{"⭐".repeat(rating)}</div>
      <button className={`contact-btn ${theme === 'dark' ? 'contact-btn-dark' : ''}`} onClick={handleContact}>
        Contact
      </button>
    </div>
  );
}

export default UserCard;
