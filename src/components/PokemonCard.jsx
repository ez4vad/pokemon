import PropTypes from 'prop-types';

export const PokemonCard = ({name, image}) => {
    return (
        <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img
        src={image}
        alt={name}
      />
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4">{name}</p>
      </div>
    </div>
  </div>
</div>
    )
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}