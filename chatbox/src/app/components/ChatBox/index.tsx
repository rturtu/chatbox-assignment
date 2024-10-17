'use client';
import React from "react";
import { ChatWindow } from "./ChatWindow";

export const ChatBox = () => {

    const [open, setOpen] = React.useState(false);

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

                </div>
                <div className="w-full bg-slate-400 p-2" >
                    <span>Please select an option</span>
                </div>
            </div>
        </div>
    );
}