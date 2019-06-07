# Apty Licence

This is a page that allows user to generate licence keys for individual applications managed by Apty.

## Build
- `npm install` to install the dependencies
- `node server.js` to startup a server on port 5000

## Fields
- `Customer Name` the name of the customer for which the licence is being generated
- `Application Name` the name of the application
- `Uri` the URI of the application
- `Admins Count` the maximum number of administrators; default is 1
- `Valid To` the date of the licence expiration

Once the fields are filled and Generate licence button is clicked, the licence will be displyed on the screen.