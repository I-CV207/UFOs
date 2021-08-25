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

function handleClick(){
    //Grab the datetime value from the filter
    let date=d3.select("#datetime").property("value");
    //select. is often used in D3. It will select the very first element that matches our selector string "#datetime"
    //We are telling D3 to look for the #datetime id in the HTML tags
    //with .property("value") we are telling D3 to grab the information and hold it in the "date" variable
    let filteredData=tableData;
    
    //Check to see if a daate was entererd and filter the data using that date
    if(date){
        filteredData=filteredData.filter(row=>row.datetime===date);
    }
    //The .filter() method: row => row.datetime === date)
    //This line is what applies the filter to the table data. 
    //It's basically saying, "Show only the rows where the date is equal to the date filter we created above." 
    //The triple equal signs test for equality, meaning that the date in the table has to match our filter exactly.

    //Rebuild the table using the filtered data
    //@NoTE:if no date was entered, then filteredData will just be the original tableData
    buildTable(filteredData)
}    
    //Attach an event to listen for the form button
    d3.selectAll("#filter-btn").on("click",handleClick);
    //Our selector string contains the id for another HTML tag. 
    //.on("click", handleClick);, we're telling D3 to execute our handleClick() function when the button with an id of filter-btn is clicked.

    //Build the table when the page loads
    buildTable(tableData);