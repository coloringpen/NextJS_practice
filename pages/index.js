// import Head from 'next/head';
import Seo from '../component/Seo';

export default function Home() {
  return (
    <>
      <div>
        {/* <Head>
          <title>Home | Next Movies</title>
        </Head> 얘를 페이지마다 복붙할 필요없이 공통적인 부분은 컴포넌트를 따로 만들어두고 적용하는 방식으로 만들기*/}
        <Seo title="Home" />
        <h1 className="active">Hello</h1>
      </div>
    </>
  );
}
