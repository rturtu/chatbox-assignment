import { Stock } from '@/app/api/exchanges/types';
import { Message, MessageAuthor, MessageType } from '../types';

export const getStocks = async (exchangeCode?: string) => {
    const result = await fetch(`/api/exchanges/${exchangeCode}/stocks`);
    return result;
}

export const getStocksMessage = async (exchangeCode?: string):Promise<Message> => {
    const stocks = await getStocks(exchangeCode);
    const stocksData = await stocks.json();
    const message = {
        content: `Please select a stock`,
        type: MessageType.STOCK_MENU,
        author: MessageAuthor.BOT,
        options: stocksData.data.map((stock: Stock) => {
            return {
                content: stock.stockName,
                exchangeCode: exchangeCode,
                stockCode: stock.code,
            }
        }),
    };
    return message;
}