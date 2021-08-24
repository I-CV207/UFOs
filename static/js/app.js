// import the data from data.js
const tableData=data;
// Reference the HTML table using d3
var body=d3.select("tbody");
// With this code we:
// 1. Declare a variable, tbody
// 2. Use d3.select to tell JavaScript to look for the <tbody> tags in the HTML

function buildTable(data){
    tbody.html("");  
    //This function does the following:
    //Loops through each object in the array
    //Appends a row to the HTML table
    //Adds each value from the object into a cell
    data.forEach((dataRow) => {
        let row=tbody.append("tr");
        //this code tells JavaScript to find the <tbody> tag within the HTML and add a table row("tr")
        Object.values(dataRow).forEach((val)=>{
        //Obaject.values, tells JavaScript to reference one object from the array UFO sightnings
        //By addding dataRow as the argument we are saying that we want the values to go into dataRow.
        //We've added forEach((val) to specify that we want one object per row.
        let cell=row.append("tr");
    //with this line we've set up the action of appending data into a table data tag(<td>)
        cell.text(val)
        }
        );
    });
}
