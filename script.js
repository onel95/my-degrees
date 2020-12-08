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
                displayTable();
            }
            else {
                console.log("Request status was not 200.");
            }
        } 
    };

    // This function populates the table and injects it into the HTML.
    function displayTable() {
        // Parse the JSON file.
        let myArray = JSON.parse(httpRequest.responseText).my_degrees;

        // Refer to the table tag.
        let table = document.getElementById("table");
        // Create the table elements for the header of the table.
        let tr = document.createElement("tr");
        let thSchool = document.createElement("th");
        let thMajor = document.createElement("th");
        let thType = document.createElement("th");
        let thYear = document.createElement("th");

        // Insert the four titles into the heading.
        thSchool.innerHTML = "School";
        thMajor.innerHTML = "Major";
        thType.innerHTML = "Type";
        thYear.innerHTML = "Year";

        // Append the created data into the HTML tags we created.
        table.appendChild(tr);
        tr.appendChild(thSchool);
        tr.appendChild(thMajor);
        tr.appendChild(thType);
        tr.appendChild(thYear);
        
        // For loop to create HTML tags and populate them row by row.
        for (var i = 0; i < myArray.length; i++) {
            // Create a new row element and four data elements.
            let tr = document.createElement("tr");
            let tdSchool = document.createElement("td");
            let tdMajor = document.createElement("td");
            let tdType = document.createElement("td");
            let tdYear = document.createElement("td");
            // Populate them with data from the parsed JSON file.
            tdSchool.innerHTML = myArray[i].degree.school;
            tdMajor.innerHTML = myArray[i].degree.major;
            tdType.innerHTML = myArray[i].degree.type;
            tdYear.innerHTML = myArray[i].degree.year;
            // Insert the data into our table tag.
            table.appendChild(tr);
            tr.appendChild(tdSchool);
            tr.appendChild(tdMajor);
            tr.appendChild(tdType);
            tr.appendChild(tdYear);
        }
        // Add the data we just populated into the HTML document.
        document.getElementById("table").innerHTML = table.innerHTML;
    }
};
