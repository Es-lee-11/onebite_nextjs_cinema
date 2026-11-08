import type { MovieData } from "@/types";
import Link from "next/link";
import style from "./movie-item.module.css"


export default function MovieItem({
    id,
    posterImgUrl, } : MovieData) {

    return (
    
    <div className={style.container}>
        <Link href={`/cinema/${id}`}>
            <img src={posterImgUrl} />
        </Link>
    </div>

    )

    }
    