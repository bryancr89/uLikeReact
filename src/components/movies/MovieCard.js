import React, {PropTypes} from 'react';
import './styles/movie-card.scss';

class MovieCard extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  
  render() {
    let background = { background: `url(${this.props.movie.Poster}) center / cover` };
    return (
      <div className="movie-card mdl-card mdl-shadow--2dp" style={background}>
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">Welcome</h2>
        </div>
        <div className="mdl-card__supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris sagittis pellentesque lacus eleifend lacinia...
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Get Started
          </a>
        </div>
        <div className="mdl-card__menu">
          <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
            <i className="material-icons">share</i>
          </button>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieCard;
