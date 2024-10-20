import { Exchange, Stock } from "../../../types";

export const stockSelector = (exchange: Exchange, stockCode: string) => {
    const stock = exchange.topStocks.find((stock: Stock) => stock.code === stockCode);
    if(!exchange) {
        throw new Error('Stock not found');
    }
    return stock;
};