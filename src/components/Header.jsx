import gsap from 'gsap';
import React, { useEffect } from 'react'

const Header = () => {

    useEffect(() => {
                gsap.from('.nav__logo', {opacity:0, duration: 3, delay: .5, y: 30, ease:'expo.out'});
                gsap.from('.nav__toggle', {opacity:0, duration: 3, delay: .7, y: 30, ease:'expo.out'});
                gsap.from('.nav__item', {opacity: 0, duration: 3, delay: .7, y: 35, ease:'expo.out', stagger: .2})
            });

    /* MENU SHOW */ 
    const handleShow = () =>{
        let nav = ""
        nav = document.getElementById('nav-menu')
        nav.classList.toggle('show')
    }

    return (
        <header class="l-header">
            <nav class="nav bd-grid">
                <a href="mailto:estefanianeira1@gmail.com" class="nav__logo">Estefania Neira</a>

                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-menu-alt-right' onClick={handleShow}></i>
                </div>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#I" class="nav__link">Home</a></li>
                        <li class="nav__item"><a href="#S1" class="nav__link">Perfil</a></li>
                        <li class="nav__item"><a href="#S2" class="nav__link">Habilidades</a></li>
                        <li class="nav__item"><a href="#S3" class="nav__link">Estudios</a></li>
                        <li class="nav__item"><a href="#S4" class="nav__link">Referencias</a></li>
                    </ul>
                </div>

            </nav>
        </header>
    )
}

export default Header
