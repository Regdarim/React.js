MoviesList = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
    },
    render: function() {
        var moviesElements = this.props.items.map(function(movie) {
            return React.createElement(Movie, {key: movie.id, item: movie});
        });
        return (
            React.createElement('div', {},
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement('ul', {}, moviesElements)
            )
        );
    }
})