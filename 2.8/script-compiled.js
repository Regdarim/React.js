'use strict';

App = React.createClass({
    displayName: 'App',

    getInitialState: function getInitialState() {
        return {
            loading: true,
            searchingText: '',
            gif: {}
        };
    },

    handleSearch: function handleSearch(searchingText) {
        // 1.
        this.setState({
            loading: true // 2.
        });
        this.getGif(searchingText, function (gif) {
            // 3.
            this.setState({ // 4
                loading: false, // a
                gif: gif, // b
                searchingText: searchingText // c
            });
        }).bind(this);
    },
    getGif: function getGif(searchingText, callback) {
        // 1.
        var GIPHY_API_URL = 'http://api.giphy.com';
        var GIPHY_PUB_KEY = 'dc6zaTOxFJmzC';
        var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText; // 2.
        var xhr = new XMLHttpRequest(); // 3.
        xhr.open('GET', url);
        xhr.onload = function () {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText).data; // 4.
                var gif = { // 5.
                    url: data.fixed_width_downsampled_url,
                    sourceUrl: data.url
                };
                callback(gif); // 6.
            }
        };
        xhr.send();
    },

    render: function render() {
        var styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%'
        };

        return React.createElement(
            'div',
            { style: styles },
            React.createElement(
                'h1',
                null,
                'Wyszukiwarka Gif'
            ),
            React.createElement(
                'p',
                null,
                'znajdz swoje ulubione gify'
            ),
            React.createElement(Search, {
                onSearch: this.handleSearch
            }),
            React.createElement(Gif, {
                loading: this.state.loading,
                url: this.state.gif,
                sourceUrl: this.state.gif.sourceUrl
            })
        );
    }

});
'use strict';

var GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';
var styles = {
  minHeight: '310px',
  margin: '0.5em'
};

Gif = React.createClass({
  displayName: 'Gif',

  getUrl: function getUrl() {
    return this.props.sourceUrl || GIPHY_LOADING_URL;
  },
  render: function render() {
    var url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;

    return React.createElement(
      'div',
      { style: styles },
      React.createElement(
        'a',
        { href: this.getUrl(), title: 'view this on giphy', target: 'new' },
        React.createElement('img', { id: 'gif', src: url, style: { width: '100%', maxWidth: '350px' } })
      )
    );
  }
});
'use strict';

Search = React.createClass({
  displayName: 'Search',
  getInitialState: function getInitialState() {
    return {
      searchingText: ''
    };
  },

  handleChange: function handleChange(event) {
    var searchingText = event.target.value;
    this.setState({ searchingText: searchingText });

    if (searchingText.length > 2) {
      this.props.onSearch(searchingText);
    }
  },

  handleKeyUp: function handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.props.onSearch(this.state.searchingText);
    }
  },

  render: function render() {
    var styles = { fontSize: '1.5em', width: '90%', maxWidth: '350px' };

    return React.createElement('input', {
      type: 'text',
      onChange: this.handleChange,
      onKeyUp: this.handleKeyUp,
      placeholder: 'Tutaj wpisz wyszukiwan\u0105 fraz\u0119',
      style: styles,
      value: this.state.searchTerm
    });
  }
});
'use strict';

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

//# sourceMappingURL=script-compiled.js.map