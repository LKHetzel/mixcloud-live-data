// mixcloud-get-data
// Does API calls to Mixcloud to get data to display on your stream.

const { USERNAME, FILE_DIR, FOLLOWER_FILE, API_URL } = require("./config");
const axios = require('axios');
var fs = require('fs');

function getRecentFollower() {
axios.get(`${API_URL}${USERNAME}/followers/?limit=1`)
  .then(response => {
    data = (JSON.parse(JSON.stringify(response.data)));
    name = (data.data[0].name);
    console.log("Most Recent Follower is: " + name);
    fs.writeFile( FILE_DIR + FOLLOWER_FILE, name, function (err) {
      if (err) throw err;
      console.log('Wrote ' + name + ' to file.');
    });
})};


getRecentFollower();