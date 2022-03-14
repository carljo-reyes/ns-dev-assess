# NetSuite Developer Assessment (Booth & Partners)
The solution is written in JavaScript and has one library dependency (uiid) for generation of Item Fulfillment IDs. **Node.js** (and **npm**) is required to test the solution

## Details
* The actual function to process the json data is written in **solution.js**. The function is named **createItemFulfillment**
* The main entry point of the application is **app.js** and does the following in order:
1. It imports **createItemFulfillment** and **order.js**
1. It executes the **createItemFulfillment** function with the data (object) from **order.js** as its *argument*, and stores the result in a variable
1. The result is output on the console

## Instructions
Clone the repo on your local machine
```
git clone https://github.com/carljo-reyes/ns-dev-assess
```

Install the dependency
```
npm install
```

Run the solution
```
node app
```
