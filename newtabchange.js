/*
So I want to detect if a new tab was opened, and then change the url to be something I set. 
For now I will set the url manually and I can create popup later.
*/


// Check to see if this file is even running:
console.log("running");


// Runs when new tab is created
function handleCreated(tab) {
    console.log("New tab!!");
}

// We pass function in here, but what about parameter?
// getting "browser.tabs is undefined" here:
browser.tabs.onCreated.addListener(handleCreated);
