Movie = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired
    },
    render: function() {
        return React.createElement('li', {},
            React.createElement(MovieTitle, {title: this.props.item.title}),
            React.createElement(MovieDescription, {desc: this.props.item.desc}),
            React.createElement('img', {src: this.props.item.src})
        );
    }
});
