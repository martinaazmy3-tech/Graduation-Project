import { Link } from 'react-router-dom';

export default function About() {
    return (
        <section className="about-section text-center my-5">
            <h1 className="section-title">About Dokkana</h1>

            <p className="mt-4">
                Welcome to Dokkana, a place to discover fashion and accessories
                that fit your style.
            </p>

            <p>
                Our goal is to make browsing products simple and enjoyable.
                Explore our collection and choose your favorite items.
            </p>

            
<Link to="/products" className="btn btn-main mt-3">
    Explore Products
</Link>

        </section>
    );
}