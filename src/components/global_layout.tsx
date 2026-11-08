import {ReactNode} from "react";
import style from "./global_layout.module.css";
import Link from "next/link";


export default function GlobalLayout({children} : {children:ReactNode}) {
    return (
    <div className={style.container}>
    <header>
      <Link href={"/"}>
      <h1 className={style.header_text}>ONEBITE CINEMA</h1>
      </Link>
    </header>
    <main>
        {children}
    </main>
    <footer className={style.footer_text}>
        @ ES | NACHO
    </footer>
    </div>
    );
} 