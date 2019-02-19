if (true) {
    let scroe = 45;
}
// console.log(scroe);
let ashadApps = {
    texhFacts: {
        downloads: 150,
        activeDownloads: 30,
        reviews: 6,
        pinned: false
    },
    VideoSplitter: {
        downloads: 1000,
        log: function () {
            // console.log(this);
            function inner() {
                console.log(this);

            }

            inner();

        }

    }
}

// ashadApps.VideoSplitter.activeDownloads=380;
// ashadApps.VideoSplitter.pinned=true;

console.log(ashadApps.VideoSplitter.log());

// console.log(ashadApps.VideoSplitter);