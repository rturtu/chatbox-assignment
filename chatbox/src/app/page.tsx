'use client';
import dynamic from 'next/dynamic';
// lazy load the ChatBox component to allow sessionStorage to be used
const ChatBox = dynamic(() => import('@/app/components/ChatBox'), { ssr: false });

export default function Home() {

  return (
    <div className="flex items-center justify-center h-screen" >
      <h1 className="text-3xl" >Chatbox - Razvan Turturica</h1>
      <ChatBox />
    </div>
  );
}
