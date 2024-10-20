I chose Next.JS as the framework for this assignment because it's easy to build both backend and frontend in the same TypeScript project. It's also very easy to deploy.


# Deployment
[https://chatbox-assignment-amber.vercel.app/](https://chatbox-assignment-amber.vercel.app/)


# Run locally
1. Clone repo
2. Go to /chatbox directory
3. `npm install`
4. `npm run dev`
5. Application should be available on localhost:3000

# API 

[/exchanges](https://github.com/rturtu/chatbox-assignment/blob/main/chatbox/src/app/api/exchanges/route.ts) - get all stock exchanges 

[/exchanges/\[exchangeCode\]/stocks](https://github.com/rturtu/chatbox-assignment/blob/main/chatbox/src/app/api/exchanges/%5BexchangeCode%5D/stocks/route.ts) - get stocks listed in exchangeCode

[/exchanges/\[exchangeCode\]/stocks/\[stockCode\]](https://github.com/rturtu/chatbox-assignment/blob/main/chatbox/src/app/api/exchanges/%5BexchangeCode%5D/stocks/%5BstockCode%5D/route.ts) - get stockCode price

# Frontend component

[Chat Widget](https://github.com/rturtu/chatbox-assignment/blob/main/chatbox/src/app/components/ChatBox/index.tsx)


# Details
 - ChatBot can be opened by the Chat Widget in the bottor right of the screen
 - I served the stock data json as a static file so the API can consume it.
 - The API requests the json (equivalent to DB call) and filters the requested data
 - The frontend requests data from backend according to the options selected by the user.
 - I have not used any libraries, just the default Next.JS dependencies

