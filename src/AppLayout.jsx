import { Outlet } from 'react-router-dom';
import './App.css'
import axios from 'axios';

//components
import HeaderComponent from './components/HeaderComponent';
import NavbarComponent from './components/NavbarComponent';
import CategoryComponent from './components/CategoryComponent';

axios.defaults.baseURL = 'https://dummyjson.com';

function AppLayout() {

  return (
    <div className=''>
      {/* Header info*/}
      <HeaderComponent />
      {/* Navbar component*/}
      <NavbarComponent />
      {/*Category*/}
      <CategoryComponent />
      <Outlet />
      {/*Footer component*/}
    </div>
  )
}

export default AppLayout;
