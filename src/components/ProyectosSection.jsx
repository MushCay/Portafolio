import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from './cards'
import img1MangaStore from '../assets/carpetaProyectos/ms2.png';
import img1Stocker from '../assets/carpetaProyectos/stocker.png';
import img1Queens from '../assets/carpetaProyectos/queens.png';
import img1Sitio from '../assets/carpetaProyectos/estudio.png'
import img1Figma from '../assets/carpetaProyectos/figma.png'
import img1Des3 from '../assets/carpetaProyectos/desa3.png'

export function ProyectosSection() {
    return (
        <section className="proyectos-section" id='Proyectos'>
            <div className="proyectos-content">
                <h2 >Proyectos</h2>
                <p>Estas son algunos de los proyectos en los que he trabajado:</p>
                <h3>Repositorios</h3>
                <section className="card-container" >
                    <Card
                        img={img1MangaStore}
                        title="Manga Store"
                        text="Sistema de gestion de una tienda de mangas"
                        linkText="Repositorio"
                        linkUrl="https://github.com/MushCay/Proyecto_Final_DIV"
                    />

                    <Card
                        img={img1Stocker}
                        title="Stocker Lab"
                        text="Sistema de Gestion de Laboratorios"
                        linkText="Repositorio"
                        linkUrl="https://github.com/anmaribaphomet/STOCKERLAB"
                    />

                    <Card
                        img={img1Queens}
                        title="Simulacion 8 Reinas"
                        text="Simulacion del problema de las 8 reinas"
                        linkText="Repositorio"
                        linkUrl="https://github.com/MushCay/Simulacion-8-Reinas"
                    />

                </section>
                <h3>Documentos</h3>
                <section className="card-container" >
                    <Card
                        img={img1Sitio}
                        title="Estudio de Sitio"
                        text="Estudio de Sitio realizado en la casa de un Compañero"
                        linkText="Detalles"
                        linkUrl="https://github.com/tu-usuario/repo"
                    />

                    <Card
                        img={img1Figma}
                        title="Interfaz Figma Juego Infantil"
                        text="Interfaz en figma de juego para niños"
                        linkText="Detalles"
                        linkUrl="/proyecto/stocker-lab"
                    />

                    <Card
                        img={img1Des3}
                        title="Creacion Personajes"
                        text="Generacion de personajes"
                        linkText="Detalles"
                        linkUrl="https://github.com/tu-usuario/repo"
                    />

                </section>
            </div>
        </section >
    )

}
