import { Slider } from './Slider';
import { Content } from './Content';
import { Footer } from './Footer';
import { Navbar_r } from '../component/Navbar';


export function Home() {
    return (
        
    <>
    <Navbar_r />
      <Slider/>
      {/* <p>HOME</p> */}
      <Content/>
      <Footer/>
        </>
    );
}