'use client';
import React from "react";
import { Message, DEFAULT_MESSAGES } from "./types";
import { useSessionStorage } from "@/app/hooks/useSessionStorage";

const ChatBox = () => {

    const [open, setOpen] = React.useState(false);
    const [messages, setMessages] = useSessionStorage<Message[]>('messages', DEFAULT_MESSAGES);

    return (
        <div>
            <div onClick={() => setOpen(!open)} className="rounded-xl bg-sky-400 fixed bottom-8 right-8 p-4 cursor-pointer" >
                Chat
            </div>
            <div className={open ? 'rounded-t-md overflow-hidden flex flex-col w-screen h-screen fixed bottom-0 right-0 lg:w-[400px] lg:h-[600px] bg-white' : 'w-0 h-0 overflow-hidden'} >
                <div className="w-full bg-sky-800 flex place-content-between p-2" >
                    <span>LSEG chatbot</span>
                    <span className="cursor-pointer" onClick={() => setOpen(false)} >X</span>
                </div>
                <div className="grow overflow-auto" >
                    <div>
                        {messages.map((message, index) => {
                            return <div key={index} className={message.author === 'BOT' ? 'bg-sky-400 p-2 m-2 rounded-xl' : 'bg-slate-400 p-2 m-2 rounded-xl'} >
                                {message.content}
                                {message.options.map((option, index) => {
                                    return <div key={index} className="cursor-pointer text-black bg-sky-200 p-2 m-2 rounded-xl" >
                                        {option.content}
                                    </div>
                                })}
                            </div>
                        })}
                    </div>
                </div>
                <div className="w-full bg-slate-400 p-2" >
                    <span>Please select an option</span>
                </div>
            </div>
        </div>
    );
}

export default ChatBox;