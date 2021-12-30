# mixcloud-live-data

Pulls data from Mixcloud API for displaying followers, etc on Mixcloud Live Streams.

This isn't foolproof but I'm pretty sure they're not going to change how followers works... 


but the entire functionality is predicated on the list of followers obtained via the API (which is the same list on your followers page) being in most recent order (as it is at the time of writing).


# Requirements
- Node >= v14
- If Windows, preferably Windows Subsystem for Linux (WSL)

For npm dependencies, please view package-lock.json.

# How to Use:

1. Clone or download & extract zip archive.

2. Run `npm install` from a terminal (or Command Prompt/PowerShell if you're into that)

3. Copy or rename the .env.template file to .env

4. Fill in the data in .env:

    a. USERNAME = Your Mixcloud username

    b. FILE_DIR = Where you want to save your output text files for input into OBS/StreamLabels/whatever

    c. FOLLOWER_FILE = Most Recent Follower - Name of the file ending in .txt that you want to save the most recent follower's name to. I use `follower.txt`.

    d. API_URL = This should remain https://api.mixcloud.com/ unless it changes in the future.

    e. UPDATE_TIME = Amount of time in seconds to query the API and update the data. 60 is provided as default, and recommended as to not get rate limited by Mixcloud API.

5. Navigate to the folder and run the app with `node index.js`

6. Add all of the files as text in your OBS Scenes/StreamLabels/whatever and however you wish to use it.

# What's next?
I dunno? I'm considering the following, but Mixcloud isn't Twitch with a bunch of user interactivity yet.
- Recent Subscriber
- Follower count for like a chart thing?
- Stream Title?
- Stream Tags?

# Like this?

https://ko-fi.com/lkhetzel to buy me a coffee or beer.

or

Check out my streams and sets on Mixcloud: https://mixcloud.com/lkhetzel

# How to contribute:
1. Check out code
2. Make modifications
3. Submit PR.