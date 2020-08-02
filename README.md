# Instagram Wall
![Screenshot](/.github/screenshot.jpg "Screenshot")

________________________


## Features

Open Source and free NodeJS Instagram social wall. Based on [Instagram Hashtag Scraper by mabc224](https://github.com/mabc224/instagram-hashtag-scraper).

* Displays Instagram posts by hashtag
* Different sizes for posts of different age
* Auto-reloads every 15 minutes
* Auto-Displays image captions as overlays
* Displays user names and avatars in top corner of each post


### Config
Use the config file located in `config/defaults.js` to set your hashtag and links in the title bar. 


### Setup

```
npm install
npm start
```

### Run Server

The web app is available at
* `http://localhost:3000`

The API additionally provides the following routes:
* `/api/getImages` returns JSON of the posts with the set hashtag
* `/api/getMeta` returns JSON of the set hashtag as well as title bar links 


