export const getStockDataJson = async (request: Request) => {
    const host = request.headers.get('host');
    const protocol = request.headers.get('x-forwarded-proto');
    const dataUrl = `${protocol}://${host}/stock-data.json`;

    const stockData = await fetch( dataUrl, {
        headers: {
            'Content-Type': 'application/json',
        },
    } );

    if(!stockData.ok) {
        throw new Error('Could not get data');
    }

    let stockDataList;
    try {
        stockDataList = await stockData.json();
    } catch (error) {
        const errorMessage = (error as Error).message;
        throw new Error(errorMessage ?? 'Could not parse data');
    }
    return stockDataList;
}