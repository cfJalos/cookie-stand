'use strict'
var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//random number generator
function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)); 
}

function cookiesSales(place){

  var totalCookies = 0;

  for (var i = 0; i < hoursArray.length; i++) {
   
  //random number per loop  
    var hour = getRandomNum(place.minCustomer, place.maxCustomer) * place.avgCookieSale;
        totalCookies += hour;
    var parent = document.getElementById(`${place.location}`);

    // create a DOM li
    var listItem = document.createElement('li');

    // give it conent
    listItem.textContent = `${hoursArray[i]}: ${Math.ceil(hour)} cookies`;

    // append it to the DOM
    parent.appendChild(listItem);

  }
  //total Cookies
  var listItemTotal = document.createElement('li');
  listItemTotal.textContent = `Total: ${Math.ceil(totalCookies)} cookies`;
  parent.appendChild(listItemTotal);
}

var seattle = {
  location : 'Seattle',
  minCustomer : 23 ,
  maxCustomer : 65 ,
  avgCookieSale : 6.3
  }


cookiesSales(seattle);

var tokyo = {
  location : 'Tokyo',
  minCustomer : 3 ,
  maxCustomer : 24 ,
  avgCookieSale : 1.2,
  }

cookiesSales(tokyo);

var dubai = {
  location : 'Dubai',
  minCustomer : 11 ,
  maxCustomer : 38 ,
  avgCookieSale : 3.7,
  }

cookiesSales(dubai);

var paris = {
  location : 'Paris',
  minCustomer : 20 ,
  maxCustomer : 38 ,
  avgCookieSale : 4.6,
  }

cookiesSales(paris);

var lima = {
  location : 'Lima',
  minCustomer : 2,
  maxCustomer : 16 ,
  avgCookieSale : 4.6,
  }

cookiesSales(lima);  