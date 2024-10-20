

export async function GET(request: Request) {
    const host = request.headers.get('host');
    const protocol = request.headers.get('x-forwarded-proto');
    const dataUrl = `${protocol}://${host}/stock-data.json`;

    const stockData = await fetch( dataUrl, {
        headers: {
            'Content-Type': 'application/json',
        },
    } );

    if(!stockData.ok) {
        return new Response( JSON.stringify({code: 'Could not get data'}), {
            headers: { "content-type": "application/json" },
            status: 500,
        });
    }

    let stockDataList;
    try {
        stockDataList = await stockData.json();
    } catch (error) {
        return new Response( JSON.stringify({code: 'Could not parse data'}), {
            headers: { "content-type": "application/json" },
            status: 500,
        });
    }

    const stockDataListFiltered = stockDataList.map((stock: any) => {
        return {
            code: stock.code,
            name: stock.stockExchange,
        }
    });

    return new Response( JSON.stringify({data: stockDataListFiltered}), {
        headers: { "content-type": "application/json" },
        status: 200,
    });
}