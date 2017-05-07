var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.any.isRequired
    },

    render: function() {
        return (
            React.createElement('form', {
                    className: 'container form-horizontal col-xs-12 row contactForm'
                },
                React.createElement('input', {
                    className: 'form-control',
                    type: 'text',
                    placeholder: 'Imię',
                    value: this.props.contact.firstName,
                }),
                React.createElement('input', {
                    className: 'form-control',
                    type: 'text',
                    placeholder: 'Nazwisko',
                    value: this.props.contact.lastName,
                }),
                React.createElement('input', {
                    className: 'form-control',
                    type: 'email',
                    placeholder: 'Email',
                    value: this.props.contact.email,
                }),
                React.createElement('button', {
                    type: 'submit',
                    className: 'btn btn-primary'
                }, "Dodaj kontakt")
            )
        )
    },
})