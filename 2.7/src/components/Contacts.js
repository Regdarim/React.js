var Contacts = React.createClass({

  render: function() {
    var contacts = this.props.items.map(contact => <Contact key={contact.id} item={contact} />)

    return (
      <ul className={'row container contactsList'}>
        {contacts}
      </ul>
    );
  }
});
