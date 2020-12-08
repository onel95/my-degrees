// Starts the program logic when the button is clicked.
function runClick() {
    var httpRequest;
    document.getElementById("showInfo").onclick = 
    sendRequest("myDegrees.json");


// Checks validity of request and its status and sends it.
function sendRequest(url) {
    httpRequest = new XMLHttpRequest();
    // Check if instance was created.
    if (!httpRequest) {
        console.log("Failed to create an XMLHttp instance.");
        return false;
    }

    // Call the arrow function when the state of the request changes.
    httpRequest.onreadystatechange = showContents;

    // Make the request as GET and to the json file. 
    httpRequest.open("GET", url);
    // Send the request.
    httpRequest.send();
   }
    
    function showContents() {
        // Check if request is ready.
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            console.log("entered the first if.");
            // Check server response code. 200 means a successful call.
            if (httpRequest.status === 200) {
                document.getElementById("ajax-info").innerHTML = httpRequest.responseText;
            }
            else {
                console.log("Request status was not 200.");
            }
        }      
    };   
};
