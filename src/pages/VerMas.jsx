import React, { useEffect } from 'react'
import HeaderVerMas from '../components/HeaderVerMas'
import Home from '../components/Home'
import SectionVerMas from '../components/SectionVerMas'

import ScrollReveal from 'scrollreveal'

const VerMas = () => {

    useEffect(() => {
                /*Data*/
                ScrollReveal().reveal('.section__data',{origin: 'left',distance: '70px',duration: 2500,reset: true}); 

                /*Imgs*/
            
                ScrollReveal().reveal('.section__img',{origin: 'left',distance: '90px',delay: 200,duration: 2500,reset: true}); 

                
            });
 

    return (
        <div className="div">
            <HeaderVerMas/>
            <Home Texto1="Habilidades" Texto2="Habilidades Desarrolladas"/>
            <SectionVerMas/>
        </div>
    )
}

export default VerMas
