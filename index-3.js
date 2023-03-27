
function calculateNetSalary() {
   // Get input values from user
   const basicSalary = Number(document.getElementById("basic_salary").value);
   const benefits = Number(document.getElementById("benefits").value);
 
   // Calculate gross salary
   const grossSalary = basicSalary + benefits;
 
   // Calculate net salary using the tax rates from the table
   const taxableIncome = grossSalary;
   const taxAmount = 0;
   if (taxableIncome <= 24000) {
     taxAmount = taxableIncome * 0.1;
   } else if (taxableIncome <= 32333) {
     taxAmount = 2400 + (taxableIncome - 24000) * 0.25;
   } else {
     taxAmount = 5408.25 + (taxableIncome - 32333) * 0.3;
   }
   const netSalary = grossSalary - taxAmount;
 
   // Display results
   document.getElementById("gross_salary").value = grossSalary;
   document.getElementById("net_salary").value = netSalary;
 }
 
  
  
  
  
  