import bannerImg from '../assets/banner.jpg'
import imgGit from '../assets/git.png'
import linkedin from '../assets/linkedin.png'
import profile from '../assets/profile.jpg'
import { NavBar } from './navBar.jsx'
import './styleComponents.css';
export function Main() {
    return (
        <div className="main-section" id='me'>
            <NavBar />
            <img src={bannerImg} alt="Main Image" className="main-image" />

            <div className="main-content">
                <div className='Profile'>
                    <img src={profile} />
                </div>
                <h1>Bienvenidos a mi Portafolio</h1>
                <section className="main-texts">
                    <div className="main-sobreMi">
                        <h2>Sobre Mí</h2>
                        <h4>Abril Melissa Garcia Horta</h4>
                        <p>Soy una persona apasionada por la tecnología y el desarrollo web. Me encanta aprender
                            nuevas tecnologías y aplicarlas en proyectos interesantes. Mi objetivo es seguir creciendo como profesional y
                            contribuir a la creación de soluciones innovadoras.</p>
                        <h3 className='contacto'>Contacto</h3>
                        <section className='contacts'>
                            <a href="https://github.com/MushCay" target="_blank" rel="noopener noreferrer">
                                <img src={imgGit} alt="GitHub" className="git-image" />
                            </a>
                            <a href="https://www.linkedin.com/in/abril-melissa-garcia-b1b678413/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="LinkedIn" className="link-image" />
                            </a>
                            <section className='contacts-1'>
                                <p>Correo : melissaGarcia@gmail.com<br />
                                    Telefono : 6622254604
                                </p>
                            </section>
                        </section>
                    </div>
                </section>
            </div >
        </div >
    )
}