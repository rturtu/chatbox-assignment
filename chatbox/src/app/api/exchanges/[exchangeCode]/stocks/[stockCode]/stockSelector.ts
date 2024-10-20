export const stockSelector = (exchange: any, stockCode: string) => {
    const stock = exchange.topStocks.find((exchange: any) => exchange.code === stockCode);
    if(!exchange) {
        throw new Error('Stock not found');
    }
    return stock;
};