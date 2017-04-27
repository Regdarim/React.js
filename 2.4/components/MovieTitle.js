

var MovieTitle = React.createClass({
	propTypes:{
		movie: React.PropTypes.any.isRequired,
	},
	render: function(){
		var movieTitles = movies.map( function(movie){
			return (
				
				React.createElement('h2',{key: movie.id}, movie.title)
				)
		})
		return(
			React.createElement(movieTitles)
			)
	}
	
})