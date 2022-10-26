import Layout from '../component/Layout';
// import NavBar from '../component/NavBar'; 필요없어짐! Layout에서 가져오므로!
import '../styles/globals.css'; // 오직 _app.js에서만 임포트 할 수 있는 전역css

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
