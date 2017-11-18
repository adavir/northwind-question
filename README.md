# northwind-question

Have a look at the following web service 

http://services.odata.org/V3/Northwind/Northwind.svc/

Its an OData service, based on the northwind database model. We want to get the following information into a CSV file. 

The total number of orders made each territory (based on the employee that made that order). So for example

| Territory | NumberOfOrders |
|---|---|
| Providence |10 |
| Edison | 7 |
| New York | 980 |

There should only be one territory per line. Code should be Node.js format. All information you need about northwind should be available online.
