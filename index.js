// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

console.log(returnFirstTwoDrivers(['One', 'Two', 'Three', 'Four']))

const returnLastTwoDrivers = function(drivers) {

    let i = drivers.length;
    return drivers.slice(i -2 ,i);
}

console.log(returnLastTwoDrivers(['One', 'Two', 'Three', 'Four', 'Five']))

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

console.log(selectingDrivers);

const createFareMultiplier = function(integer) {
    return function(fare) {
        return fare * integer
    }
}

const fareDoubler = createFareMultiplier(2);

console.log(fareDoubler(4));

const fareTripler = createFareMultiplier(3);

console.log(fareTripler(3));

const selectDifferentDrivers = function(drivers, selectingDrivers) {
    return selectingDrivers(drivers)
}

console.log(selectDifferentDrivers(['One', 'Two', 'Three', 'Four', 'Five'], returnLastTwoDrivers));