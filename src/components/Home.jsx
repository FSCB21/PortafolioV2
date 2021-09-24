import React, { useEffect } from 'react'

import gsap from 'gsap'
import Rellax from 'rellax';

const Home = (props) => {
    
            /* HOME */ 
            useEffect(() => {
                gsap.from('.home__title', {opacity:0, duration: 2, delay: .6, y: 25, ease:'expo.out'});
                gsap.from('.home__subtitle',{opacity:0, duration: 2, delay: .8 , y: 25, ease:'expo.out'});
                gsap.from('.home__scroll', {opacity:0, duration: 2, delay: 1, y: 25, ease:'expo.out'});

                /*Rellax*/
                new Rellax(".parallax");
                
            });

    return (
            
            <div className="home" id="I">
                <div className="parallax home__parallax home__parallax-img1" data-rellax-speed="-9"></div>
                <div className="parallax home__parallax home__parallax-img2" data-rellax-speed="-7"></div>
                <div className="parallax home__parallax home__parallax-img3" data-rellax-speed="-6"></div>
                <div className="parallax home__parallax home__parallax-img4" data-rellax-speed="-3"></div>

                <h1 className="parallax home__title" data-rellax-speed="-6" data-rellax-percentage="0.6">{props.Texto1}</h1>
                <span className="parallax home__subtitle" data-rellax-speed="-5" data-rellax-percentage="0.5">{props.Texto2}</span> 

                <div className="home__scroll">
                    <a href="#S1"><i className='bx bx-mouse'></i></a>
                 </div>
            </div>

                

    )
}

export default Home
