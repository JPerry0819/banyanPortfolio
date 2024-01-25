import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, 
  faCss3, 
  faSass, 
  faJs, 
  faReact, 
  faNode, 

  faGit, 
  faGithub, 

 

} from '@fortawesome/free-brands-svg-icons';

import "../../assets/css/TextShpere.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Express",
        "MongoDB",
        "NodeJS",
        "Mongoose",
        "Jquery",
        "ES6",
        "GIT",
        "GITHUB",
        "Agile",
        "Scrum"
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options, );
    };
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
      <div className="diamond-icons">
      <FontAwesomeIcon icon={faHtml5} className="icon" />
      <FontAwesomeIcon icon={faCss3} className="icon" />
      <FontAwesomeIcon icon={faSass} className="icon" />
      <FontAwesomeIcon icon={faJs} className="icon" />
      <FontAwesomeIcon icon={faReact} className="icon" />
      <FontAwesomeIcon icon={faNode} className="icon" />
    
{/* <FontAwesomeIcon icon={faCubeStacked} className="icon"/> */}
      <FontAwesomeIcon icon={faGit} className="icon" />
      <FontAwesomeIcon icon={faGithub} className="icon" />
      {/* <FontAwesomeIcon icon={faToolbox} className="icon" />
      <FontAwesomeIcon icon={faBalanceScale} className="icon" /> */}
      {/* <FontAwesomeIcon icon={faTasks} className="icon" /> */}
    </div>
    </>
  );
};

export default TextShpere;
