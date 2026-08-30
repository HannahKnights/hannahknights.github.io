
window.onload = (event) => {

    // duplicate feed
    var divClone = document.getElementById("feed").cloneNode(true);
    document.getElementById("feed-container").appendChild(divClone)

    const the_feed = document.getElementById("feed");

    const feedHeight = the_feed.scrollHeight / 2;
    console.log(feedHeight);
    //window.scrollTo(0, feedHeight);
    //window.scrollTo(0, feedHeight + 550);

    const start_img = document.getElementsByClassName('start')[1];
    const start_pos_top = start_img.getBoundingClientRect().y;
    window.scrollTo(0, start_pos_top - (start_img.height + 200));


    window.addEventListener("scroll", () => {

        const scroll_y = window.scrollY;
        const feed_h = the_feed.scrollHeight;
        const feed_cont_h = document.getElementById("feed-container").scrollHeight;
        const threshold = (feed_cont_h - feed_h) / 2;
        const window_h = window.innerHeight;

        const threshold_top = threshold;
        const threshhold_bottom = feed_cont_h - window_h;
        const reset_top = threshold_top + 1;
        const reset_bottom = threshhold_bottom - 1;

        if (scroll_y >= threshhold_bottom) {
            // too far down
            console.log('reached the bottom...')
            // console.log('scrollY...', scroll_y)
            // console.log('scroll to:', threshold_top)
            window.scrollTo(0, threshold_top);
        } else if (scroll_y < threshold_top) {
            // too far up
            console.log('reached the top...')
            // console.log('scrollY...', scroll_y)
            // console.log('scroll to:', threshold_top)
            window.scrollTo(0, reset_bottom);
        }
    });
}
