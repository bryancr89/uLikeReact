import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/moviesActions';

import MovieCard from './MovieCard';

class MoviesPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('here');
    this.props.dispatch(actions.initializeMovies());
  }

  render () {
    let movies = this.props.movies.map(movie => {
      return (<MovieCard movie={movie} key={movie.imdbID}></MovieCard>)
    });

    return (
      <div>{movies || (<span>Oops there are no movies</span>)}</div>
    );
  }
}

MoviesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesPage);
