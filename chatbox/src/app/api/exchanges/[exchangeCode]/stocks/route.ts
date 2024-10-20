import { getStockDataJson } from "../../getExchangeDataJson";
import { Stock } from "../../types";
import { exchangeSelector } from "./exchangeSelector";

export async function GET(request: Request, { params }: { params: { exchangeCode: string } }) {

    const exchangeCode = params.exchangeCode;
    
    let exchange;
    try {

        const stockDataJson = await getStockDataJson(request);
        exchange = exchangeSelector(stockDataJson, exchangeCode);

    } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        return new Response( JSON.stringify({error: errorMessage}), {
            headers: { "content-type": "application/json" },
            status: 500,
        });
    }

    const stocks = exchange.topStocks.map((stock: Stock) => {
        return {
            code: stock.code,
            stockName: stock.stockName,
        }
    });

    return new Response( JSON.stringify({data: stocks}), {
        headers: { "content-type": "application/json" },
        status: 200,
    });
}