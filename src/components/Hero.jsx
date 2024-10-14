import PropTypes from "prop-types";
import { Link } from "react-router-dom"

export const Hero = ({ title, hasBackButton }) => {
    return (
        <section className="hero is-warning">
  <div className="hero-body">
    <p className="title">{title}</p>
    { hasBackButton && <Link to="/" className="has-text-black">Back to Home</Link>}
  </div>
</section>

    );
};

Hero.protoTypes = {
    title: PropTypes.string.isRequired,
    hasBackButton: PropTypes.bool,
}