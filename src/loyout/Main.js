import React from 'react';
import Preloader from '../components/Preloader';
import MovieList from '../components/MovieList';
import './Main.css';

class Main extends React.Component
{
    state = {movies:[]}
    componentDidMount()
    {
        fetch('https://omdbapi.com/?apikey=fcb5c527&s=Terminator')
        .then(response=>response.json())
        .then(data=>this.setState({movies:data.Search}))
    }
    render()
    {
        return(
            <div className='main'>
                <div className='wrap'>
                    {
                        this.state.movies.length ? <MovieList movies={this.state.movies}/>:<Preloader/>
                    }

                </div>
            </div>
        )
    }
}
export default Main;