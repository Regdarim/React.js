var MoviesList = React.createClass({
    propTypes: {
        items: React.PropTypes.any.isRequired,
    },
    render: function() {

        var moviesElements = movies.map(function(movie) {
            return React.createElement('li', {
                    key: movie.id
                },
                React.createElement('h2', {}, movie.title)

            );
        });
        return (

            React.createElement('div', {},
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement('ul', {}, moviesElements)
            )

        );
    }
})