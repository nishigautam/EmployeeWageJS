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
 const NUM_OF_WORKING_DAYS = 20;

let empHrs = 0;
empWageCheck = Math.floor(Math.random() * 10) % 3;
switch (empWageCheck) {
    case IS_PART_TIME :
        empHrs = PART_TIME_HRS ;
        break;
    case IS_FULL_TIME :
        empHrs = IS_FULL_TIME ;
        break;
    default :
        empHrs = 0;
}

let empWage = empHrs * WAGE_PER_HR;
console.log("UC2 :Employee Wage :- " + empWage);

/**
 * refactored the calculating empWage in function
 */
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
//let empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHrs(empCheck);
empWage = empHrs * WAGE_PER_HR;
console.log("UC3 :[Refactored]Employee Wage :- " + empWage);

/**
 * calculating monthly wage
 */
 let empHours = 0;
 for (let day =0; day < NUM_OF_WORKING_DAYS; day++) {
     //let empCheck = Math.floor(Math.random() * 10) % 3;
     empHours = empHours + getWorkingHrs(empCheck);
 }
 
 let employeeWage = empHours * WAGE_PER_HR ;
 console.log("UC4: Total Hours :- " + empHours + "\nEmployee Wage: " + employeeWage);

 /**
  * Calculating Wages till Number of Working days.
  */

  const MAX_HRS_IN_MONTH = 160;
  //const NUM_OF_WORKING_DAYS = 10;

  let totalEmpHrs = 0;
  let totalWorkingDays = 0;
  
  while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
      totalWorkingDays++;
      let empCheckRandom = Math.floor(Math.random() * 10) % 3;
      totalEmpHrs += getWorkingHrs(empCheckRandom);
  }
  let empSalary = totalEmpHrs * WAGE_PER_HR;
  console.log("UC5 : Total Days:- " + totalWorkingDays + "\nTotal Hours: " + totalEmpHrs + "\nEmployee Wage: " + empSalary);


/**
 * Store Daily Wage in a Array
 */
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HR;
}

let empDailyWageArray = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays <= NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    empHrs = getWorkingHrs(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calcDailyWage(empHrs));
}

 employeeWage = calcDailyWage(totalEmpHrs);
console.log("UC6: Total Days :- " + totalWorkingDays + "\nTotal Hours :- " + totalEmpHrs 
+ "\nEmployee Wage :- " + employeeWage );


/**
 * UC7 : Array Helper Functions
 */
let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage = totEmpWage + dailyWage;
}

//Calculating total wage using array forEach

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