App = React.createClass({
    getInitialState: function(){
        return {
            loading: true,
            searchingText: '',
            gif: {}    
        };
    },

handleSearch: function(searchingText) {  // 1.
    this.setState({
      loading: true  // 2.
    });
    this.getGif(searchingText, function(gif) {  // 3.
      this.setState({  // 4
        loading: false,  // a
        gif: gif,  // b
        searchingText: searchingText  // c
      });
    }).bind(this);
  },
getGif: function(searchingText, callback) {  // 1.
    var GIPHY_API_URL = 'http://api.giphy.com';
    var GIPHY_PUB_KEY = 'dc6zaTOxFJmzC';
    var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;  // 2.
    var xhr = new XMLHttpRequest();  // 3.
    xhr.open('GET', url);
    xhr.onload = function() {
        if (xhr.status === 200) {
           var data = JSON.parse(xhr.responseText).data; // 4.
            var gif = {  // 5.
                url: data.fixed_width_downsampled_url,
                sourceUrl: data.url
            };
            callback(gif);  // 6.
        }
    };
    xhr.send();
},

    render: function() {
        var styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%'
        };

        return(
            <div style={styles}>
                <h1>Wyszukiwarka Gif</h1>
                <p>znajdz swoje ulubione gify</p>
                <Search 
                    onSearch={this.handleSearch}
                />
                <Gif
                    loading={this.state.loading}
                    url={this.state.gif}
                    sourceUrl={this.state.gif.sourceUrl}    
                 />
                </div>
        )
    }

});