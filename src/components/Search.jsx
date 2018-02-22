var Search = ({searcher}) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" id="searcher"/>
    <button
      className="btn hidden-sm-down"
      onClick={() => searcher({
    	query:$("#searcher").val(),
    	key: window.YOUTUBE_API_KEY,
    	max: 5
    })}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
