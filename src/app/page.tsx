'use client';
import Image from "next/image";
import { io } from 'socket.io-client';
import { useState } from 'react';

export default function Page() {
    // tsを書く欄

    let [number, numberset] = useState(0);
    function handleClick() {
        console.log("increment like count");
        console.log(number);
        number = number+1;

    }

  return (
    <div>
	  <button onClick={() =>{numberset(number + 1)}}>Like</button>
      <h1>{number}</h1>
    </div>

  );
}