import './pageNotFound.css';

export default function PageNotFound() {
    return (
        <div className='notFoundDiv'>
            <section className="notFound">
                <div className="img">
                <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage"/>
                <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly"/>
                </div>
                <div className="text">
                <h1>404</h1>
                <h2>PAGE NOT FOUND</h2>
                <h3>BACK TO HOME?</h3>
                <a href="/" className="yes">YES</a>
                <a href="/">MAYBE</a>
                </div>
            </section>
        </div>
    )
}
