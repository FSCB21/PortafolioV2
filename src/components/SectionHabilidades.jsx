import React from 'react'

import {Link} from 'react-router-dom'

import img from '../assets/img/habilidades.jpg'

const SectionHabilidades = () => {
    return (
        /*  SECTION Habilidades */
            <section class="l-section2" id="section">
                <div class="section" id="S2">
                    <div class="section__data">
                        <h2 class="section__title"> HABILIDADES DESARROLLADAS</h2>
                        <p class="section__text">Técnica en programación de software con conocimiento 
                            en desarrollo de páginas Web y Sistemas de información, lenguajes de
                             programación PHP, JavaScript, Java y mysql, manejo de programas como Workbench,
                              Visual Studio Code y Sublime...</p> 
                              <Link class="link" style={{"margin-left": "0%"}} to="/habilidades">Ver más</Link>
                    </div>
        
                    <img src={img} alt="foto" className="section__img"/>
                </div>
            </section>
    )
}

export default SectionHabilidades
