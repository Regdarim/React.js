var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {className: ' col-xs-6 container contactItem'},
        React.createElement('img', {
          className: 'col-xs-3 contactImage', 
          src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'
        }),
        React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
        React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
        React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email}, 
          this.props.item.email
        )
      )
    )
  },
});