# recast.ly

This is a project I completed as a student at [hackreactor](http://hackreactor.com).

# Up and running

- have to be installed:

    - live-server
    - eslint
    - npm

- install babel-cli 
```bash
npm install -g babel-cli
```

- command to compile:

```bash
babel . --out-dir compiled --presets=es2015,react --ignore=node_modules,compiled --source-maps inline
```
add : `--watch` to keep compiling after any change

- can get the page to re-render after each change with:
```bash
live-server # or: live-server index.html
```

- cretae the file `./src/config/youtube.js`  with the content:
```javascript
window.YOUTUBE_API_KEY = 'KEY'; //add key here
```


- run tests with:
```bash
npm test # this will run "test" command from package JSON:
# same as: live-server --open=./SpecRunner.html --port=8081
```


# Did:
- rendering App to the dom
- passing list of videos and one video to the stateless components to render it.
- get search button to request data from youtube
- render response data(dynamically)

# Tests:

- passes: 21
- failures: 1
- pending: 1

    why bending: calling `YOUTUBE_API` won't guarantee that data have the same shape always after the search; if a channel or list of videos appear in the search they won't have the videoId, instead they would have `channelId` ... saying: change it for "cats" would mostly give you a match (only array of videos not channels or lists)

# TODO:

- fix syntax or implementation to make the left tests pass
- handle empty items array from youtube response

# extra work:(TODO)

- Create a VideoDetails component that makes another request to the YouTube API and renders more complete video information to the page

- Create an auto-play toggle button that will automatically start playing the video selected from VideoList

- Give each video it's own unique url with the help of React Router

- Handle pagination of search results via the YouTube API

- Refactor searchYouTube to use the fetch function to make HTTP requests, instead of $.ajax

- Refactor your application to use Redux

- Integrate with the parse server from the chatterbox-client sprint to create a Twitch-like experience. You will need to build additional models, collections and views. (Don't let yourself be blocked by XSS, solve the XSS problem before it starts!)
Initially, use a single chat feed for the app.

- Then, refactor the chat feature so there is one chat room per video. When you select a video, that video's chat history loads. Only the currently selected video should be updating its chat messages. All others should only load when selected.

- Use a module loader like webpack, or SystemJS and refactor to use ES6 import and export instead of exposing components to the window and adding them as script tags