'use client';
import type { Metadata } from 'next'
import Image from "next/image";
import { useRouter } from "next/navigation";



export const metadata:Metadata = {
  title: '404-not found'
}

export default function Page() {
    const dir = String("/ClockShare");    //本番環境で画像を読み込めるようにする
    console.log("dir:",{dir});
    //ジャンプ
    const router = useRouter();
    function resumebtn(link: string) {
        router.push(link);
    }


  return (
    <div>
        <h1>404 not found</h1>
        <h1>ページが見つかりません</h1>

        <button  onClick={() =>{resumebtn('./top')}}>ホームに戻る</button>
         <Image
            src={dir+"/Image1.jpg"}
            height={271 *1.5}
            width={480 *1.5}
            alt="image"
        />
    </div>
  );
}