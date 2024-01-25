import React from 'react'
import './SideBars.css';
import profile from '../../Assets/profile.png'
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faFile, faGear, faUser, faSignOutAlt, faHouse, faGauge, faLayerGroup, faHeart } from '@fortawesome/free-solid-svg-icons';

export default function SideBars({ isOpen }) {
  return (
    <div style={{ display: isOpen ? 'block' : 'none' }}>
       <div className='contentOneSidebar'>
         <div className='contentimage'>
           <div className='d-flex justify-content-center '> <Image src={profile} alt=''  id='image-contenu'/></div>
            <p className='text-center'>Moussa Basse</p>
            <hr />
         </div>
         <div>
          <div className='contentlink mt-4 ' id='contentlink'><FontAwesomeIcon icon={faGauge} className='ms-2' /><Link to={'/'} className='linkcontent'><span className='linktext text-light ' id='lktinext'>DASHBORD</span></Link></div>
          <div className='contentlink  mt-4'> <FontAwesomeIcon icon={faUser} className='ms-2' /><Link to={'/gestionuser'} className='linkcontent'><span className='linktext' >Gestion Utilisateurs</span></Link></div>
          <div className='contentlink mt-4'> <FontAwesomeIcon icon={faHouse} className='ms-2' /><Link to={'/gestionmaison'} className='linkcontent'><span className='linktext'>Gestion Maisons</span></Link></div>
          <div className='contentlink mt-4'> <FontAwesomeIcon icon={faHouse} className='ms-2' /><Link to={'/gestionterrain'} className='linkcontent'><span className='linktext'>Gestion Terrains</span></Link></div>
          <div className='contentlink mt-4'> <FontAwesomeIcon icon={faGear} className='ms-2' /><Link to={'/gestionservices'} className='linkcontent'><span className='linktext'>Gestion Services</span></Link></div>
          <div className='contentlink mt-4'> <FontAwesomeIcon icon={faComment} className='ms-2' /><Link to={'/gestioncommenentaire'} className='linkcontent'><span className='linktext'>Gestion Commentaire</span></Link></div>
          <div className='contentlink mt-4'> <FontAwesomeIcon icon={faFile} className='ms-2' /><Link to={'/gestionarticle'} className='linkcontent'><span className='linktext'>Gestion Articles</span></Link></div>
          <div className='contentlink mt-4'> <FontAwesomeIcon icon={faLayerGroup} className='ms-2' /><Link to={'/gestionarticle'} className='linkcontent'><span className='linktext'>Gestion Catégorie</span></Link></div>
          <div className='contentlink mt-4'> <FontAwesomeIcon icon={faHeart} className='ms-2' /><Link to={'/gestionarticle'} className='linkcontent'><span className='linktext'>Gestion Favorie</span></Link></div>
          
          
          
         </div>
         <div className="mainContentBottom">
    <div className='d-flex  justify-content-center'>
    <Button className='logout' id='logout'><FontAwesomeIcon icon={faSignOutAlt}  className='logouticon ms-2 '/></Button>
    </div>
  </div>
  </div>
  {/* <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    The current link item
  </a>
  <a href="#" class="list-group-item list-group-item-action">A second link item</a>
  <a href="#" class="list-group-item list-group-item-action">A third link item</a>
  <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
  <a class="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
</div> */}
</div>
  )
}
