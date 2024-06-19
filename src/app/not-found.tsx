import type { Metadata } from 'next'
import Image from "next/image";

export const metadata:Metadata = {
  title: '404-not found'
}

export default function Page() {
  return (
    <div>
        <h1>404 not found</h1>
        <h1>ページが見つかりません</h1>


         <Image
            src="/Image1.jpg"
            height={271 *1.5}
            width={480 *1.5}
            alt="image"
        />
    </div>
  );
}