import bannerImg from '../assets/banner.jpg'
import imgGit from '../assets/git.png'
import linkedin from '../assets/linkedin.png'
import profile from '../assets/profile.jpg'
import { NavBar } from './navBar.jsx'
import './styleComponents.css';
export function Main() {
    return (
        <div className="main-section">
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
                        <p>Soy una persona apasionada por la tecnología y el desarrollo web. Me encanta aprender
                            nuevas tecnologías y aplicarlas en proyectos interesantes. Mi objetivo es seguir creciendo como profesional y
                            contribuir a la creación de soluciones innovadoras.</p>
                        <h3>Contacto</h3>
                        <section className='contacts'>
                            <img src={imgGit} alt="Foto de perfil" className="git-image" />
                            <img src={linkedin} alt="Foto de perfil" className="link-image" />
                        </section>
                    </div>
                </section>
            </div >
        </div >
    )
}