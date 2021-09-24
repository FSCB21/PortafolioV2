import React from 'react'

import img from '../assets/img/refFamiliar'

const SectionReferencias = () => {
    return (
         /* SECTION Referencias */
            <section class="l-section2" id="section">
                <div class="section" id="S1">
                    <div class="section__data">
                        <h2 class="section__title">Referencias Familiares</h2>
                        <p class="section__text"> - DAIHANA RODRIGUEZ</p>
                        <p class="section__text">   ICETEX</p>
                            <p class="section__text">   Tel.: 321 2308643</p>
                        <br/>
                        <p class="section__text"> - OSCAR NEIRA</p>
                            <p class="section__text"> INDEPENDIENTE</p>
                                <p class="section__text">  Tel.: 322 2337922</p>
                    </div>
        
                    <img src={img} alt="foto" className="section__img"/>
                </div>
            </section>
    )
}

export default SectionReferencias
