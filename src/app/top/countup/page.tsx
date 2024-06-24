/*
 ######   #####   ##   ##  ##   ##  #######
###      ##   ##  ##   ##  ###  ##     ##
##       ##   ##  ##   ##  ## # ##     ##
###      ##   ##  ##   ##  ##  ###     ##
 ######   #####    #####   ##   ##     ##
*/
'use client';
import { useEffect, useState} from 'react';
import { useRouter } from "next/navigation";
import NextLink from 'next/link'


export default function Page() {
    let [time, settime] = useState<number>(0);  //タイマー
    let [timeS, settimeS] = useState<number>(0); //秒
    let [timeM, settimeM] = useState<number>(0); //分
    let [timeH, settimeH] = useState<number>(0); //時
    const SecondTick: number = 1 * 1000;    //1 x 1000マイクロ秒


    useEffect(() => {
        //最初のみ実行
        console.log("loaded!");
        settime(Number(getlocalKey('time')));    //キーを取得する
        const intervalId = window.setInterval(countup, SecondTick);  //１秒に１回のみ実行
        return () => clearInterval(intervalId);  // クリーンアップ
    }, []);

    //キーの取得
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


    function countup() {
        //１秒づつカウントアップ
        settime((time) => {
            const newTime = time + 1;
            settimeS(newTime % 60);
            settimeM(Math.floor(newTime / 60) % 60);
            settimeH(Math.floor(newTime / (60*60)) % 24);
            //console.warn({ timeH: Math.floor(newTime / (60*60)) % 24, timeM: Math.floor(newTime / 60) % 60, timeS: newTime % 60 });
            localStorage.setItem('time', String(time));
            return newTime;
        });


    }

    //0:4:20->00:04:20  桁数をあわせる
    function padTime(value: number): string {
        return value.toString().padStart(2, '0');
    }

    //リンクのジャンプ
    const router = useRouter();
    function handler(link: string) {
        router.push(link);
    }
    return (
        <div>
            <h1 className="text-6xl ...">top/countup</h1>
            <h1>タイマー</h1>
            <h1 className="text-4xl ...">{`${padTime(timeH)}:${padTime(timeM)}:${padTime(timeS)}`}</h1>
        <button onClick={()=>handler('./countup/stop')} className="relative h-12 overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 text-neutral-950 before:absolute before:bottom-0 before:left-0 before:block before:h-full before:w-full before:translate-y-full before:bg-neutral-100 before:transition-transform hover:before:translate-y-0"><span className="relative">STOP</span></button>
        <button onClick={()=>handler('./countup/rest')} className="relative h-12 overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 text-neutral-950 before:absolute before:bottom-0 before:left-0 before:block before:h-full before:w-full before:translate-y-full before:bg-neutral-100 before:transition-transform hover:before:translate-y-0"><span className="relative">REST</span></button>
        <button onClick={()=>handler('../')} className="relative h-12 overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 text-neutral-950 before:absolute before:bottom-0 before:left-0 before:block before:h-full before:w-full before:translate-y-full before:bg-neutral-100 before:transition-transform hover:before:translate-y-0"><span className="relative">END</span></button>
        </div>
    );
}
