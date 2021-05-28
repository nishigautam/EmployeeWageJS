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
console.log("Employee Wage : " + empWage);