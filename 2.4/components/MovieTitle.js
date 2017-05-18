var MovieTitle = React.createClass({
	propTypes:{
		movie: React.PropTypes.string,
	},
	render: function(){
		return React.createElement('h2', {}, this.props.title)
	}
	
})