class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      list: this.props.exampleVideoData,
      current: this.props.exampleVideoData[0]
    }
  }

  searchYouTube (query)  {
    var that = this;
    $.ajax({
      method: 'GET',
      url: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${window.YOUTUBE_API_KEY}&maxResults=5&q=${query}`,
      success: ({items}) => {
        that.setState({
          list: items,
          current: items[0]
        })
      },
      error: (error) => {
        console.log("error :")
        console.log(error)
      }
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
          <Nav searcher={this.searchYouTube.bind(this)}/>
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
