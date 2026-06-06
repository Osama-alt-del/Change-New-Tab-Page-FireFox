
// Then we are going to get the url from the local storage and then change the url to the url that we set.
browser.storage.local.get("url").then((result) => {
    if (result.url) {
        location = result.url;
    }
});
