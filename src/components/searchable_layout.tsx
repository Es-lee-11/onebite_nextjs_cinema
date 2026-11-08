
import style from "./searchable_layout.module.css"

import { ReactNode } from "react"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";



export default function SearchableLayout ({children} : {children:ReactNode}) {

    

    // next/router에서 useRouter 훅을 불러옴
    const router = useRouter();

    // useState 훅을 사용하여 검색어를 입력받으면 search 스테이트를 업데이트
    const [search, setSearch] = useState("");


    // useRouter를 통해 얻어온 router 객체 안의 query 안의 q 값을 가져와서 q 변수에 할당
    // 단일 검색어 문자열로 사용하기 위해 as string으로 형변환(이 값은 무조건 문자열(string) 타입이야)
    const q = router.query.q as string;


    //q 값이 변경되었을 때 search 스테이트를 q 값으로 업데이트
    //setSearch(q || "") : q 값이 있으면 search의 상태를 q 값으로, 없으면 빈 값("")으로 업데이트
    //[q] : q가 변했을 때만 실행
    useEffect(()=>{
        setSearch(q || "");
    },[q]);


    // input의 값이 변경될 때 실행되는 함수
    // 입력받은 값을 setSearch 함수를 사용하여 search 스테이트를 업데이트
    const onChangeSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
       setSearch(e.target.value);
    };


    //onsubmit() : 검색 버튼을 클릭했을 때 실행되는 함수
    // if (!search) : 검색어가 비어있으면(false) 아무것도 안하고 리턴
    // q === search : 검색어가 이미 검색어와 같으면(true) 아무것도 안하고 리턴
    const onSubmit = () => {
        if (!search || q === search ) return;
        router.push(`/search?q=${search}`)
    }
    

    //검색어 입력 시 enter키를 누르면 onSubmit 함수 실행
    const onKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
        onSubmit();
    }
    };


    return (
        <div>
            <div className={style.searchbar_container}>
            <input value={search} onChange={onChangeSearch} onKeyDown={onKeyDown} placeholder="검색어를 입력하세요"></input>
            <button onClick={onSubmit}>검색</button>
            </div>
            {children}
        </div>
    )
}