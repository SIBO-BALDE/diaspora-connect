import React, { useState } from 'react'
import './DashbordAdmin.css';
import NavbarAdmin from '../../Components/Navbars/NavbarAdmin/NavbarAdmin';
import SideBars from '../../Components/SideBars/SideBars';
import { Image} from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
import Tableaux from '../Tableaux/Tableaux';
import profile from '../../fichiers/profile.png'
import Chart from '../../Components/Charts/Charts';



export default function DashbordAdmin() {
  // l'etat pour verifier si le sidebar est ouvert ou pas
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // function pour changer l'eta
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className='' >
      <div className='maincontent-dashbord-static'>
        <div className='contentsidebar'>
          <SideBars isOpen={isSidebarOpen} />
        </div>
        <div className='secondecontent '>
         <div className=''>
         <NavbarAdmin onMenuClick={toggleSidebar} />
         </div>
         <div className='contenueprincipal container mt-5'>
          <Tableaux />
          <div className='dashbord-content-main-one container' id='vv'>
              <div className='content-left-admin-dashbord'>
              <table className="table mb-5">
              <thead className="table-light" id='hearder-color'>
                <tr>
                <th>Profile</th>
                <th>Prenom</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Téléphone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Image src={profile} className='img-profile-tab-admin' /></td>
                  <td>Amady</td>
                  <td>Fall</td>
                  <td>bass@gmail.com</td>
                  <td>778529967</td>
                </tr>
                <tr>
                  <td><Image src={profile} className='img-profile-tab-admin' /></td>
                  <td>Moussa</td>
                  <td>Bass</td>
                  <td>bass@gmail.com</td>
                  <td>778529967</td>
                </tr>
    
              </tbody>
              </table>
                <div className='conten-admin-2'>
                <div className='title-progressbar-admin px-4 '><p>Progression des projets</p></div>
                <span>Pourcentage de complétion des demandes de papier administratifs</span>
                <div className="progress mt-4" role="progressbar" aria-label="Basic example" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar" id='progress-bar' style={{width:'98%', color:'white'}}>98%</div>
                </div>
                <span>Pourcentage de complétion des demandes de papier administratifs</span>
                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar" id='progress-bar' style={{width:'50%' ,color:'white'}}>50%</div>
                </div>
                </div>
              </div>
              <div className='content-diagramme-circulaire-right-conten-2'>
            <div className=''>
              <Chart />
              <p className='text-center mt-2 '>Nombre de projet de construction <br></br> terminé par rapport au projet total <br></br> 2023</p>
            </div>
           </div>
         </div>
         </div>

        </div>

      </div>
    </div>
  )
}
