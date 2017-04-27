var MovieDescription = React.createClass({
	propTypes:{
		desc: React.PropTypes.any.isRequired,
	},
	render: function(){
		var descs = movies.map(function(movie){
			return(
			
				React.createElement('p',{key: movie.id}, movie.desc)
				)
		})

		return (
			React.createElement(descs)
			);
	}	
})