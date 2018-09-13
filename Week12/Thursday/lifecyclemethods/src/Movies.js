import React from 'react';


class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {movies: []}
        
    }

    componentWillMount() {
        this.populateMovies();
    }

    populateMovies(){
        fetch('http://www.omdbapi.com/?s=Batman&apikey=564727fa&page=2a')
        .then(response => response.json())
        .then((json) => {
            this.setState({movies: json.Search })
        })
    }

    render() {

        let movieList = this.state.movies.map( movie => <li key={movie.Title}>{movie.Title}</li>)
        return (
            <ul>
                {movieList}
            </ul>
        );
    }
}



export default Movies
