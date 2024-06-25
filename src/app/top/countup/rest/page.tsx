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
    let [timeSec, setTimeSec] = useState(0);
    let lasttimeSec: number = 30;
    //timeSec=>時間を管理する変数
    //setTimeSec=>時間を毎秒更新するための変数

    useEffect(() => {
        //最初のみ実行
        console.log("loaded!");
        setTimeSec(lasttimeSec);     //カウントダウンの時間
        const intervalId = window.setInterval(countdown, 1000);  //１秒に１回のみ実行
        return () => clearInterval(intervalId);  // クリーンアップ
    }, []);

    function countdown() {

        //１秒づつカウントダウン
        setTimeSec((prevTimeSec) => {
            if(prevTimeSec <= 0) {
                return prevTimeSec = 0;
            } else {
                console.log('time:' + (prevTimeSec - 1));
                return prevTimeSec - 1;
            }
        });

    }

    //URLにジャンプ
    const router = useRouter();
    function resumebtn(link: string) {
        router.push(link);
    }

    return (
        <div>
            <h1 className="text-6xl ...">top/countup/rest</h1>
            <h1>休憩時間です！</h1>
            <h1>{timeSec}</h1>
            <button onClick={() =>{resumebtn('../countup')}} className="defaultbtn">RESUME</button>
        </div>
    );
}