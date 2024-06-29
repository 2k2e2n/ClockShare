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
import 'react-circular-progressbar/dist/styles.css';
import Lottie from "lottie-react";
import loadinganimation from "../../../../public/running-Anim2.json";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Clock from "../../../components/Clock"
import Toast from '@/components/Toast';


export default function Page() {
    let [time, settime] = useState<number>(0);  //タイマー



    useEffect(() => {
        //最初のみ実行
        console.log("loaded!");
        settime(Number(getlocalKey('time')));    //キーを取得する
        const intervalId = window.setInterval(countup, 1000);  //１秒に１回のみ実行
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
            //const newTime = time + 1;
            localStorage.setItem('time', String(time));
            return time = time + 1;
        });
    }



    //リンクのジャンプ
    const router = useRouter();
    function handler(link: string) {
        router.push(link);
    }

    //トーストの表示
    const toastnotify = () => toast(
        <span>time:<Clock time={time}/></span>
    );

    return (
        <div>
            <Toast />

            <h1 className="flex justify-center text-8xl" >
                <Clock time={time} />
            </h1>

            <div className='flex justify-center'>
                <Lottie  style={{ height:'100px', width: '100px'}} animationData={loadinganimation} loop={true}  autoplay={true} />
            </div>
            <div className="flex justify-center items-center gap-16 pt-4 mr-32 ml-32">
                <button onClick={toastnotify} className="defaultbtn">
                    test toast
                </button>
                <button onClick={()=>handler('./countup/stop')} className="defaultbtn">
                    STOP
                </button>
                <button onClick={()=>handler('./countup/rest')} className="defaultbtn">
                    REST
                </button>
                <button onClick={()=>handler('../top')} className="defaultbtn">
                    END
                </button>
            </div>
            <div className='text-3xl pt-8'>
                <div className='mt-4'>CPU1: 00:00:00</div>
                <div className='mt-4'>CPU2: 00:00:00</div>
                <div className='mt-4'>CPU3: 00:00:00</div>
            </div>
        </div>
    );
}
