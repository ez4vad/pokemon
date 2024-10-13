import { Link } from "react-router-dom"

export const Hero = () => {
    return (
        <section className="hero is-warning">
  <div className="hero-body">
    <p className="title">PokeApi</p>
    <Link to="/" className="has-text-black">Back to Home</Link>
  </div>
</section>

    );
}