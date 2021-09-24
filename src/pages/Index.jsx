import React, { useEffect } from 'react'

import Header from '../components/Header'
import Home from '../components/Home'
import SectionPerfil from '../components/SectionPerfil'
import SectionHabilidades from '../components/SectionHabilidades'

import ScrollReveal from 'scrollreveal'

import '../assets/css/style.css'
import SectionFormacion from '../components/SectionFormacion'

const Portafolio = () => {
    
       useEffect(() => {
                /*Data*/
                ScrollReveal().reveal('.section__data',{origin: 'left',distance: '70px',duration: 2500,reset: true}); 

                /*Imgs*/
                ScrollReveal().reveal('.section__foto',{origin: 'left',distance: '90px',delay: 200,duration: 2500,reset: true}); 
                
                ScrollReveal().reveal('.section__img',{origin: 'left',distance: '90px',delay: 200,duration: 2500,reset: true}); 

                
            });
 
    
    return (


        <div className="div">
            <Header/>
            <Home Texto1="Portafolio" Texto2="Desarrolladora Web"/>
            <SectionPerfil/>
            <SectionHabilidades/>
            <SectionFormacion/>
        </div>
    )
}

export default Portafolio
