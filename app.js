var northwindRepo = require("./northwindRepo.js")
var json2csv = require('json2csv');
var fs = require('fs');

northwindRepo.init("http://services.odata.org/V3/Northwind/Northwind.svc");

var territories = northwindRepo.getTerritories("Employees/Orders","TerritoryDescription,Employees/Orders/OrderID");


Promise.all([territories]).then(function(data){

  var territories = data[0];

  territories.forEach(function(territory) {
    territory.OrderCount = 0;
    territory.TerritoryDescription = territory.TerritoryDescription.trim();
    territory.Employees.forEach(function(employee){
        territory.OrderCount += employee.Orders.length;
    });

    
  });

  var csv = json2csv({ data: territories, fields: ["TerritoryDescription","OrderCount"] });

  fs.writeFile('csvFile.csv', csv);
  console.log("Complete");

  process.exit(0)

}).catch(function(ex){
  console.log(ex);
  process.exit(0)
});