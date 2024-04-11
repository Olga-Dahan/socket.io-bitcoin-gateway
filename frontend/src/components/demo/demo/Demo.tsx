import { Socket, io } from "socket.io-client";
import "./Demo.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import axios from "axios";

function Demo(): JSX.Element {

    const [price, setPrice] = useState<string>('');


    useEffect(() => {
        const serverUrl = process.env.IO_SERVER || 'http://localhost:3001';
        const socket = io(serverUrl);


        socket.on('price', ({price}) => {
            setPrice(price!);
        })

    }, [])




    return (
        <div className="Demo">
            <h1>The Bitcoin gateway</h1>
            <div>
                {price}
            </div>
        </div>
    );
}

export default Demo;
