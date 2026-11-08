import { ReactNode } from "react";

import style from "./index.module.css"

import movies from "../../mock/dummy.json"
import MovieItem from "@/components/movie-item"




import SearchableLayout from "@/components/searchable_layout";


export default function Page() {
  return (
    <div className={style.search_list}>
      {movies.map((movie)=>(<MovieItem key={movie.id}{...movie}/>))}
    </div>
  )
}


// 서치바가 있는 레이아웃 적용
Page.getLayout = (page: ReactNode) => {
 return (
  <SearchableLayout>{page}</SearchableLayout>
 );
};