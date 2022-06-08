// Code your solution in this file!
const returnFirstTwoDrivers = function ( drivers) {
  return drivers.slice(0,2); 
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = 
[returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multilyValue) {
    return function (value) {
        return multilyValue * value;
    }
}

function fareDoubler(fare) {
    return fare*2
}

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (arraysOfDrivers, returnDrivers) {
    let selectingDrivers = returnDrivers(arraysOfDrivers);
    return selectingDrivers;
}