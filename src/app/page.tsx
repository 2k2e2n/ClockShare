import type { Metadata } from 'next'
import Image from "next/image";
import { io } from 'socket.io-client';

export const metadata:Metadata = {
  title: 'HELLO NEXT.JS'
}

export default function Page() {
  return (
    <div>
        <h1>HelloNext.js</h1>

        <h1>Socket.io Ping-Pong</h1>
            <button id="pingButton">Send Ping</button>
            <ul id="messages"></ul>


    </div>
  );
}
