var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.any.isRequired
    },

    render: function() {
        return(
        <form className={'container form-horizontal col-xs-12 row contactForm'}>
            <input 
                className={'form-control'}
                type={'text'}
                placeholder={'Imię'}
                value={this.props.contact.firstName}
            />
            <input 
                className={'form-control'}
                type={'text'}
                placeholder={'Nazwisko'}
                value={this.props.contact.lastName}
            />
            <input 
                className={'form-control'}
                type={'text'}
                placeholder={'Email'}
                value={this.props.contact.email}
            />
            <button 
                className={'btn btn-primary'}
                type={'submit'}>
                Dodaj kontakt
            </button>
        </form>
        );
    }
});