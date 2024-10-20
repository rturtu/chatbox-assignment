export type Exchange = {
    code: string;
    stockExchange: string;
    topStocks: Stock[];
}

export type Stock = {
    code: string;
    stockName: string;
    price: number;
}