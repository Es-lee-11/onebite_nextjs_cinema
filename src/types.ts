//영화 데이터를 위한 별도의 타입 지정

export interface MovieData {
    id:number;
    title : string;
    subTitle : string;
    description : string;
    releaseDate : string;
    company : string;
    genres : string[];
    runtime : number;
    posterImgUrl : string;
}