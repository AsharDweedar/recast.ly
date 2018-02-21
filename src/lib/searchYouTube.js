var searchYouTube = ({key, max, query}, callback) => {
  $.ajax({
    method: 'GET',
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&maxResults=${max}&q=${query}`,
    success: ({items}) => {
      callback(items);
    },
    error: (error) => {
      console.log("error :")
      console.log(error)
    }
  })
};

window.searchYouTube = searchYouTube;
