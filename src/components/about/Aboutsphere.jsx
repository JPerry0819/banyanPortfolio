import React, {useEffect, useRef} from 'react'
import backend from '../../assets/images/back.jfif'
import frontend from '../../assets/images/frontend.jfif'
import leadership from '../../assets/images/leadership.jfif'
import teams from "../../assets/images/teams.jfif"
import problem from "../../assets/images/problemsolve.jfif"

const Aboutsphere = () => {

    const sphereRef2 = useRef(null);

  useEffect(() => {
    const sphere = sphereRef2.current;
    const words = sphere.querySelectorAll('.wordNext');
    const radius = 600;
    let angle = .009;

    const updatePosition = () => {
      words.forEach((word, index) => {
        const x = radius * Math.sin(angle + index * ((2 * Math.PI) / words.length));
        const z = radius * Math.cos(angle + index * ((2 * Math.PI) / words.length));
        word.style.transform = `translate3d(${x}px, 0, ${z}px)`;
      });
      angle += 0.004;
      requestAnimationFrame(updatePosition);
    };

    updatePosition();
  }, []);
  return (
    <div className="sphere-words2" ref={sphereRef2}>
          <div className="wordNext"></div>   
           <div className="wordNext"></div>
    <div className="wordNext"><img style={{width: '400%'}} className='sphereImg2' alt="sphere" src={backend} /></div>
    <div className="wordNext"></div>
    <div className="wordNext"></div>
    <div className="wordNext"><img style={{width: '400%'}} className='sphereImg2' alt="sphere" src={frontend} /></div>
        <div className="wordNext"></div>
        <div className="wordNext"></div>
   <div className="wordNext"><img style={{width: '400%'}} className='sphereImg2' alt="sphere" src={leadership} /></div>
    
    <div className="wordNext"></div>
    <div className="wordNext"></div>
      <div className="wordNext"><img style={{width: '400%'}} className='sphereImg2' alt="sphere" src={teams} /></div>

    
      <div className="wordNext"></div>
      <div className="wordNext"></div>
      <div className="wordNext"><img style={{width: '400%'}} className='sphereImg2' alt="sphere" src={problem} /></div>


  </div>
  )
}

export default Aboutsphere
