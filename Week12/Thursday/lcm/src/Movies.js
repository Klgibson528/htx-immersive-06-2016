import React from 'react';


class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies : []
          }
        
    }

    componentWillMount() {
        this.populateMovies()
      }

    populateMovies() {

    fetch("http://www.omdbapi.com/?s=Batman&apikey=564727fa&page=2a")
    .then((response) => response.json())
    .then((json) => {
        this.setState({
            movies : json.Search
        })
    })

    }

    render() {

        let movieItems = this.state.movies.map((movie) => {
            return (
              <li>
                <label>{movie.Title}</label>
                
    
              </li>
            )
          })


        return (
            
          <ul>
              {movieItems}
          </ul>  
        );
    }
}




export default Movies
