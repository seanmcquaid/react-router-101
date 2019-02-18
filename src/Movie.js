import React, { Component } from 'react';
import axios from 'axios';

class Movie extends Component{

	constructor(){
		super();
		this.state = {
			movie: {}
		}
	}
    // this.props.match changed which caused this to run
	componentWillReceiveProps(newProps){
		console.log(newProps);
		const mid = newProps.match.params.movieId;
		axios.get(`https://api.themoviedb.org/3/movie/${mid}?api_key=fec8b5ab27b292a68294261bb21b04a5`)
		.then((movieData)=>{
			// console.log(movieData);
			this.setState({
				movie: movieData.data
			})
		})
	}

	componentDidMount(){
        // if you are in the router, you get the match prop
        console.log(this.props.match)
		const mid = this.props.match.params.movieId;
		axios.get(`https://api.themoviedb.org/3/movie/${mid}?api_key=fec8b5ab27b292a68294261bb21b04a5`)
		.then((movieData)=>{
			// console.log(movieData);
			this.setState({
				movie: movieData.data
			})
		})
	}

	render(){
        // react router adds these props:
        // match = params/wildcard
        // history = all the past history of react router
        // location - same as match but without the bulk
		if(this.state.movie.title === undefined){
			return(
				<h1>Loading...</h1>
			)
		}
		var movie = this.state.movie;
		return(
			<div>
				<img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} />
				{movie.title}
				{movie.budget}
				{movie.tagline}
			</div>
		)
	}
}

export default Movie;