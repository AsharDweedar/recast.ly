class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      list: this.props.exampleVideoData,
      current: this.props.exampleVideoData[0]
    }
  }

  searcher (query)  {
    var that = this;
    this.props.searchYouTube({
      key: window.YOUTUBE_API_KEY,
      max: 5,
      query: query
    }, (items) => {
      that.setState({
        list: items
      });
      changeCurrent(0)
    })
  }

  changeCurrent (ind) {
    this.setState({
      current: this.state.list[ind]
    })
  }

  render ()  {
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
