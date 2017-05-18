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

var element = React.createElement(MoviesList, {
  items: movies
})
ReactDOM.render(element, document.getElementById('app'));