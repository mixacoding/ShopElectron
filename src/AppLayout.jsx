import { Outlet } from 'react-router-dom';
import './App.css'

//components
import HeaderComponent from './components/HeaderComponent';
import NavbarComponent from './components/NavbarComponent';

function AppLayout() {
  

  return (
    <div className=''>
      {/* Header info*/}
      <HeaderComponent />
      {/* Navbar component*/}
      <NavbarComponent />
      
      <Outlet />
      {/*Footer component*/}
    </div>
  )
}

export default AppLayout;
