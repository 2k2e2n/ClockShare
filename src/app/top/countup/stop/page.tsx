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
import Clock from '@/components/Clock';

export default function Page() {
    // tsを書く欄
    let [time, settime] = useState(30);          //タイマー


    //最初のみ実行
    useEffect(() => {
        let localKey : number = Number(getlocalKey('time'));
        settime(localKey);
    }, []);

    //0:4:20->00:04:20  桁数をあわせる
    function padTime(value: number): string {
        return value.toString().padStart(2, '0');
    }


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


    //リンクジャンプ
    const router = useRouter();
    function resumebtn(link: string) {
        router.push(link);
    }

    return (
        <div>
            <h1 className="text-6xl ...">top/countup/stop</h1>
            <h1>タイマーストップ！</h1>
            <div className="text-6xl w-100 h-20 flex items-center justify-center">
            time: <Clock time={time} />
            </div>
            <button onClick={() =>{resumebtn('../countup')}} className="defaultbtn"><span className="relative">RESUME</span></button>
        </div>
    );
}