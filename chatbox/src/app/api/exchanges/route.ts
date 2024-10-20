import { getStockDataJson } from "./getExchangeDataJson";

export async function GET(request: Request) {

    let stockDataJson;
    try {
        stockDataJson = await getStockDataJson(request);
    } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        return new Response( JSON.stringify({error: errorMessage}), {
            headers: { "content-type": "application/json" },
            status: 500,
        });
    }

    const stockExchangesFiltered = stockDataJson.map((stock: any) => {
        return {
            code: stock.code,
            stockExchange: stock.stockExchange,
        }
    });

    return new Response( JSON.stringify({data: stockExchangesFiltered}), {
        headers: { "content-type": "application/json" },
        status: 200,
    });
}