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

    //Clears current table
    d3.select("#ufo-table > tbody").text("");

    var inputElement = d3.select("#datetime").property("value");
    
    var filteredData = tableData.filter(sighting => sighting.datetime === inputElement);
    console.log(filteredData);

    if (inputElement == "")
        {appendTable(tableData);}
    else
        {appendTable(filteredData);}

    
    
});

