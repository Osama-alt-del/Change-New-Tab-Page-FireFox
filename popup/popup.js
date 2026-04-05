// At the start it's undefined, and we will check for undefined in other script.
// Logging works, yay
// console.log("test");
var url = undefined;
function changeURL(){
    element = document.getElementById("inputURL");
    url = element.value;
    // I wanna see what the value is
    console.log(url);
}

export {url};

