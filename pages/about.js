/* function Potato() {
  return 'about us';
} 

Error: The default export is not a React Component in page: "/about"
*/

import NavBar from '../component/NavBar';

export default function Potato() {
  return (
    <>
      <NavBar></NavBar>
      <div>about us</div>
    </>
  );
}
