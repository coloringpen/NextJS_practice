import NavBar from '../component/NavBar';
import '../styles/globals.css'; // 오직 _app.js에서만 임포트 할 수 있는 전역css

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>
        {`
          a {
            color: white;
          }
        `}
      </style>
    </>
  );
}
