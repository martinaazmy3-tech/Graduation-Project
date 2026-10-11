import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <section className="hero-section text-center">
                <div className="hero-content">
                    <h1>Welcome to Dokkana Family</h1>

                   
<Link to="/products" className="btn btn-main mt-3">
    Shop Now
</Link>

                </div>
            </section>

            <section className="my-5">
                <h2 className="section-title text-center mb-4">
                    Our Categories
                </h2>

                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="category-card text-center">
                            <h3>Women's Clothing</h3>
                            <p>Discover your favorite styles.</p>
                            <Link
                                to="/products"
                                className="btn btn-outline-main"
                            >
                                Explore Clothing
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="category-card text-center">
                            <h3>Jewelry</h3>
                            <p>Simple details make a difference.</p>
                            <Link
                                to="/products"
                                className="btn btn-outline-main"
                            >
                                Explore Jewelry
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section text-center my-5">
                <h2 className="section-title">About Dokkana</h2>

                <p className="mt-3">
                    Dokkana is your place to discover fashion, accessories,
                    and pieces that match your own style.
                </p>

                <Link to="/about" className="btn btn-main mt-2">
                    Learn More
                </Link>
            </section>
        </>
    );
}