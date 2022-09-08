import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../actions";
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <div className="contenedor">
          {
            this.props.movies && this.props.movies.map(movie => (
              //Hago movie.id porque bajo ese nombre "id" se guardó idbmID en addMovieFavorites. Lo mismo con movie.title.
              <div key={movie.id} className='cajita'>
                <Link to={`/movie/${movie.id}`}>
                  <span>{movie.title}</span>
                </Link>
                <div className="imagen-portada">
                <img src={movie.imagen} />
                </div>
                <button onClick={()=> this.props.removeMovieFavorite(movie.id)}>
                  Eliminar de Fav
                </button>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}




function mapStateToProps(state){
  return {
    movies: state.moviesFavorites
  }
}

function mapDispatchToProps (dispatch) {
  return {
    removeMovieFavorite: movieID => dispatch(removeMovieFavorite(movieID)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList)
