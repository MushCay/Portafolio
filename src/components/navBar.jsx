export function NavBar({
    sobremi = "#me",
    tecnologias = "#tecnologias",
    Proyectos = "#Proyectos"
}) {
    return (
        <nav className="navBar">
            <ul>
                <li><a href={sobremi}>Sobre mí</a></li>
                <li><a href={tecnologias}>Tecnologías</a></li>
                <li><a href={Proyectos}>Proyectos</a></li>
            </ul>
        </nav>
    );
}