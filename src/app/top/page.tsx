/*
 ##
 ##
 ##
 ######    #####   ### ##    #####
 ##   ##  ##   ##  ## # ##  ##   ##
 ##   ##  ##   ##  ## # ##  #######
 ##   ##  ##   ##  ## # ##  ##
 ##   ##   #####   ##   ##   #####
*/
'use client';
import { useEffect, useState} from 'react';
import { useRouter } from "next/navigation";

export default function Page() {
    // tsを書く欄
    //timeSec=>時間を管理する変数
    //setTimeSec=>時間を毎秒更新するための変数

    useEffect(() => {
        //最初のみ実行
        console.log("loaded!");
    }, []);

    //リンクのジャンプ
    const router = useRouter();
    function handler1(link: string) {
        router.push(link);
    }

    function handler2(link: string) {
        try{
            localStorage.removeItem('time');
        } catch(err) {}
        router.push(link);
    }


    return (
        <div>
            <h1>HOMEPAGE！</h1>
            <p>タイマーを開始するには下のボタンを押してください</p>
        <button onClick={()=>handler1('./top/countup/')}>START</button>
        <button onClick={()=>handler2('./top/countup/')}>Reset and START</button>
        </div>
    );
}