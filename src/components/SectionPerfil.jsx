import React from 'react'

import img from '../assets/img/foto.jpeg'


const SectionPerfil = () => {
    

    
    return (
        /* SECTION */ 

            <section class="l-section" id="section">
                <div class="section" id="S1">
                    <div class="section__data">
                        <h2 class="section__title">Estefania Neira Rodriguez</h2>
                        <p class="section__text">Tarjeta de Identidad: 1031641430</p>
                        <p class="section__text">Carrera 102 N° 155 – 50 Bogotá D.C.</p>
                        <p class="section__text">Teléfonos : 7526202 - 3209897269</p>
                        <p class="section__text">  E – mail: estefanianeira1@gmail.com</p>
                        <p class="section__text"> Fecha de Nacimiento: 07 de marzo de 2004</p>
                    </div>
        
                <img src={img} alt="foto" className="section__foto" />

                </div>
            </section>
    )
}

export default SectionPerfil
