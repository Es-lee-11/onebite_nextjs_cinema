import SearchableLayout from "@/components/searchable_layout";

import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      
    </>
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