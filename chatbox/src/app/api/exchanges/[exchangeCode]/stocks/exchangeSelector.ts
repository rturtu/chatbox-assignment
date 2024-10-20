export const exchangeSelector = (exchangeList: any[], exchangeCode: string) => {
    const exchange = exchangeList.find((exchange: any) => exchange.code === exchangeCode);
    if(!exchange) {
        throw new Error('Exchange not found');
    }
    return exchange;
};