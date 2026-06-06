
document.addEventListener("DOMContentLoaded", () => {
    // So I think this function returns a promis, and when the promise is resolved, we can run the callback, which is the anonymous function that we have written here.
    //just in case I want to search this later [??]
    browser.storage.local.get("url").then((result) => {
        if (result.url) {
            document.querySelector(".currenURL").textContent = result.url;
        }
    });

    // we only set using hte browser local storage if there is a click, and if there is an input
    document.querySelector("button").addEventListener("click", () => {
        const input = document.getElementById("inputURL").value;
        if (input) {
            // This part here I don't really understand [??]
            browser.storage.local.set({ url: input }).then(() => {
                document.querySelector(".currenURL").textContent = input;
            });
        }
    });
});
