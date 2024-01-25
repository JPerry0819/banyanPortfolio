import React, { useRef, useEffect } from 'react';
import '../../assets/css/landing.css';

const SphereWords = () => {
    const sphereRef = useRef(null);


    useEffect(() => {
        const sphere = sphereRef.current;
        const words = sphere.querySelectorAll('.word');
        const radius = 215;
        let angle = 0;

        const updatePosition = () => {
            words.forEach((word, index) => {
                const x = radius * Math.sin(angle + index * ((2 * Math.PI) / words.length));
                const z = radius * Math.cos(angle + index * ((2 * Math.PI) / words.length));
                word.style.transform = `translate3d(${x}px, 0, ${z}px)`;
            });
            angle += 0.01;
            requestAnimationFrame(updatePosition);
        };

        updatePosition();
    }, []);

    return (
        <div className='sphere-words' ref={sphereRef}>


            <div className="word" >*</div>
            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>J</div>
            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>E</div>
            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>S</div>
            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>S</div>
            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>I</div>
            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>C</div>
            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>A</div>


            <div className="word">*</div>


            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>B</div>
            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>R</div>
            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>U</div>
            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>N</div>
            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>E</div>
            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>R</div>




            <div className="word" >*</div>
            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>W</div>
            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>E</div>
            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>B</div>
            <div className="word" >*</div>
            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>D</div>
            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>E</div>
            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>V</div>
            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>E</div>
            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>L</div>
            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>O</div>
            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>P</div>
            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>E</div>
            <div className="word" style={{ color: 'white', textShadow: '1px 1px 9px  #b847ba', fontSize: "20px" }}>R</div>

        </div >
    );
};

export default SphereWords;