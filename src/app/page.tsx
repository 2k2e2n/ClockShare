import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
        <p>ハロー React!!</p>
        <h1>helloworld</h1>
        <Link href="/Test">GotoTestPage</Link>
    </div>

  );
}
