var MovieDescription = React.createClass({
	propTypes:{
		desc: React.PropTypes.string,
	},
	render: function(){
		return React.createElement('p', {}, this.props.desc);		
	}	
})