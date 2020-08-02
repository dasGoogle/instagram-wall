var app = new Vue({
    el: '#app',
    data: {
        posts: [],
        hashtag: '', 
        links: []
    },
    filters: {
        truncate: function (string) {
            const limit = 100;
            string = string.split("\n")[0]
            if (string.length > limit) {
                return string.substr(0, 120) + "...";
            }
            return string;

        },
        timeBack: function (date) {
            moment.locale('de')
            return moment(date).fromNow();
        }
    }
})

function loadImages() {
    axios.get('/api/getImages').then(({ data }) => {
        const posts = [];
        i = 0;
        data.forEach((item, index) => {
            if (index === 0) {
                item.class = 'l6';
            } else if (index > 3) {
                item.class = 'l1';
            } else {
                item.class = 'l3';
            }
            if (index <= 12) {
                posts.push(item);
            }

        })
        app.posts = posts;
        console.log(app.posts);
    })
}
let i = 0;

function showTexts() {
    const { posts } = app;
    app.posts = [];
    posts.forEach((item, index) => {
        item.active = (i === index);

        app.posts.push(item);
    })
    i++;
    if (i >= app.posts.length) i = 0;
}

function loadMeta() {
    axios.get('/api/getMeta').then(({ data }) => {
        app.hashtag = data.hashtag;
        app.links = data.links;

    })

}

setInterval(loadImages, 15 * 60 * 1000);
loadImages();
loadMeta();
setInterval(showTexts, 10 * 1000);
