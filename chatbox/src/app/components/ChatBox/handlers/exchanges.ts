import { Exchange } from '@/app/api/exchanges/types';
import { Message, MessageAuthor, MessageType } from '../types';

export const getExchanges = async () => {
    const result = await fetch('/api/exchanges');
    return result;
}

export const getExchangesMessage = async ():Promise<Message> => {
    const exchanges = await getExchanges();
    const exchangesData = await exchanges.json();
    const message = {
        content: `Please select a Stock Exchange`,
        type: MessageType.EXCHANGE_MENU,
        author: MessageAuthor.BOT,
        options: exchangesData.data.map((exchange: Exchange) => ({
            content: exchange.stockExchange,
            exchangeCode: exchange.code,
        })),
    };
    return message;
}