import { Route, Routes } from 'react-router-dom';
import { About } from './component/About';
import { Contact } from './component/Contact';
import { Navbar_r } from './component/Navbar';
import { Services } from './component/Services';
import { Home } from './component/Home';
import {New_conn} from './component/New_conn';
import './app.css'



function App() {

  return (

    <div className='dddd'>

      <Navbar_r/>

      <Routes>


        <Route exact path='/' element={<Home/>} end />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/new_conn' element={<New_conn />} />

      </Routes>
    </div>
  )
}


export default App;