export enum MessageType {
    EXCHANGE_MENU = 'EXCHANGE_MENU',
    STOCK_MENU = 'STOCK_MENU',
    STOCK_INFO = 'STOCK_INFO',
    TEXT = 'TEXT',
}

export enum MessageOptionType {
    BACK = 'BACK',
    HOME = 'HOME',
}

export enum MessageAuthor {
    BOT = 'BOT',
    USER = 'USER',
}

export type MessageOption = {
    content: string;
    exchangeCode?: string;
    stockCode?: string;
    type?: MessageOptionType;
}

export type Message = {
    content: string;
    author: MessageAuthor;
    type: MessageType;
    options?: MessageOption[];
}

export const DEFAULT_MESSAGES: Message[] = [
    {
        content: `Hello! Welcome to LSEG. I'm here to help you.`,
        author: MessageAuthor.BOT,
        type: MessageType.TEXT,
    }
]