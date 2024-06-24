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
import NextLink from 'next/link'

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
function handler(link: string) {
    router.push(link);
}


    return (
        <div>
            <h1>これはHOMEPAGEです！</h1>
        <button onClick={()=>handler('./top/countup/')}>START</button>
        </div>
    );
}