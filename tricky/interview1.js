const a =12
console.log(a*12);
console.log(a**12); //exipontenital

const salary = () => {
    salaryData =2000
    console.log(salaryData, "salary");
}
salary()
// var (Implicit Global Variable Assignment)
const salary = () => {
    salaryData = 2000;  // Implicit global variable assignment
    console.log(salaryData, "salary");
}
salary();  // Outputs: 2000 salary
console.log(salaryData);  // Outputs: 2000 (global variable)


