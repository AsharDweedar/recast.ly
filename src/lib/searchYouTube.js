var searchYouTube = ({key, max, query}, callback) => {
  $.ajax({
    method: 'GET',
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&maxResults=${max}&q=${query}`,
    success: ({items}) => {
      callback(items);
    },
    error: (error) => {
      alert(JSON.parse(error.responseText).error.errors[0].reason)
      callback([]);
    }
  })
};

window.searchYouTube = searchYouTube;
