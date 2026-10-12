import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from './cards'
import img1MangaStore from '../assets/carpetaProyectos/ms2.png';
import img1Stocker from '../assets/carpetaProyectos/stocker.png';
import img1Queens from '../assets/carpetaProyectos/queens.png';

export function ProyectosSection() {
    return (
        <section className="proyectos-section">
            <div className="proyectos-content">
                <h2 >Proyectos</h2>
                <p>Estas son algunos de los proyectos en los que he trabajado:</p>
                <h3>REPOSITORIOS</h3>
                <section className="card-container" >
                    <Card
                        img={img1MangaStore}
                        title="Manga Store"
                        text="Sistema de gestion de una tienda de mangas"
                        linkText="Repositorio"
                        linkUrl="https://github.com/tu-usuario/repo"
                    />

                    <Card
                        img={img1Stocker}
                        title="Stocker Lab"
                        text="Sistema de Gestion de Laboratorios"
                        linkText="Repositorio"
                        linkUrl="https://github.com/tu-usuario/repo"
                    />

                    <Card
                        img={img1Queens}
                        title="Simulacion 8 Reinas"
                        text="Simulacion del problema de las 8 reinas"
                        linkText="Repositorio"
                        linkUrl="https://github.com/tu-usuario/repo"
                    />

                </section>
                <h3>DOCUMENTOS</h3>
                <section className="card-container" >
                    <Card
                        img={img1MangaStore}
                        title="Manga Store"
                        text="Sistema de gestion de una tienda de mangas"
                        linkText="Repositorio"
                        linkUrl="https://github.com/tu-usuario/repo"
                    />

                    <Card
                        img={img1Stocker}
                        title="Stocker Lab"
                        text="Sistema de Gestion de Laboratorios"
                        linkText="Repositorio"
                        linkUrl="/proyecto/stocker-lab"
                    />

                    <Card
                        img={img1Queens}
                        title="Simulacion 8 Reinas"
                        text="Simulacion del problema de las 8 reinas"
                        linkText="Repositorio"
                        linkUrl="https://github.com/tu-usuario/repo"
                    />

                </section>
            </div>
        </section >
    )

}
