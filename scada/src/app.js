import { Route, Routes } from 'react-router-dom';
import { About } from './component/About';
import { Contact } from './component/Contact';
import { Navbar_r } from './component/Navbar';
import { Services } from './component/Services';
import { Home } from './component/Home';
import { Sign_In } from './component/Sign_In';
import { New_conn } from './component/New_conn';
import { Sign_Up } from './component/Sign_Up';
import { For_pass } from './component/For_pass';
import { Chng_pass } from './component/Chng_pass';

import './app.css'



function App() {

  return (

    <div className='htmll'>

      <Navbar_r />

      <Routes>


        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/new_conn' element={<New_conn />} />
        <Route path='/sign_in' element={<Sign_In />} />
        <Route path='/sign_up' element={<Sign_Up />} />
        <Route path='/for_pass' element={<For_pass />} />
        <Route path='/chng_pass' element={<Chng_pass />} />

      </Routes>
    </div>
  )
}


export default App;