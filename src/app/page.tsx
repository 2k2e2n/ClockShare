'use client';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from "next/navigation";
import NextLink from 'next/link';
import Lottie from "lottie-react";
import loadinganimation from "../../public/testAnim2.json";

export default function Page() {
    // tsを書く欄
    //timeSec=>時間を管理する変数
    //setTimeSec=>時間を毎秒更新するための変数

    useEffect(() => {
        //最初のみ実行
        console.log("loaded!");
        //handler('./top')
    }, []);

/********************* */

//リンクのジャンプ
const router = useRouter();
function handler(link: string) {
    router.push(link);    //ページを遷移
}


    return (
        <div>
            <h1>Loading...</h1>
        <button onClick={()=>handler('./top')} className="defaultbtn">gotohomepage</button>
        <Lottie animationData={loadinganimation} loop={true}  autoplay={true} />
        </div>
    );
}