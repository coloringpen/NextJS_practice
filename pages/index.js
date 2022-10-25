import { useState } from 'react';
import NavBar from '../component/NavBar';

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <NavBar />
      <div>
        <h1>Hello {counter}</h1>
        <button onClick={() => setCounter((prev) => (prev += 1))}>+</button>
      </div>
    </>
  );
}
