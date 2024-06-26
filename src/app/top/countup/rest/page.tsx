/*
######   #######   #####   ########
 ##  ##   ##  ##  ##   ##  ## ## ##
 ##  ##   ##      ##          ##
 #####    ####     #####      ##
 ##  ##   ##           ##     ##
 ##  ##   ##  ##  ##   ##     ##
#### ### #######   #####     ####
*/
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";


export default function Page() {
    let [time, settime] = useState(30);          //タイマー
    let [timeS, settimeS] = useState<number>(0); //秒
    let [timeM, settimeM] = useState<number>(0); //分
    let [timeH, settimeH] = useState<number>(0); //時

    let [resttime, setresttime] = useState(10);          //タイマー
    let [resttimeS, setresttimeS] = useState<number>(0); //秒
    let [resttimeM, setresttimeM] = useState<number>(0); //分
    let [resttimeH, setresttimeH] = useState<number>(0); //時

    useEffect(() => {
        let localKey : number = Number(getlocalKey('time'));
        settime(localKey);
        settimeS(localKey % 60);
        settimeM(Math.floor(localKey / 60) % 60);
        settimeH(Math.floor(localKey / (60*60)) % 24);
        const intervalId = window.setInterval(countdown, 1000);  //１秒に１回実行
        return () => clearInterval(intervalId);  // クリーンアップ
    }, []);

    function countdown() {
        setresttime((resttime) => {
            const newTime = resttime;
            if(resttime > 0) {
                resttime = resttime - 1;
            } else {
                resttime = 0;
            }
            setresttime(resttime);
            setresttimeS(resttime % 60);
            setresttimeM(Math.floor(resttime / 60) % 60);
            setresttimeH(Math.floor(resttime / (60*60)) % 24);
            return newTime;
        });
    }


    //今の時間の取得
    function getlocalKey(key: string): string {
        try {
            const storageValue = localStorage.getItem(key);
            if (storageValue) {
                console.log('Key acquisition successful');
                return storageValue;
            } else {
                console.warn('Failed to get key, setting to 0');
                localStorage.setItem(key, "0");
                return "0";
            }
        } catch (err) {
            console.error(err);
            localStorage.setItem(key, "0");
            return "0";
        }
    }

    //0:4:20->00:04:20  桁数をあわせる
    function padTime(value: number): string {
        return value.toString().padStart(2, '0');
    }

    //URLにジャンプ
    const router = useRouter();
    function resumebtn(link: string) {
        router.push(link);
    }

    return (
        <div>
            <h1 className="text-6xl">top/countup/rest</h1>
            <h1>休憩時間です！</h1>
            <h1 className="text-4xl flex justify-center mt-4">{`${padTime(timeH)}:${padTime(timeM)}:${padTime(timeS)}`}</h1>
            <h1 className="text-4xl flex justify-center mt-4">
                {`${padTime(resttimeH)}:${padTime(resttimeM)}:${padTime(resttimeS)}`}
            </h1>
            <button onClick={() =>{resumebtn('../countup')}} className="defaultbtn">RESUME</button>
        </div>
    );
}