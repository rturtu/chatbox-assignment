import { getStockDataJson } from "../../../getExchangeDataJson";
import { exchangeSelector } from "../exchangeSelector";
import { stockSelector } from "./stockSelector";

export async function GET(request: Request, { params }: { params: { exchangeCode: string; stockCode: string; } }) {

    const exchangeCode = params.exchangeCode;
    const stockCode = params.stockCode;
    
    let stock;
    try {
        
        const stockDataJson = await getStockDataJson(request);
        const exchange = exchangeSelector(stockDataJson, exchangeCode);
        stock = stockSelector(exchange, stockCode);

    } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        return new Response( JSON.stringify({error: errorMessage}), {
            headers: { "content-type": "application/json" },
            status: 500,
        });
    }

    return new Response( JSON.stringify({data: stock}), {
        headers: { "content-type": "application/json" },
        status: 200,
    });
}