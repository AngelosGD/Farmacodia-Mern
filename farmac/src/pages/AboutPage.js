import {Route, Routes} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import LogoPng from '../assets/images/Logo.png'
import About from '../assets/images/About.png'
import menuIcon from '../assets/images/ham-menu-icon.png'
import './About.css'


/* mostrar el menu en responsive */
function showBtn(){
    
    const navbarShowBtn = document.querySelector('.navbar-show-btn')
    const navbarCollapseDiv = document.querySelector('.navbar-collapse')
    
    navbarShowBtn.addEventListener('click', function(){
        navbarCollapseDiv.classList.add('navbar-show')
    })
}


    /* Ocultar menu en responsive */
function hideBtn() {

    const navbarHideBtn = document.querySelector('.navbar-hide-btn')
    const navbarCollapseDiv = document.querySelector('.navbar-collapse')
    navbarHideBtn.addEventListener('click', function(){
        navbarCollapseDiv.classList.remove('navbar-show')
    })
}


export function AboutPage() {
    return(
        <body>
            {/* Navbar Navigation -- Barra De Navegacion entre paginas */}
            <header className='header bg-blue'>
            <nav className='navbar bg-blue'>
                <div className='container flex'>
                    <a href='/' className='navbar-brand'>
                        <img src={LogoPng} className='img logoT'/>
                    </a>

                    <button type='button' className='navbar-show-btn' onClick={showBtn}>   
                        <img src={menuIcon}></img>
                    </button>

                    {/* colapsar la navegacion responsaiva */}
                    <div className='navbar-collapse bg-white'>
                        <button type='button' className=' navbar-hide-btn' onClick={hideBtn}>
                            <img src='https://raw.githubusercontent.com/prabinmagar/revo-hospital-website-html-css-js/master/images/close-icon.png'></img>
                        </button>

                        {/* Barra De Navegacion -- NavBar */}
                        <ul className='navbar-nav'>
                            {/* Inicio */}
                            <li className='nav-item'>
                                <a href='/' className='nav-link'>
                                    Inicio
                                </a>
                            </li>
                            {/* Sobre Nosotros -- About Us */}
                            <li className='nav-item'>
                                <a href='/About' className='nav-link'>
                                    Sobre Nosotros
                                </a>
                            </li>
                            {/* Contacto -- Contact */}
                            <li className='nav-item'>
                                <a href='/' className='nav-link'>
                                    Contacto
                                </a>
                            </li>
                            {/* Blog en laboratirio -- 1 day in laboratory */}
                            <li className='nav-item'>
                                <a href='/Blog' className='nav-link'>
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>    

                    
                </div>
            </nav>
            </header>
            {/* Final del header -- encabezado */}

        <main>
        {/* Seccion sobre nosotros -- About sUs */}
        <section id = "about" class = "about py">
            <div class = "about-inner">
                <div class = "container grid">
                    <div class = "about-left text-center">
                        <div class = "section-head">
                            <h2>Sobre Nosotros</h2>
                            <div class = "border-line"></div>
                        </div>
                        <p class = "text text-lg">Somos una pequeña empresa con grandes metas, una vision de mejorar el sector salud con su ayuda, la del publico
                        pensamoe en la salud y felicidad de nuestros clientes, viendo la forma en la que podremos mejorar dicho sector, contando con los mejores socios de nuestra zona :).</p>
                        <a href = "#banner-one" class = "btn btn-white learn-more">Indagar</a>
                    </div>
                    <div class = "about-right flex">
                        <div class = "img">
                            <img src = {About}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Fin seccion About sUs */}
        

        {/* Seccion asociados -- associations */}
        <section id='banner-one' className='banner-one text-center'>
            <div className='container text-white'>
                <blockquote className='lead fas fa-quote-left centerLeft'>Contamos con los mejores socios de nuestra zona, certificadamente, de confianza
                con años de experiencia que los respaldan, y que saben lo que hacen en su trabajo. <i className='fas fa-quote-right'></i></blockquote>

                <small className='text text-sm'>
                    Con Clientes que los respaldan, no se va a arrepentir de confiar en nosotros :).
                </small>
            </div>
        </section>

        </main>
        </body>
       
    )
}