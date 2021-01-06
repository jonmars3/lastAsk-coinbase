const CoinbasePro = require('coinbase-pro');
const publicClient = new CoinbasePro.PublicClient();

global.lowest_ask = Number.MAX_SAFE_INTEGER;
global.last_ask = 0;

setInterval(() => {
    publicClient
    .getProductOrderBook('BTC-EUR')
    .then(data => {
        try {
            current_ask = data.asks[0][0]
            if (lowest_ask > current_ask) {
                console.clear();
                lowest_ask = current_ask
                console.log("Lowest Sell: ", lowest_ask);
                console.log("Last Lowest Sell: ", last_ask);
            }
            if (last_ask != current_ask) {
                console.clear();
                last_ask = current_ask;
                console.log("Lowest Sell: ", lowest_ask);
                console.log("Last Lowest Sell: ", last_ask);
            }
        } catch (error) {
            console.log("error");
        }
    });
}, 100);
