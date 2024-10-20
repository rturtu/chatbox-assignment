'use client';
import React, { useEffect } from "react";
import { Message, DEFAULT_MESSAGES, MessageType, MessageAuthor, MessageOption, MessageOptionType } from "./types";
import { useSessionStorage } from "@/app/hooks/useSessionStorage";
import { getExchangesMessage, getStockMessage, getStocksMessage } from "./handlers";

const ChatBox = () => {

    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [messages, setMessages] = useSessionStorage<Message[]>('messages', DEFAULT_MESSAGES);

    const messageBoxRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Add the first message with the stock exchanges
        // On localhost this gets executed twice because of the nextjs setup
        if (messages.length > 1) {
            setLoading(false);
            return;
        }

        getExchangesMessage().then((message) => {
            setMessages((messages) => [...messages, message]);
            console.log('ajunge aici');
            setLoading(false);
        });
    }, []);

    const handleOptionClick = async (message: Message, option: MessageOption) => {

        if (loading) return;

        setMessages(messages => [...messages, {
            content: option.content,
            type: MessageType.TEXT,
            author: MessageAuthor.USER,
            options: [],
        }]);

        try {
            setLoading(true);
            let botMessage: Message;
            switch (message.type) {
                case MessageType.EXCHANGE_MENU:
                    botMessage = await getStocksMessage(option.exchangeCode);
                    break;
                case MessageType.STOCK_MENU:
                    botMessage = await getStockMessage(option.exchangeCode, option.stockCode);
                    break;
                case MessageType.STOCK_INFO:
                    if (option.type === MessageOptionType.BACK) {
                        botMessage = await getStocksMessage(option.exchangeCode);
                    } else {
                        botMessage = await getExchangesMessage();
                    }
                    break;
            }
            setMessages((messages) => [...messages, botMessage]);
            setLoading(false);
        } catch (error: unknown) {
            setLoading(false);
            setMessages(messages => [...messages, {
                content: (error as Error).message ?? 'Something went wrong',
                type: MessageType.TEXT,
                author: MessageAuthor.BOT,
                options: [],
            }]);
        }
    }

    useEffect(() => {
        if (messageBoxRef.current) {
            messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
        }
    }, [messages, open]);

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
                <div className="grow overflow-auto" ref={messageBoxRef} >
                    {messages.map((message, index) => {
                        return <div key={index} className={message.author === 'BOT' ? 'bg-sky-400 p-2 m-2 rounded-xl mr-20 rounded-bl-none' : 'bg-slate-400 p-2 m-2 rounded-xl ml-20 rounded-br-none'} >
                            {message.content}
                            {message.options?.map((option, index) => {
                                return <div onClick={() => handleOptionClick(message, option)} key={index} className="cursor-pointer text-black bg-sky-200 p-2 m-2 rounded-xl" >
                                    {option.content}
                                </div>
                            })}
                        </div>
                    })}
                    {loading && <div className="w-full bg-slate-400 p-2" >Loading...</div>}
                </div>
                <div className="w-full bg-slate-400 p-2" >
                    <span>Please select an option</span>
                </div>
            </div>
        </div>
    );
}

export default ChatBox;