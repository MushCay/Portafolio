import { Link } from 'react-router-dom';

export function Card({ img, title, text, linkText, linkUrl }) {
    return (
        <section className="card" style={{ maxWidth: '320px' }}>
            <img src={img} className="card-img-top" alt={title} />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{text}</p>
                <Link to={linkUrl} className="btn-solid theme-primary">
                    {linkText}
                </Link>
            </div>
        </section>
    )
}