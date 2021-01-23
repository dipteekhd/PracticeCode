//PS: Calculate total salary
const MY_COMPANY = {
  dept1: [
    { name: "E1", salary: 100 },
    { name: "E2", salary: 200 }
  ],
  dept2: {
    sdept1: [
      { name: "E3", salary: 6000 },
      { name: "E4", salary: 2000 }
    ],
    sdept2: [
      { name: "E5", salary: 1000 },
      { name: "E6", salary: 4000 }
    ]
  },
  dept3: [
    { name: "E7", salary: 1000 },
    { name: "E8", salary: 2000 }
  ]
};
// O(n^2) + O(n) => O(n^2)
const salPerDep = {};
function calculateTotalSal() {
  for (const [depName, depDetails] of Object.entries(MY_COMPANY)) {
    if (Array.isArray(depDetails)) {
      salPerDep[depName] = depDetails.reduce((totalSal, emp) => {
        return (totalSal = totalSal + emp.salary);
      }, 0);
    } else {
      let totalSub = 0;
      for (const [, subDeptDetails] of Object.entries(depDetails)) {
        totalSub += subDeptDetails.reduce((totalSal, emp) => {
          return (totalSal = totalSal + emp.salary);
        }, 0);
      }
      salPerDep[depName] = totalSub;
    }
  }
}

calculateTotalSal();
console.log(salPerDep);
let CTC = 0;
for (const [name, sal] of Object.entries(salPerDep)) {
  CTC = CTC + sal;
}
console.log(CTC);

// department => node
function calculateRecursively(department) {
  if (Array.isArray(department)) {
    return department.reduce((total, emp) => {
      return total + emp.salary;
    }, 0);
  } else {
    let subTotal = 0;
    for (const [, subDep] of Object.entries(department)) {
      subTotal += calculateRecursively(subDep);
    }
    return subTotal;
  }
}

console.log(calculateRecursively(MY_COMPANY) + 1);
