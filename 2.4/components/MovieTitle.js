MovieTitle = React.createClass({
	propTypes:{
		title: React.PropTypes.string,
	},
	render: function(){
		return React.createElement('h2', {}, this.props.title);
	}
});