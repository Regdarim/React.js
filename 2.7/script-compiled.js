'use strict';

var contacts = [{
  id: 1,
  firstName: 'Jan',
  lastName: 'Nowak',
  email: 'jan.nowak@example.com'
}, {
  id: 2,
  firstName: 'Adam',
  lastName: 'Kowalski',
  email: 'adam.kowalski@example.com'
}, {
  id: 3,
  firstName: 'Zbigniew',
  lastName: 'Koziol',
  email: 'zbigniew.koziol@example.com'
}, {
  id: 4,
  firstName: 'Adam',
  lastName: 'Kowalski',
  email: 'adam.kowalski@example.com'
}, {
  id: 5,
  firstName: 'Adam',
  lastName: 'Kowalski',
  email: 'adam.kowalski@example.com'
}, {
  id: 6,
  firstName: 'Adam',
  lastName: 'Kowalski',
  email: 'adam.kowalski@example.com'
}];

var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};

var App = React.createClass({
  displayName: 'App',

  render: function render() {
    return React.createElement(
      'div',
      { className: 'container App' },
      React.createElement(ContactForm, { contact: contactForm }),
      React.createElement(Contacts, { items: contacts })
    );
  }
});
'use strict';

var Contact = React.createClass({
    displayName: 'Contact',

    render: function render() {
        return React.createElement(
            'div',
            { className: 'contactItem' },
            React.createElement('img', { className: 'contactImage', src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico' }),
            React.createElement(
                'p',
                { className: 'contactLabel' },
                'Imi\u0119: ',
                this.props.item.firstName
            ),
            React.createElement(
                'a',
                { href: 'mailto:' + this.props.item.email },
                this.props.item.email
            )
        );
    }
});
'use strict';

var ContactForm = React.createClass({
    displayName: 'ContactForm',

    propTypes: {
        contact: React.PropTypes.any.isRequired
    },

    render: function render() {
        return React.createElement(
            'form',
            { className: 'container form-horizontal col-xs-12 row contactForm' },
            React.createElement('input', {
                className: 'form-control',
                type: 'text',
                placeholder: 'Imię',
                value: this.props.contact.firstName
            }),
            React.createElement('input', {
                className: 'form-control',
                type: 'text',
                placeholder: 'Nazwisko',
                value: this.props.contact.lastName
            }),
            React.createElement('input', {
                className: 'form-control',
                type: 'text',
                placeholder: 'Email',
                value: this.props.contact.email
            }),
            React.createElement(
                'button',
                {
                    className: 'btn btn-primary',
                    type: 'submit' },
                'Dodaj kontakt'
            )
        );
    }
});
'use strict';

var Contacts = React.createClass({
  displayName: 'Contacts',


  render: function render() {
    var contacts = this.props.items.map(function (contact) {
      return React.createElement(Contact, { key: contact.id, item: contact });
    });

    return React.createElement(
      'ul',
      { className: 'row container contactsList' },
      contacts
    );
  }
});
'use strict';

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

//# sourceMappingURL=script-compiled.js.map