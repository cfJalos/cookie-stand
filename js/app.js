'use strict'
var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var overAllSales = 0;
var salesArray = [overAllSales];
var parentElement = document.getElementById('table');
var sixAmTotal = 0;
var sevenAmTotal = 0;
var eightAmTotal = 0;
var nineAmTotal = 0;
var tenAmTotal = 0;
var elevenAmTotal = 0;
var twelvePmTotal = 0;
var onePmTotal = 0;
var TwoPmTotal = 0;
var ThreePmTotal = 0;
var fourPmTotal = 0;
var fivePmTotal = 0;
var sixPmTotal = 0;
var sevenPmTotal = 0;
var allStores = [];
var AllStoresTotal = [sixAmTotal, sevenAmTotal, eightAmTotal, nineAmTotal, tenAmTotal, elevenAmTotal, twelvePmTotal, onePmTotal, TwoPmTotal, ThreePmTotal, fourPmTotal, fivePmTotal, sixPmTotal, sevenPmTotal];
console.log(sixAmTotal)
function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

//contructor for store

function Stores (location, minCustomer, maxCustomer, avgCookieSale) {
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  
  // push this to array
  allStores.push(this);
}

Stores.prototype.cookiesSales = function(){

  var tableRow = document.createElement('tr');
  // appt it to the parent element
  parentElement.appendChild(tableRow)

  //location table row
  var tableData = document.createElement('td');
    // give it content
    tableData.textContent = this.location;
    //append
    tableRow.appendChild(tableData);

    var totalCookies = 0;
  for (var i = 0; i < hoursArray.length; i++) {
  //random number per loop  
    var hour = getRandomNum(this.minCustomer, this.maxCustomer) * this.avgCookieSale;
    totalCookies += hour;
    salesArray[0] += Math.ceil(hour)
    //Add to All store per hour sale
    AllStoresTotal[i] += Math.ceil(hour);
   // create a tdz
    var tableData = document.createElement('td');

    // give it content
    tableData.textContent = `${Math.ceil(hour)}`;

    // append it to the DOM
    tableRow.appendChild(tableData);

    }
    //total Cookies
    var tableData = document.createElement('td');
    tableData.textContent = Math.ceil(totalCookies);
    tableRow.appendChild(tableData);
}

new Stores('Seattle', 23, 65 , 6.3);
new Stores('Tokyo', 3, 24 , 1.2);
new Stores('Dubai', 11, 38 , 3.7);
new Stores('Paris', 20, 38 , 4.6);
new Stores('Lima', 2, 16 , 4.6);

function generateHeader(){
  var tableRow = document.createElement('tr');
  // //append tr to parent element
  var tableHead = document.createElement('th');
  // //give it content store location
  tableHead.textContent = `Location`;
  // append
  tableRow.appendChild(tableHead);

  for (var i = 0; i < hoursArray.length; i++) {
    var tableHead = document.createElement('th');
    //create tablerow
    parentElement.appendChild(tableRow);
    // // create tablehead
    tableHead.textContent = hoursArray[i];
    //append to parent
    tableRow.appendChild(tableHead);
  }

    // //append tr to parent element
    var tableHead = document.createElement('th');
    // //give it content store location
    tableHead.textContent = `Total`;
    // append
    tableRow.appendChild(tableHead);
    }

generateHeader();
//table row

for(var i = 0; i < allStores.length; i++){
  allStores[i].cookiesSales();
}

function hourTotalSale() {

  var tableRow = document.createElement('tr');
  // appt it to the parent element
  parentElement.appendChild(tableRow)

  //location table row
  var tableData = document.createElement('td');
  // give it content
  tableData.textContent = `Total per hour`;
  //append
  tableRow.appendChild(tableData);

  for (var i = 0; i < hoursArray.length; i++){
   // create a td
   var tableData = document.createElement('td');
   // give it content
   tableData.textContent = AllStoresTotal[i];
   // append it to the DOM
   tableRow.appendChild(tableData);
  }
   // create a td
   var tableData = document.createElement('td');
   // give it content
   tableData.textContent = salesArray[0];

   // append it to the DOM
   tableRow.appendChild(tableData);

}
hourTotalSale()