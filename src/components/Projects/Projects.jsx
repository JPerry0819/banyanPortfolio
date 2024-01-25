import React, {useState} from 'react';
import '../../assets/css/projects.css'
import codeher from '../../assets/images/codeherBusiness.png'
import codeherCafe from '../../assets/images/codeherCafe.png'
import c4c from '../../assets/images/c4c.png'
import clearBlue from '../../assets/images/clearBlue.png'
import gotAutism from '../../assets/images/gotAutism.png'
import jbwebsite from '../../assets/images/jbwebsite.png'
import OtherNav from '../nav/OtherNav';

const Projects = () => {
   const [showModal, setShowModal] = useState(false);
   const handleModal = (e) => {
    e.preventDefault();
    setShowModal(!showModal)
   }
     
  return (
    <>
     <OtherNav />
      <div className="projects-container">
      <button className="codeherModal" onClick={handleModal}>Information
      {showModal && <div>MERN Stack project with Redux</div>}
       <div className="project-tile top-left">
        <img src={codeher} alt="CodeHer Project" />
      </div>
      </button>  
      <button className="codeherCafeModal" onClick={handleModal}>Information
      {showModal && <div>MERN Stack project with Redux</div>}
      <div className="project-tile top-right">
        <img src={codeherCafe} alt="CodeHer Cafe Project" />
      </div>
      </button>
      <button className="c4cModal" onClick={handleModal}>Information
      {showModal && <div>MERN Stack project with Redux</div>}
      <div className="project-tile bottom-left">
        <img src={c4c} alt="C4C Project" />
      </div>
      </button>
      <button className="clearBlueModal" onClick={handleModal}>Information
      {showModal && <div>Frontend project using HTML, CSS, Bootstrap, jQuery, JavaScript</div>}
      <div className="project-tile bottom-right">
        <img src={clearBlue} alt="Clear Blue Project" />
      </div>
      </button>
      <button className="gotAutismModal" onClick={handleModal}>Information
      {showModal && <div>Frontend project using HTML, CSS, Bootstrap, jQuery, JavaScript</div>}
      <div className="project-tile middle">
        <img src={gotAutism} alt="Got Autism Project" />
      </div>
      </button>
      <button className="jbwebsiteModal" onClick={handleModal}>Information
      {showModal && <div>MERN Stack development with Redux</div>}
      <div className="project-tile middle">
        <img src={jbwebsite} alt="Got Autism Project" />
      </div>
      </button>
    </div>
   

    </>
  )
}

export default Projects;
