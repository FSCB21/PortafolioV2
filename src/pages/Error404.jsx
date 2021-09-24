import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from 'scrollreveal'

import img from '../assets/img/404err.png'


const Error404 = () => {
    useEffect(() => {
                /*Data*/
                ScrollReveal().reveal('.section__data',{origin: 'left',distance: '70px',duration: 2500,reset: true}); 

                /*Imgs*/
                ScrollReveal().reveal('.section__err',{origin: 'left',distance: '90px',delay: 200,duration: 2500,reset: true}); 
                
            });
    return (
        <section class="l-section2" id="section">
                
                <div class="section" id="S1">
                    <img src={img} alt="foto" className="section__err"/>
                    <div class="section__data">
                        <h1 class="section__title" style={{"font-size": "7rem"}}>Oops!</h1>
                        <h2 class="section__title" style={{"font-size": "2rem"}}>ERROR 404</h2>
                        <p class="section__text">Pagina no encontrada</p>
                        <br/>
                        <Link class="link" to="/">Volver al Inicio</Link>
                              
                       
                            
                        
                    </div>
        
                   
                </div>
            </section>
    )
}

export default Error404
