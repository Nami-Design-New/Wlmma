export default function ChatRoom() {
  const messages = [
    {
      type: "received",
      text: "Hey there! How are you doing today?",
      time: "10:30 AM",
    },
    {
      type: "sent",
      text: "I'm doing great, thanks for asking! How about you?",
      time: "10:31 AM",
    },
    {
      type: "received",
      text: "Pretty good! Just working on some new projects. Have you seen the latest updates?",
      time: "10:32 AM",
    },
    {
      type: "sent",
      text: "Yes, I've been checking them out. The new features look amazing!",
      time: "10:33 AM",
    },
    {
      type: "received",
      text: "I'm really excited! I can't wait to try them out.",
      time: "10:34 AM",
    },
    {
      type: "sent",
      text: "Same here! I'm looking forward to it.",
      time: "10:35 AM",
    },
  ];

  return (
    <div className="chat_room">
      <div className="chat_header">
        <div className="user">
          <div className="img">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="avatar"
              loading="lazy"
              onError={(e) => (e.target.src = "/images/icons/user_default.png")}
            />
          </div>
          <div className="content">
            <h6>Jane Doe</h6>
          </div>
        </div>
      </div>

      <div className="chat_container">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            <div className="content">
              <p>{msg.text}</p>
            </div>
            <span className="time">{msg.time}</span>
          </div>
        ))}
      </div>

      <form className="chat_form">
        <div className="input_field">
          <input
            type="text"
            className="text_input"
            placeholder="Type a message"
          />
        </div>

        <button aria-label="Submit" type="submit">
          <i className="fa-solid fa-paper-plane-top"></i>
        </button>
      </form>
    </div>
  );
}
