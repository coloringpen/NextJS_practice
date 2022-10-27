// import Head from 'next/head';
import Seo from '../component/Seo';
import { useEffect, useState } from 'react';

const API_KEY = 'bf000fbbd92413ffdbe279ce45cde39c';

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      // const json = await response.json(); 위의 변수 이름이 response로, 이 줄의 내용을 윗 변수에 적용시켜 코드 길이를 save함
      // console.log(data); data 변수를 콘솔에 찍어서 본 결과로 result로 구조분해할당으로 받을 것으로 변경

      setMovies(results);
    })();
  }, []);
  return (
    <>
      <div>
        {/* <Head>
          <title>Home | Next Movies</title>
        </Head> 얘를 페이지마다 복붙할 필요없이 공통적인 부분은 컴포넌트를 따로 만들어두고 적용하는 방식으로 만들기*/}
        <Seo title="Home" />
        {!movies && <h4>Loading...</h4>}
        {movies?.map((movie) => (
          <div className="movie" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        ))}
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }
          .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          }
          .movie:hover img {
            transform: scale(1.05) translateY(-10px);
          }
          .movie h4 {
            font-size: 18px;
            text-align: center;
          }
        `}</style>
      </div>
    </>
  );
}
