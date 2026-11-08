import "@/styles/globals.css";
import GlobalLayout from "@/components/global_layout";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import {ReactNode} from "react";

//별도의 타입 nextPageWithLayout 지정 (getLayout 의 규칙 등록)
//nextPageWithLayout라는 새로운 규칙을 만들고, Next.js 가 제공하는 기본규칙인 NextPage에 내가 원하는 규칙(getLayout)을 더함
//getLayout? : ?는 '선택사항' 이라는 뜻, getLayout을 가진 페이지, 가지지 않은 페이지 모두 포용할 수 있도록 함
//(page:ReactNode) => ReactNode; : 매개변수(page)와 반환값(return)의 타입 모두 ReactNode임을 명시
type nextPageWithLayout = NextPage & {
 getLayout?: (page:ReactNode) => ReactNode; 
};


// App({ Component, pageProps } :  App에 들어오는 기본 인자값들 
//AppProps(Next.js가 기본적으로 제공하는 타입)에 nextPageWithLayout 규칙을 더하는(&) 방식으로 확장
export default function App({ Component, pageProps }: AppProps & {Component:nextPageWithLayout}) {
  
  
  // getLayout이라는 메서드가 추가되지 않은 페이지의 경우는 별도의 레이아웃이 적용되지 않도록 예외처리
  // getLayout이 있으면 반환, 없으면 기본값 반환
  const getLayout = Component.getLayout ?? ((page:ReactNode) => page);
  

  return (
    <GlobalLayout>
    {getLayout(<Component {...pageProps} />)}
    </GlobalLayout>
  );
}
