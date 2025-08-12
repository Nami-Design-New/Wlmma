import { useState } from "react";

export default function SideBar() {
  const [chats] = useState([
    {
      id: 1,
      name: "John Doe",
      user_image: "https://randomuser.me/api/portraits/men/1.jpg",
      lastMessage: "Hello, how are you?",
      time: "10:00 AM",
    },
    {
      id: 2,
      name: "Jane Doe",
      user_image: "https://randomuser.me/api/portraits/men/2.jpg",
      lastMessage: "Hello, how are you?",
      time: "10:00 AM",
    },
    {
      id: 3,
      name: "Jane Doe",
      user_image: "https://randomuser.me/api/portraits/men/3.jpg",
      lastMessage: "Hello, how are you?",
      time: "10:00 AM",
    },
    {
      id: 4,
      name: "Jane Doe",
      user_image: "https://randomuser.me/api/portraits/men/4.jpg",
      lastMessage: "Hello, how are you?",
      time: "10:00 AM",
    },
    {
      id: 5,
      name: "Jane Doe",
      user_image: "https://randomuser.me/api/portraits/men/5.jpg",
      lastMessage: "Hello, how are you?",
      time: "10:00 AM",
    },
    {
      id: 6,
      name: "Jane Doe",
      user_image: "https://randomuser.me/api/portraits/men/6.jpg",
      lastMessage: "Hello, how are you?",
      time: "10:00 AM",
    },
  ]);

  return (
    <aside className="chat_sidebar">
      <div className="cards">
        {chats?.map((chat) => (
          <div className="chat_card">
            <div className="img">
              <img
                src={chat?.user_image}
                alt={chat?.name}
                loading="lazy"
                onError={(e) =>
                  (e.target.src = "/images/icons/user_default.png")
                }
              />
            </div>
            <span className="name_span">{chat?.name}</span>
            <div className="content">
              <h6>{chat?.name}</h6>
              <p>{chat?.lastMessage}</p>
              <span className="time">{chat?.time}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
