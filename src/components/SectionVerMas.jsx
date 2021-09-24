import React from 'react'

import img from '../assets/img/habilidades2.jpg'

const SectionVerMas = () => {
    return (
        /* SECTION Ver Mas */
            <section class="l-section2" id="section">
                <div class="section" id="S1">
                    <div class="section__data">
                        <h2 class="section__title">Habilidades Desarrolladas</h2>
                        <p class="section__text">Técnica en programación de software con conocimiento
                             en desarrollo de páginas Web y Sistemas de información, lenguajes de programación PHP,
                              JavaScript, Java y mysql, manejo de programas como Workbench, Visual Studio Code y Sublime.</p>
                              <br/>
                        <p class="section__text">Con capacidad para trabajar en equipo y liderarlo, responsable y 
                            Comprometida, abierta a nuevos retos tanto personales como laborales con habilidad para
                             resolución de conflictos, que vive en la constante búsqueda de la aplicación de la experiencia
                              en la vida cotidiana, sin dejar de lado la ética y los principios, elementos fundamentales del éxito.</p>
                            
                        
                    </div>
        
                    <img src={img} alt="foto" className="section__img"/>

                </div>
            </section>
    )
}

export default SectionVerMas
