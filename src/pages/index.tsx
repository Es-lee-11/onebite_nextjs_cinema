import { ReactNode } from "react";  

import SearchableLayout from "@/components/searchable_layout";
import movies from "../mock/dummy.json";
import MovieItem from "@/components/movie-item";

import style from "./index.module.css"

export default function Home() {
  return (
    <div>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.recommend_list}>
          {movies.map((movie)=>(<MovieItem key={movie.id} {...movie}/>))}
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화 </h3>       
        <div className={style.all_list}>
          {movies.map((movie)=>(<MovieItem key={movie.id} {...movie}/>))}
        </div>
      </section>
    </div>
  );
}


// 서치바가 있는 레이아웃 적용
Home.getLayout = (page:ReactNode) => {
  return (
    <SearchableLayout>
      {page}
    </SearchableLayout>
  )
}