var searchYouTube = ({key, max, query}, callback) => {
  $.ajax({
    method: 'GET',
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&maxResults=${max}&q=${query}`,
    success: ({items}) => {
      callback(items);
    },
    error: (error) => {
      console.log("error :")
      alert(JSON.stringify(error.responseText.error.errors))
    }
  })
};

window.searchYouTube = searchYouTube;
