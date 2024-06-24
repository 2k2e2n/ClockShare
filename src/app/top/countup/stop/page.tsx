/*
  #####   ######    #####   ######
 ##   ##  # ## #   ##   ##   ##  ##
 #          ##     ##   ##   ##  ##
  #####     ##     ##   ##   #####
      ##    ##     ##   ##   ##
 ##   ##    ##     ##   ##   ##
  #####    ####     #####   ####
*/
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";



export default function Page() {
    // tsを書く欄
    let [timeSec, setTimeSec] = useState(30);
    let lasttimeSec: number = 30;
    //timeSec=>時間を管理する変数
    //setTimeSec=>時間を毎秒更新するための変数

    useEffect(() => {
        //最初のみ実行
        console.log("loaded!");
        setTimeSec(lasttimeSec);     //カウントダウンの時間
        const intervalId = window.setInterval(countup, 1000);  //１秒に１回のみ実行
        return () => clearInterval(intervalId);  // クリーンアップ
    }, []);

    function countup() {
        //１秒づつカウントアップ
        setTimeSec((prevTimeSec) => {
            if(prevTimeSec <= 0) {
                return prevTimeSec = 0;
            } else {
                console.log('time:' + (prevTimeSec - 1));
                return prevTimeSec - 1;
            }

        });
    }


    //ジャンプ
    const router = useRouter();
    function resumebtn(link: string) {
        router.push(link);
    }

    return (
        <div>
            <h1>top/countup/stop</h1>
            <h1>タイマーストップ！</h1>
            <h1>{timeSec}</h1>
            <button  onClick={() =>{resumebtn('../countup')}}>RESUME</button>
        </div>
    );
}