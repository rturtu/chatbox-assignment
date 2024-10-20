import { Exchange } from "../../types";

export const exchangeSelector = (exchangeList: Exchange[], exchangeCode: string) => {
    const exchange = exchangeList.find((exchange: Exchange) => exchange.code === exchangeCode);
    if(!exchange) {
        throw new Error('Exchange not found');
    }
    return exchange;
};