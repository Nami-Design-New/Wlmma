import ChatRoom from "../components/dashboard/chat/ChatRoom";
import SideBar from "../components/dashboard/chat/SideBar";

export default function Support() {
  return (
    <section className="chats_section">
      <div className="page_head">
        <h1>Support Message</h1>
        <p>View and manage support messages</p>
      </div>

      <div className="chat_wrapper">
          <SideBar />
          <ChatRoom />
      </div>
    </section>
  );
}
