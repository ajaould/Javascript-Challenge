// from data.js
var tableData = data;

// YOUR CODE HERE!

//make a function 
function loadTable(table){
// Create empty arrays to store the dish and spice values
var datetime = [];
var city = [];
var state = [];
var country = [];
var shape = [];
var durationMinutes = [];
var comments = [];

// Iterate through each recipe object
table.forEach((data) => {

  // Iterate through each key and value
  Object.entries(data).forEach(([key, value]) => {

    // Use the key to determine which array to push the value to
    if (key === "datetime") {
      datetime.push(value);
    }
    else if (key == "city") {
        city.push(value)
    }
    else if (key == "state") {
        state.push(value)
    }
    else if (key == "country") {
        country.push(value)
    }
    else if (key == "shape") {
        shape.push(value)
    }
    else if (key == "durationMinutes") {
        durationMinutes.push(value)
    }
    else {
      comments.push(value);
    }
   });
});

// console.log(datetime)

var table = d3.select("table");
var tbody = d3.select("tbody");
for (var i = 0; i < datetime.length; i++) {
    var row = tbody.append("tr");
    row.append("td").text(datetime[i]);
    row.append("td").text(city[i]);
    row.append("td").text(state[i]);
    row.append("td").text(country[i]);
    row.append("td").text(shape[i]);
    row.append("td").text(durationMinutes[i]);
    row.append("td").text(comments[i]);
}
}

loadTable(tableData)

var button = d3.select("#filter-btn");
var form = d3.select("#container")
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
    d3.select("tbody").html("")
    // Prevent the page from refreshing
 //   d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
      
    var filteredData = tableData.filter(data => data.datetime === inputValue);
  
    console.log(filteredData);

    loadTable(filteredData);
    
}

/*
for (i = 0; i < datetime.length; i++) {
    var fullname = tableData[i].getElementsByTagName("td");
    if (fullname === inputValue) {
        tableData[i].style.display = "";
    } 
    else {
        tableData[i].style.display = "none";
    }
}

*/