const IS_ABSENT = 0;
/**
 * checkRandom employee is absent or present 
 */
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("UC1 : Employee is Absent");
    return;
} else {
    console.log("UC1 : Employee is Present");
}

/**
 * calculating employee wage
 */
 const IS_PART_TIME = 1;
 const IS_FULL_TIME = 2;
 const PART_TIME_HRS = 4;
 const FULL_TIME_HRS = 8;
 const WAGE_PER_HR = 20;
 const MAX_HRS_IN_MONTH = 160;
 const NUM_OF_WORKING_DAYS = 20;
 var empDailyWageArray = new Array();
 var empDailyWageMap = new Map();

 function getWorkingHrs(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME :
            return PART_TIME_HRS;
        case IS_FULL_TIME :
            return FULL_TIME_HRS;
        default :
            return 0;
    }
}
//Storing Daily Wage in a Map

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HR;
}

var totalEmpHrs = 0;
var totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 2;
    let empWorkingHrs = getWorkingHrs(empCheck);
    totalEmpHrs += empWorkingHrs;
    empDailyWageArray.push(calcDailyWage(empWorkingHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empWorkingHrs));
}

console.log(empDailyWageMap);
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
let employeeWage = calcDailyWage(totalEmpHrs);
console.log("Total Working Days : " + totalWorkingDays + 
"\nTotal Working Hours: " + totalEmpHrs + "\nEmployee Wage : " + employeeWage);
console.log(empDailyWageMap);

/**
 * UC7 : Array Helper Functions
 */
let totEmpWage = 0;
function sum(dailyWage) {
    return totEmpWage += dailyWage;
}

//Calculating total wage using array forEach traversal 
empDailyWageArray.forEach(sum);
console.log("UC7(a) : Total Days :- " + totalWorkingDays + 
"\n Total Hours:- " + totalEmpHrs + "\nEmployee Wage :- " + totEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage ;
}
console.log("UC7(a) : Employee Wage with reduce :- " +
empDailyWageArray.reduce(totalWages, 0));

// Show the day along with Daily Wage using Array Map Helper Function

let dailyCount = 0;
function mapDailyWithWage(dailyWage) {
    dailyCount++;
    return dailyCount + " = " + dailyWage;
}
let mapDailyWithWageArray = empDailyWageArray.map(mapDailyWithWage);
console.log("UC7(b) : Daily Wage Map: " + mapDailyWithWageArray);

//Display Days when Full time Wage of 160 were earned
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

let fullDayWageArray = mapDailyWithWageArray.filter(fullTimeWage);
console.log("UC7(c) : Daily Wage Filter when Fulltime Wage Earned : " + fullDayWageArray);

//find first occurrence when fullTimeWage was earned using find func

function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7(d) : First time Fulltime Wgae earned on Day: " 
+ mapDailyWithWageArray.find(findFullTimeWage));

//check if Each Element of Fulltime Wage is Truely holding Full time wage

function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7(e) : Check all element have full Time Wage : " 
+ fullDayWageArray.every(isAllFulltimeWage));

// Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC7(f) : Check if Any PartTime Wage : " 
+ mapDailyWithWageArray.some(isAnyPartTimeWage));

// Find the number of days the Employee Worked

function totalDaysWorked(numOfDays, dailyWage) {
    if(dailyWage > 0) 
        return numOfDays+1;
    return numOfDays;
}

console.log("UC7(g) : Number of Days Employee Worked : " 
+ empDailyWageArray.reduce(totalDaysWorked, 0));

/**
 * Refactor UC7 
 */
const findTotal = (totalValue, dailyValue) => {
    return totalValue + dailyValue;
}

var empDailyHrsMap = new Map();

let totalHrs = Array.from(empDailyHrsMap.values()).filter(dailyHours => dailyHours > 0).reduce(findTotal, 0);
let totalSalary = empDailyWageArray.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("UC7A[Refactored] : Wage with Arrow Function : " 
+ "Total Hours : " + totalHrs + " Total Wages: " + totalSalary );

let notWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

empDailyHrsMap.forEach((value, key, map) => {
    if (value == 8)
        fullWorkingDays.push(key);
    else if (value == 4) 
        partWorkingDays.push(key);
    else
        notWorkingDays.push(key);
});
console.log("Full Working Days: " + fullWorkingDays);
console.log("Part Working Days: " + partWorkingDays);
console.log("Non working Days: " + notWorkingDays);
