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
import NextLink from 'next/link'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Progress from 'react-circle-progress-bar'



export default function Page() {
    let [time, settime] = useState<number>(0);  //タイマー
    let [timeS, settimeS] = useState<number>(0); //秒
    let [timeM, settimeM] = useState<number>(0); //分
    let [timeH, settimeH] = useState<number>(0); //時
    const SecondTick: number = 1 * 1000;    //1 x 1000マイクロ秒


    useEffect(() => {
        //最初のみ実行
        console.log("loaded!");
        settime(Number(getlocalKey('time')));    //キーを取得する
        const intervalId = window.setInterval(countup, SecondTick);  //１秒に１回のみ実行
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
            const newTime = time + 1;
            settimeS(newTime % 60);
            settimeM(Math.floor(newTime / 60) % 60);
            settimeH(Math.floor(newTime / (60*60)) % 24);
            //console.warn({ timeH: Math.floor(newTime / (60*60)) % 24, timeM: Math.floor(newTime / 60) % 60, timeS: newTime % 60 });
            localStorage.setItem('time', String(time));
            return newTime;
        });


    }

    //0:4:20->00:04:20  桁数をあわせる
    function padTime(value: number): string {
        return value.toString().padStart(2, '0');
    }

    //リンクのジャンプ
    const router = useRouter();
    function handler(link: string) {
        router.push(link);
    }

    return (
        <div >
            <h1 className="text-6xl ...">top/countup</h1>
            <h1>タイマー</h1>
            <h1 className="text-9xl w-100 h-20 flex items-center justify-center">
                {`${padTime(timeH)}:${padTime(timeM)}:${padTime(timeS)}`}
            </h1>




            <div className="w-64 h-80 container mx-auto mt-8">
            <Progress progress={75} />
                <CircularProgressbar
                value={timeS}
                maxValue={60}
                text={`${timeS}sec`}
                    styles={buildStyles({
                        rotation: 0,     //パスとトレイルの回転、回転数（0-1）
                        strokeLinecap: 'round',      //端に丸い角を使用するか平らな角を使用するか - 「butt」または「round」を使用できます
                        textSize: '16px',   // Text size
                        pathTransitionDuration: 0.9,    // アニメーションが 1 つのパーセンテージから別のパーセンテージに変化するまでの時間 (秒単位)
                        pathTransition: 'true',     //パス遷移をより詳細に指定したり、完全に削除したりすることができます
                        //pathColor: `rgba(62, 152, 199, ${timeM / 100})`,
                        pathColor: `#6fdaca`,   //円弧の色
                        textColor: '#6e65a1',   //文字色
                        trailColor: '#eee7dc',  //円の色
                        backgroundColor: '#eee7dc',
                })}
            />
            </div>

            <div className="flex justify-center items-center gap-16 pt-16 mr-32 ml-32">
                <button onClick={()=>handler('./countup/stop')} className="defaultbtn">
                    STOP
                </button>
                <button onClick={()=>handler('./countup/rest')} className="defaultbtn">
                    REST
                </button>
                <button onClick={()=>handler('../../top')} className="defaultbtn">
                    END
                </button>
            </div>
        </div>
    );
}
