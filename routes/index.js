const express = require('express');
const router = express.Router();
const instagram = require('./util/instagram');
const defaults = require('./../config/defaults');

/* GET home page. */

router.get('/getImages', async function(req, res, next) {
    const _limit = 20;
    const _hashtag = defaults.INSTAGRAM_DEFAULT_HASHTAG;

    const result = await instagram(_hashtag, _limit, true);
    res.send(result);
});

router.get('/getMeta', async function(req, res, next) {
    res.send({
        hashtag: `#${defaults.INSTAGRAM_DEFAULT_HASHTAG}`, 
        links: defaults.TITLE_BAR_LINKS
    });
});

router.get('/favicon.ico', (req, res) => res.status(204));

module.exports = router;