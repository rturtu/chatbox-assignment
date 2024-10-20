I chose Next.JS as the framework for this assignment because it's easy to build both backend and frontend in the same TypeScript project. It's also very easy to deploy.


# Deployment
[https://chatbox-assignment-amber.vercel.app/](https://chatbox-assignment-amber.vercel.app/)


# API 

[/exchanges](https://github.com/rturtu/chatbox-assignment/blob/main/chatbox/src/app/api/exchanges/route.ts) - get all stock exchanges 

[/exchanges/\[exchangeCode\]/stocks](https://github.com/rturtu/chatbox-assignment/blob/main/chatbox/src/app/api/exchanges/%5BexchangeCode%5D/stocks/route.ts) - get stocks listed in exchangeCode

[/exchanges/\[exchangeCode\]/stocks/\[stockCode\]](https://github.com/rturtu/chatbox-assignment/blob/main/chatbox/src/app/api/exchanges/%5BexchangeCode%5D/stocks/%5BstockCode%5D/route.ts) - get stockCode price

# Frontend component

[Chat Widget](https://github.com/rturtu/chatbox-assignment/blob/main/chatbox/src/app/components/ChatBox/index.tsx)


# Details

1. I served the stock data json as a static file so the API can consume it.
2. The API requests the json (equivalent to DB call) and filters the requested data
3. The frontend requests data from backend according to the options selected by the user.
