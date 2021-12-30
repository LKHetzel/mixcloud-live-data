// mixcloud-get-data
// Does API calls to Mixcloud to get data to display on your stream.

const { USERNAME, FILE_DIR, FOLLOWER_FILE, API_URL, UPDATE_TIME } = require("./config");
const axios = require('axios');
var fs = require('fs');

time = UPDATE_TIME * 1000
console.log('Running Mixcloud Data Query Server - CTRL-C to exit.');
console.log("Updating every " + UPDATE_TIME + " seconds");

function checkDir() {
  try {
    if (fs.existsSync(FILE_DIR)) {
      console.log("Directory exists, continuing...");
    } else {
      console.log(`Directory does not exist. If network path, ensure mounted at ${FILE_DIR} and try again.`);
      process.exit(1);
    }
  } catch(e) {
    console.log("An unknown error occured");
    process.exit(1);
  }
}

function getRecentFollower() {
axios.get(`${API_URL}${USERNAME}/followers/?limit=1`)
  .then(response => {
    data = (JSON.parse(JSON.stringify(response.data)));
    name = (data.data[0].name);
    console.log('\n' + "Most Recent Follower is: " + name);
    fs.writeFile( FILE_DIR + FOLLOWER_FILE, name, function (err) {
      if (err) throw err;
      console.log('Wrote user ' + name + ' to file: ' + FILE_DIR + FOLLOWER_FILE);
    });
})};




// Loop of functions
function runAll() {
getRecentFollower();
}

// Main Loop
checkDir(); //Check for directory existence.
runAll(); //Initial Refresh on server start for most recent data.
setInterval(runAll, time);