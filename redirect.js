// import the url variable from the popup
import url from "./popup/popup.js";

// I want to see what url is
console.log(url);
// If we have a url input, then just got there.
if (url != undefined){
    location = url;
} else {
    // If no url, we just get a blank screen...
    console.log("no new tab");
}



```
if (url != undefined){
    // let gives us block scope, so we need to only ever define
    let URL;
    URL = url;
}

// If we have a url, then we define the location.
if (url != undefined){
    location="https://www.yahoo.co.jp/";
}
```
