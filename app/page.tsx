import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="container py-5">
      <main className="text-center">
        <h1 className="mb-4">535240093 - Christoforus Viencent Hendrianus</h1>

        <h2 className="mb-3">Mini Web Application - Cat Meme Pedia</h2>

        <Link href="/memes" className="btn btn-primary btn-lg mt-3">
          Go to Cat Meme Page
        </Link>
        
      </main>
    </div>  )
    ;
}
