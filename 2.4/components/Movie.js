var movies = [{
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    src: './img/HP.jpg'
}, {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    src: './img/KL.jpg'
}, {
    id: 3,
    title: 'Gdzie Jest Nemo',
    desc: 'Film o zagubionej rybce',
    src: './img/GJN.jpg'
}, {
    id: 4,
    title: 'Gumisie',
    desc: 'Bajka o dopingu',
    src: './img/G.jpg'
}];




var Movie = React.createClass({
    propTypes: {
        item: React.PropTypes.array.isRequired,
    },
    render: function() {

        var moviesElements = movies.map(function(movie) {
            return React.createElement('li', {
                    key: movie.id
                },
                React.createElement('h2', {}, movie.title),
                React.createElement('p', {}, movie.desc),
                React.createElement('img', {
                    src: movie.src
                })
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

