import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();
  //   console.log(router);
  return (
    // <nav className={styles.nav}>
    <nav>
      {/* <a href="/">Home</a>  We shouldn't use a tag to navigate the homepage*/}
      <Link href="/">
        {/* <a style={{ color: router.pathname === '/' ? 'red' : 'blue' }}>Home</a> */}
        {/* <a
          className={`${styles.link} ${
            router.pathname === '/' ? styles.active : ''
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="about">
        <a
          className={[
            styles.link,
            router.pathname === '/about' ? styles.active : '',
          ].join(' ')}
        >
          About
        </a> */}

        <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
    //   There is a specific component we have to use in NextJS to navigate
  );
}
