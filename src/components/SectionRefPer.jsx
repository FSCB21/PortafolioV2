import React from 'react'

import img from '../assets/img/refPersonal.jpg'

const SectionRefPer = () => {
    return (
        <section class="l-section" id="section">
                <div class="section" id="S2">
                    <div class="section__data">
                        <h2 class="section__title">Referencias Personales</h2>
                        <p class="section__text"> - LILIANA CASALLAS</p>
                        <p class="section__text">  EMPLEADA</p>
                            <p class="section__text">   Tel.: 3142327745</p>
                        <br/>
                        <p class="section__text"> - SONIA RODRIGUEZ CASALLAS</p>
                            <p class="section__text"> INDEPENDIENTE</p>
                                <p class="section__text">  Tel.: 3108735399</p>
                    </div>
        
                    <img src={img} alt="foto" className="section__img"/>
                </div>
            </section>
    )
}

export default SectionRefPer
