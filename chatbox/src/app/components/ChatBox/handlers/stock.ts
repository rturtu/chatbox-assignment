import { Message, MessageAuthor, MessageOptionType, MessageType } from '../types';

export const getStock = async (exchangeCode?: string, stockCode?: string) => {
    const result = await fetch(`/api/exchanges/${exchangeCode}/stocks/${stockCode}`);
    return result;
}

export const getStockMessage = async (exchangeCode?: string, stockCode?: string):Promise<Message> => {
    const stock = await getStock(exchangeCode, stockCode);
    const stockData = await stock.json();
    const message = {
        content: `Stock price of ${stockData.data.stockName} is ${stockData.data.price.toFixed(2)}. Please select an option`,
        type: MessageType.STOCK_INFO,
        author: MessageAuthor.BOT,
        options: [
            {
                content: 'Go back',
                exchangeCode: exchangeCode,
                type: MessageOptionType.BACK,
            },
            {
                content: 'Go home',
                type: MessageOptionType.HOME,
            }
        ],
    };
    return message;
}