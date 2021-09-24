import React, { useEffect } from 'react'
import Home from '../components/Home'

import ScrollReveal from 'scrollreveal'
import SectionReferencias from '../components/SectionReferencias'
import SectionRefPer from '../components/SectionRefPer'
import HeaderReferencias from '../components/HeaderReferencias'

const Referencias = () => {

    useEffect(() => {
                /*Data*/
                ScrollReveal().reveal('.section__data',{origin: 'left',distance: '70px',duration: 2500,reset: true}); 

                /*Imgs*/
            
                ScrollReveal().reveal('.section__img',{origin: 'left',distance: '90px',delay: 200,duration: 2500,reset: true}); 

                
            });
 

    return (
        <div className="div">
            <HeaderReferencias/>
            <Home Texto1="Referencias" Texto2="Personales y Familiares"/>
            <SectionReferencias/>
            <SectionRefPer/>
        </div>
    )
}

export default Referencias
