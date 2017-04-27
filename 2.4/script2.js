var GalleryItem = React.createClass({
  propTypes: {
    images: React.PropTypes.array.isRequired,
  },

  render: function() {
    var imageComponents = this.props.images.map(function(kotek){
      return(
        React.createElement('li', {key: kotek.id},
        React.createElement('h2', {}, kotek.name),
        React.createElement('img', {src: kotek.src})
        )
    )
    });
    return (
      React.createElement('div', {}, imageComponents
      )
    )
}
});
var image = [{
  id:1,
  name: 'Kotek',
  src: 'http://imgur.com/n8OYCzR.png'
},
{
 id:2,
  name: 'Kotek2',
  src: 'http://imgur.com/n8OYCzR.png' 
}]

var element = React.createElement(GalleryItem, {images: image });
ReactDOM.render(element, document.getElementById('app'));