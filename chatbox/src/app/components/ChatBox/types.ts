export enum MessageType {
    EXCHANGE_MENU = 'EXCHANGE_MENU',
    STOCK_MENU = 'STOCK_MENU',
    STOCK_INFO = 'STOCK_INFO',
    TEXT = 'TEXT',
}

export enum MessageAuthor {
    BOT = 'BOT',
    USER = 'USER',
}

export type Message = {
    content: string;
    author: MessageAuthor;
    type: MessageType;
    options: {
        content: string;
        code: string;
    }[];
}

export const DEFAULT_MESSAGES: Message[] = [
    {
        content: `Hello! Welcome to LSEG. I'm here to help you.`,
        author: MessageAuthor.BOT,
        type: MessageType.TEXT,
        options: [],
    },
    {
        content: `Please select a Stock Exchange`,
        author: MessageAuthor.BOT,
        type: MessageType.EXCHANGE_MENU,
        options: [
            {
                content: 'London Stock Exchange',
                code: 'LSE',
            },
            {
                content: 'New York Stock Exchange',
                code: 'NYSE',
            },
            {
                content: 'NASDAQ Stock Exchange',
                code: 'HKSE',
            },
        ],
    }
]