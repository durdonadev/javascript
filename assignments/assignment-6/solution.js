// Option 1
var fullName1 = "john doe";
var spaceIdx1 = fullName1.indexOf(" ");
var firstNameInitial1 = fullName1[0];
var lastnameInitial1 = fullName1[spaceIdx1 + 1];
var result1 = (firstNameInitial1 + lastnameInitial1).toUpperCase();
console.log("john doe: ", result1);

// Option 2
var fullName2 = "Jane smith";
var spaceIdx2 = fullName2.indexOf(" ");
var firstNameInitial2 = fullName2[0];
var lastnameInitial2 = fullName2[spaceIdx2 + 1];
var result2 = (firstNameInitial2 + lastnameInitial2).toUpperCase();
console.log("Jane smith: ", result2);

// Option 3
var fullName3 = "bob Johnson";
var spaceIdx3 = fullName3.indexOf(" ");
var firstNameInitial3 = fullName3[0];
var lastnameInitial3 = fullName3[spaceIdx3 + 1];
var result3 = (firstNameInitial3 + lastnameInitial3).toUpperCase();
console.log("bob Johnson: ", result3);
