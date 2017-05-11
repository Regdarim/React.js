var contacts = [
  {
    id: 1,
    firstName: 'Jan',
    lastName: 'Nowak',
    email: 'jan.nowak@example.com',
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@example.com',
  },
  {
    id: 3,
    firstName: 'Zbigniew',
    lastName: 'Koziol',
    email: 'zbigniew.koziol@example.com',
  },
  {
    id: 4,
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@example.com',
  },
  {
    id: 5,
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@example.com',
  },
  {
    id: 6,
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@example.com',
  }
];

var contactForm = {
  firstName: '', 
  lastName: '',
  email: ''
};

var App = React.createClass({
	render: function(){
		return(
		<div className = {'container App'}>
        <ContactForm contact={contactForm}/>
        <Contacts  items={contacts}/>
    </div>
			)
}
});
