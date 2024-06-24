'use client';
import { useEffect, useState} from 'react';
import { useRouter } from "next/navigation";
import NextLink from 'next/link'
import React from 'react';


export default function Page() {
    // tsを書く欄

    let [time, settime] = useState<number>(0);  //タイマー
    let [timeS, settimeS] = useState<number>(0); //秒
    let [timeM, settimeM] = useState<number>(0); //分
    let [timeH, settimeH] = useState<number>(0); //時
    const SecondTick: number = 1 * 1000;    //1 x 1000マイクロ秒

    useEffect(() => {
        //最初のみ実行
        console.log("loaded!");
        const intervalId = window.setInterval(countup, SecondTick);  //１秒に１回のみ実行
        return () => clearInterval(intervalId);  // クリーンアップ
    }, []);


    function countup() {
        //１秒づつカウントアップ
        settime((time) => {
            const newTime = time + 1;
            settimeS(newTime % 60);
            settimeM(Math.floor(newTime / 60) % 60);
             settimeH(Math.floor(newTime / (60*60)) % 24);
            //console.warn({ timeH: Math.floor(newTime / (60*60)) % 24, timeM: Math.floor(newTime / 60) % 60, timeS: newTime % 60 });
            return newTime;
        });
    }

    //0:4:20->00:04:20  桁数をあわせる
    function padTime(value: number): string {
        return value.toString().padStart(2, '0');
    }


/********************* */

//リンクのジャンプ
const router = useRouter();
function handler(link: string) {
    router.push(link);
}
    return (
        <div>
            <h1>ここはcountupです！</h1>
            <h1>{`${padTime(timeH)}:${padTime(timeM)}:${padTime(timeS)}`}</h1>
        <button onClick={()=>handler('./countup/stop')}>STOP</button>
        <button onClick={()=>handler('./countup/rest')}>REST</button>
        <button onClick={()=>handler(".//")}>END</button>
        <NextLink href=".//">../TOPPAGE</NextLink>
        </div>
    );
}
