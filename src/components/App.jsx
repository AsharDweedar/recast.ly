class App extends React.Component {
  constructor (props) {
    super(props);
    var empty = {
      id: {videoId: ''},
      snippet: {title: '',description: '',thumbnails: {default: {url: ''}}}
    }
    this.state = {
      list: [empty, empty, empty, empty, empty],
      current: empty
    }
  }

  searcher (query)  {
    this.props.searchYouTube({
      key: window.YOUTUBE_API_KEY,
      max: 5,
      query: query
    }, (items) => {
      this.setState({
        list: items,
        current: items[0]
      });
    })
  }

  changeCurrent (ind)  {
    this.setState({
      current: this.state.list[ind]
    })
  }

  render ()  {
    var that = this;
    async function search() {
      await that.searcher("cats");
    }
    if (!this.state.current.id.videoId) {
      search();
    } 
    return (
      <div>
        <Nav searcher={this.searcher.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.current}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.list} changeCurrent={this.changeCurrent.bind(this)}/>
        </div>
      </div>)
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
