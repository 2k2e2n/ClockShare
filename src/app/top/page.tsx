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
            <h1 className="text-6xl ...">HOMEPAGE！</h1>
            <p>タイマーを開始するには下のボタンを押してください</p>
        <button onClick={()=>handler1('./top/countup/')} className="relative h-12 overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 text-neutral-950 before:absolute before:bottom-0 before:left-0 before:block before:h-full before:w-full before:translate-y-full before:bg-neutral-100 before:transition-transform hover:before:translate-y-0"><span className="relative">START</span></button>
        <button onClick={()=>handler2('./top/countup/')} className="relative h-12 overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 text-neutral-950 before:absolute before:bottom-0 before:left-0 before:block before:h-full before:w-full before:translate-y-full before:bg-neutral-100 before:transition-transform hover:before:translate-y-0"><span className="relative">Reset and START</span></button>
        </div>
    );
}