import {Route, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import LogoPng from '../assets/images/Logo.png'
import menuIcon from '../assets/images/ham-menu-icon.png'
import { useEffect } from 'react';
import medicos from '../assets/images/Medicos.png'



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


export function HomeFarmacodia() {
    return (
       <body>
            {/* Navbar -- Barra de navegacion entre paginas */}
        
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
            <br/>
            
                <div className='moveSect header-inner text-white text-center'>
                    <div className='container grid'>
                        <div className='header-inner-left'>
                            <h1>Tu sitio de mayor confianza<br/> <span>para agendar
                            </span></h1>
                            <p className='lead'> Los mejores servicios de los mejores medicos para ti :). </p>
                            <p class = "text text-md">Crea una cuenta o Inicia sesion si es que ya tienes una :).</p>
                            <div className='btn-group'>
                                {/* Iniciar sesion -- Login */}
                                <a href='/Login' className='btn btn-white login'>Iniciar Sesion</a>
                                
                                {/* Registrarse -- Register */}     
                                <a href='/Signup' className='btn btn-white register'>Registrarse</a>
                                
                            </div>
                            <br/>
                            {/* Nuestros medicos asociados -- associations with medics */}           
                            
                        </div>

                        <div className='header-inner-right'>
                            <img src={medicos}></img>
                        </div>
                        
                    </div>
                </div>

        </header>
        {/* Fin del header -- Encabezado zaaa */}
        <main>


        </main>

        </body>

       

        
        
       
        
        
    )
    
}







