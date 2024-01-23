import React, { useState } from 'react'
import './DashbordAdmin.css';
import NavbarAdmin from '../../Components/Navbars/NavbarAdmin/NavbarAdmin';
import SideBars from '../../Components/SideBars/SideBars';


export default function DashbordAdmin() {
  // l'etat pour verifier si le sidebar est ouvert ou pas
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // function pour changer l'eta
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <div className='maincontent'>
        <div className='contentsidebar'>
          <SideBars isOpen={isSidebarOpen} />
        </div>
        <div className='secondecontent'>
         <div className='navbaradmincontent'>
         <NavbarAdmin onMenuClick={toggleSidebar} />
         </div>
         <div className='contenueprincipal'>
         <table>
          <th>HHHH</th>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
         </table>
         </div>


        </div>

      </div>
    </div>
  )
}
