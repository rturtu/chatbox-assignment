import { ChatBox } from "./components/ChatBox";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen" >
      <h1 className="text-3xl" >Chatbox - Razvan Turturica</h1>
      <ChatBox />
    </div>
  );
}
