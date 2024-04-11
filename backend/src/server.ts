import { Server } from 'socket.io';
import axios from "axios";

interface PriceBitcoin {
    mins: number,
    price: string,
    closeTime: number,
}

const io = new Server({
    cors: {
        origin: '*'
    }
});

io.on('connection', (socket) => {
    console.log(`user connected`);

    socket.on('disconnect', () => {
        console.log(`user disconnected`)
    })

})

setInterval(async () => {
    const response = await axios.get<PriceBitcoin>('https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT');
    const price_response = response.data;
    io.emit(`price`, price_response)
}, 1000)

io.listen(3001);