import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    componentDidMount(){
        const MovieID = this.props.match.params.id
        this.props.getMovieDetail(MovieID)
    }    


    render() {
        return (
            <div className="movie-detail">
                
                <h1>{this.props.movie.Title}</h1>
                <img src={this.props.movie.Poster} />
                <h2>{this.props.movie.Plot}</h2> 
                <h2>{this.props.movie.Year}</h2> 
                <h2>{this.props.movie.Rated}</h2>
                
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
      movie: state.movieDetail //state corresponde al estado global. movieDetail contiene la respuesta del fetch
    }
  }
  
  function mapDispatchToProps (dispatch) {
    return {
      getMovieDetail: movieID => dispatch(getMovieDetail(movieID)),
      //con getMovies necesito importar "import"
      // addMovieFavorite: title => dispatch(addMovieFavorite(title))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Movie)