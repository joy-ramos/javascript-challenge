// from data.js
var tableData = data;

// YOUR CODE HERE!
var table1 = d3.select("#ufo-table");
var tbody = d3.select("#ufo-table > tbody");
var filterButton = d3.select("#filter-btn");

// console.log(tbody);

appendTable(tableData);

function appendTable(v_data){

    v_data.forEach(function(sightingData){

        var row = tbody.append("tr");
    
        Object.entries(sightingData).forEach(function([key, value]){
            //console.log(key, value);
    
            var cell = row.append("td");
            cell.text(value);
            
        });
    
    });

};


filterButton.on("click", function(){

    var filter = {};

    //Clears current table
    d3.select("#ufo-table > tbody").text("");

    var inputElement = d3.select("#datetime").property("value");

    if (d3.select("#datetime").property("value") !== "")
        {
            filter["datetime"] = d3.select("#datetime").property("value");
        }

    if (d3.select("#city").property("value") !== "")
        {
            filter["city"] = d3.select("#city").property("value");
        }

    if (d3.select("#state").property("value") !== "")
        {
            filter["state"] = d3.select("#state").property("value");
        }

    if (d3.select("#country").property("value") !== "")
        {
            filter["country"] = d3.select("#country").property("value");
        }

    if (d3.select("#shape").property("value") !== "")
        {
            filter["shape"] = d3.select("#shape").property("value");
        }

    console.log(filter);


    var filteredData = tableData.filter(function(item) {
        for (var key in filter) {
          if (item[key] === undefined || item[key] != filter[key])
            return false;
        }
        return true;
      });

    console.log(filteredData);

    appendTable(filteredData);
    
});

