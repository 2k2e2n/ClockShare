'use client';
import { useEffect, useState } from 'react';



export default function Page() {
    // tsを書く欄
    let [timeSec, setTimeSec] = useState(0);
    //timeSec=>時間を管理する変数
    //setTimeSec=>時間を毎秒更新するための変数

    useEffect(() => {
        //最初のみ実行
        console.log("loaded!");
        setTimeSec(0);
        const intervalId = window.setInterval(countup, 1000);  //１秒に１回のみ実行
        return () => clearInterval(intervalId);  // クリーンアップ
    }, []);

    function countup() {
        //１秒づつカウントアップ
        setTimeSec((prevTimeSec) => {
            console.log('time:' + (prevTimeSec + 1));
            return prevTimeSec + 1;
        });
    }

    function stopbtn() {

    }

    return (
        <div>
            <h1>ここはSTOPページです！！！</h1>
            <button  onClick={() =>{stopbtn()}}>STOP</button>
        </div>
    );
}