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
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Clock from '@/components/Clock';



export default function Page() {
    let [time, settime] = useState(30);          //タイマー


    let [resttime, setresttime] = useState<number>(10);  //タイマー

    useEffect(() => {
        let localKey : number = Number(getlocalKey('time'));
        settime(localKey);
        const intervalId = window.setInterval(countdown, 1000);  //１秒に１回実行
        return () => clearInterval(intervalId);  // クリーンアップ
    }, []);

    function countdown() {
        setresttime((resttime) => {
            if(resttime <=  0) {
                resttime = 0;
            } if(resttime == 1) {
                setTimeout(function() {
                    toast(
                        '休憩が終わりました！！！勉強しよう！'
                    );
                }, 2000);
                
            } else {
                resttime = resttime - 1;
            } 
            return resttime;
        });



    }
    /*
    const newTime = resttime;
    if(resttime > 0) {
        resttime = resttime - 1;
        if(resttime == 1) {
            setTimeout(function() {
                toast(
                    '休憩が終わりました！！！勉強しよう！'
                );
            }, 2000);
        }
    } else {
        resttime = 0;
    }
    setresttime(resttime);
*/

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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <h1 className="text-6xl">top/countup/rest</h1>
            <h1>休憩時間です！</h1>
            <h1 className="text-4xl flex justify-center mt-4">
                time: <Clock time={time} />
            </h1>
            <h1 className="text-6xl flex justify-center mt-4">
                Resttime:<Clock time={resttime} />
            </h1>
            <div className="flex justify-center items-center gap-16 pt-16 mr-32 ml-32">
            <button onClick={() =>{resumebtn('../countup')}} className="defaultbtn">RESUME</button>

            </div>
            
        </div>
    );
}