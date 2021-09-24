import React from 'react'
import { Link } from 'react-router-dom'


import img from '../assets/img/estudios.jpg'

const SectionFormacion = () => {
    return (
        /* SECTION FORMACIÓN ACADÉMICA */
            <section class="l-section" id="section">
                <div class="section" id="S3">
                    <div class="section__data">
                        <h2 class="section__title">FORMACIÓN ACADÉMICA</h2>
                        <ol>
                            <li>
                               <p class="section__text">SIET LABORAL</p>
                               <ul>
                                    <li>
                                        <p class="section__text"> - Ser Digital</p>
                                    </li>
                                        <li>
                                        <p class="section__text"> - Buscando Empleo</p>
                                    </li>
                                        <li>
                                        <p class="section__text"> - Comunicaciones En La Industria Call Center</p>
                                    </li>
                                        <li>
                                        <p class="section__text"> - Tu nueva agenda</p>
                                    </li>
                                        <li>
                                        <p class="section__text"> - Crea tus propios documentos</p>
                                     </li>
                                     
                                        
                                     
                                     
                               </ul>
                            </li>
                            <p class="section__text"><strong>Colegio Fe y Alegría Jose Maria Velaz - Año 2020</strong> </p>
                            <br/>
                            <li>
                                <p class="section__text">SENA</p>
                                <ul>
                                     <li>
                                         <p class="section__text"> - Técnico en Programación de software</p>
                                     </li>
                                     <li>
                                        <p class="section__text"> - Excel Intermedio</p>
                                    </li>
                                </ul>
                             </li>
                             <p class="section__text"><strong>Servicio Nacional de Aprendizaje - Año 2020</strong> </p>
                             
                        </ol>
                         
                    </div>
        
                    <img src={img} alt="img" class="section__img" style={{"border-radius": "50%"}} />
                </div>
                <div id="S4" class="section" style={{"height": "auto"}}>
                    <Link class="linkR" to="/referencias">Ver Referencias..</Link>
                </div>
                
            </section>
    )
}

export default SectionFormacion
