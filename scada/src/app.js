import { Route, Routes } from 'react-router-dom';
import { About } from './component/About';
import { Contact } from './component/Contact';
import { RTI } from './component/RTI';
import { Home } from './component/Home';
import { Sign_In } from './component/Sign_In';
import { New_conn } from './component/New_conn';
import { New_conn_form } from './component/New_conn_form';
import { Sign_Up } from './component/Sign_Up';
import { For_pass } from './component/For_pass';
import { Chng_pass } from './component/Chng_pass';
import { Homee } from './component/admin/Homee';
import { Block } from './component/admin/Block';
import { Block_d } from './component/admin/Block_d';
import { Village } from './component/admin/Village';
import { Village_d } from './component/admin/Village_d';
import { District } from './component/admin/District';
import { Panchayat_d } from './component/admin/Panchayat_d';
import { Division_d } from './component/admin/Division_d';
import { Division} from './component/admin/Division';
import { Section_d } from './component/admin/Section_d';
import { Section} from './component/admin/Section';
import { Sub_Division_d } from './component/admin/Sub_Division_d';
import { Sub_Division} from './component/admin/Sub_Division';
import { Panchayat } from './component/admin/Panchayat';
import { District_d } from './component/admin/District_d';
import { Tariff } from './component/admin/Tariff';
import { Tariff_d } from './component/admin/Tariff_d';
import { Conn_type_d } from './component/admin/Conn_type_d';
import { Conn_type } from './component/admin/Conn_type';
import { User } from './component/admin/User';
import { User_d } from './component/admin/User_d';
import { Temp_app } from './component/admin/Temp_app';
import { Temp_app_d } from './component/admin/Temp_app_d';


import './app.css'


function App() {

  return (

    <div className='htmll'>
      {/* <div className='htmll' style={{ backgroundImage: `url(${process.env.PUBLIC_URL+'/slider/q1'})`}}> */}



      <Routes>


        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/rti' element={<RTI />} />
        <Route path='/new_conn' element={<New_conn />} />
        <Route path='/new_conn_form' element={< New_conn_form/>} />
        <Route path='/sign_in' element={<Sign_In />} />
        <Route path='/sign_up' element={<Sign_Up />} />
        <Route path='/for_pass' element={<For_pass />} />
        <Route path='/chng_pass' element={<Chng_pass />} />
        <Route path='/admin/block' element={<Block />} />
        <Route path='/admin/block_d' element={<Block_d />} />
        <Route path='/admin/district' element={<District />} />
        <Route path='/admin/district_d' element={<District_d />} />
        <Route path='/admin/division_d' element={<Division_d />} />
        <Route path='/admin/division' element={<Division />} />
        <Route path='/admin/sub_Division_d' element={<Sub_Division_d />} />
        <Route path='/admin/sub_division' element={<Sub_Division />} />
        <Route path='/admin/Panchayat_d' element={<Panchayat_d />} />
        <Route path='/admin/Panchayat' element={<Panchayat />} />
        <Route path='/admin' element={<Homee />} />
        <Route path='/admin/section' element={<Section />} />
        <Route path='/admin/section_d' element={<Section_d />} />
        <Route path='/admin/tariff' element={<Tariff />} />
        <Route path='/admin/tariff_d' element={<Tariff_d />} />
        <Route path='/admin/village' element={<Village />} />
        <Route path='/admin/village_d' element={<Village_d />} />
        <Route path='/admin/conn_type' element={<Conn_type />} />
        <Route path='/admin/conn_type_d' element={<Conn_type_d />} />
        <Route path='/admin/User' element={<User />} />
        <Route path='/admin/User_d' element={<User_d />} />
        <Route path='/admin/temp_app' element={<Temp_app />} />
        <Route path='/admin/temp_app_d' element={<Temp_app_d />} />






      </Routes>
    </div>
  )
}


export default App;