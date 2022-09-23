// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers(){
    let firstTwoDrivers = drivers.slice(0,2)
    return firstTwoDrivers
}

function returnLastTwoDrivers(){
    let lastTwoDrivers = drivers.slice(2,4)
    return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(x){
    return x*4
}