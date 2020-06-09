# mixcloud-live-data

Pulls data from Mixcloud API for displaying followers, etc on Mixcloud Live Streams

  

# How to Use:

1. Clone or download & extract zip archive.

2. Copy the .env.template file to .env

3. Fill in the data in .env:

    a. USERNAME = Your Mixcloud username

    b. FILE_DIR = Where you want to save your output text files for input into OBS/StreamLabels/whatever

    c. FOLLOWER_FILE = Most Recent Follower - Name of the file ending in .txt that you want to save the most recent follower's name to.

    d. API_URL = This should remain https://api.mixcloud.com/ unless it changes in the future.

    e. UPDATE_TIME = Amount of time in seconds to query the API and update the data. 60 is provided as default, and recommended as to not get rate limited by Mixcloud API.

4. Navigate to the folder and run the app with `node index.js`

5. Add all of the files as data in your OBS Scenes/StreamLabels/whatever.

  

# Like this?

https://ko-fi.com/lkhetzel to buy me a coffee or beer.

# How to contribute:
1. Check out code
2. Make modifications
3. Submit PR.