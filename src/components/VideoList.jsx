// class VideoList extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render () {
//     console.log("this.props.videos")
//     console.log(this.props.videos)
//     var indents = [];
//     for (var i = 0; i < this.props.videos; i++) {
//       indents.push(<VideoListEntry video={this.props.videos[i]}/>);
//     }
//     return (
//       <div className="video-list media">
//       {indents}
//       </div>)
//   }
// }
var VideoList = ({videos}) => {
  var i = 0;
  return (
    <div className="video-list media">
    {videos.map(video => <VideoListEntry video={videos[i++]} key={i}/>)}
    </div>)
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
